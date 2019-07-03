'use strict';

const EspowerLocationDetector = require('espower-location-detector');
const { ArgumentModification, NoModification } = require('./argument-modification');
const { createNewAssertionMessageNode, getOrCreateNode } = require('./create-node');
const estraverse = require('estraverse');
const cloneWithWhitelist = require('espurify').cloneWithWhitelist;
const babelParser = require('@babel/parser');
const babelgen = require('@babel/generator');
const define = require('./define-properties');
const createIsNodeToBeCaptured = require('./to-be-captured');
const createIsNodeToBeSkipped = require('./to-be-skipped');
const wrappedInGenerator = (jsCode) => `function *wrapper() { ${jsCode} }`;
const wrappedInAsync = (jsCode) => `async function wrapper() { ${jsCode} }`;
const offsetAndSlimDownTokens = (tokens) => {
  const result = [];
  let i, token, newToken, columnOffset;
  for (i = 0; i < tokens.length; i += 1) {
    token = tokens[i];
    if (i === 0) {
      columnOffset = token.loc.start.column;
    }
    newToken = {
      type: {
        label: token.type.label
      }
    };
    if (typeof token.value !== 'undefined') {
      newToken.value = token.value;
    }
    newToken.range = [
      token.loc.start.column - columnOffset,
      token.loc.end.column - columnOffset
    ];
    result.push(newToken);
  }
  return result;
};

class BabelAssertionVisitor {
  constructor (babel, patternMatcher, options) {
    this.babel = babel;
    this.patternMatcher = patternMatcher;
    this.options = options;
    this.argumentModifiedHistory = [];
    this.messageUpdated = false;
    const whiteListWithRange = Object.keys(options.astWhiteList).reduce((acc, key) => {
      acc[key] = options.astWhiteList[key].concat(['range']);
      return acc;
    }, {});
    this.cloneAst = cloneWithWhitelist(whiteListWithRange);
    this.isNodeToBeSkipped = createIsNodeToBeSkipped(babel.types);
    this.isNodeToBeCaptured = createIsNodeToBeCaptured(babel.types);
  }

  enter (nodePath) {
    this.assertionNodePath = nodePath;
    const enclosingFunc = this.findEnclosingFunction(nodePath);
    this.withinGenerator = enclosingFunc && enclosingFunc.generator;
    this.withinAsync = enclosingFunc && enclosingFunc.async;
    this.canonicalCode = this.generateCanonicalCode(nodePath);
    if (this.options.embedAst) {
      this.generateAstAndTokensAndVisitorKeys(nodePath, this.canonicalCode);
    }
    // should be before generateMetadata
    this.configIdent = this.generatePowerAssertConfig(nodePath);
    // should be after configIdent creation and enclosingFunc detection
    this.metadataIdent = this.generateMetadata(nodePath);
    // store original espath for each node
    const visitorKeys = this.options.visitorKeys;
    estraverse.traverse(nodePath.node, {
      keys: visitorKeys,
      enter: function (node) {
        if (this.path()) {
          const _espowerEspath = this.path().join('/');
          define(node, { _espowerEspath });
        }
      }
    });
  }

  leave (nodePath) {
    const currentNode = nodePath.node;
    const visitorKeys = this.options.visitorKeys;
    const modifiedSome = this.argumentModifiedHistory.some((b) => b);
    try {
      return modifiedSome ? this.appendMessage(nodePath) : currentNode;
    } finally {
      this.argumentModifiedHistory = [];
      this.messageUpdated = false;
      this.metadataIdent = null;
      estraverse.traverse(currentNode, {
        keys: visitorKeys,
        enter: function (node) {
          delete node._espowerEspath;
        }
      });
    }
  }

  enterArgument (nodePath) {
    const currentNode = nodePath.node;
    const parentNode = nodePath.parent;
    const argMatchResult = this.patternMatcher.matcher.matchArgument(currentNode, parentNode);
    if (argMatchResult) {
      this.verifyNotInstrumented(currentNode);
      this.currentModification = new ArgumentModification(this.babel, argMatchResult, this.options, this.cloneAst, this.assertionNodePath, this.metadataIdent);
    } else {
      this.currentModification = new NoModification();
    }
    this.currentModification.enter(nodePath);
  }

  leaveArgument (nodePath) {
    const retNode = this.currentModification.leave(nodePath);
    this.messageUpdated = this.currentModification.isMessageUpdated();
    this.argumentModifiedHistory.push(this.currentModification.isArgumentModified());
    this.currentModification = null;
    return retNode;
  }

  captureNode (nodePath) {
    return this.currentModification.captureNode(nodePath);
  }

  toBeSkipped (nodePath) {
    return this.isNodeToBeSkipped(nodePath);
  }

  toBeCaptured (nodePath) {
    return this.isNodeToBeCaptured(nodePath);
  }

  isCapturingArgument () {
    return this.currentModification && this.currentModification.isCapturing();
  }

  isLeavingAssertion (nodePath) {
    return this.assertionNodePath === nodePath;
  }

  isLeavingArgument (nodePath) {
    return this.currentModification.isLeaving(nodePath);
  }

  isGeneratedNode ({ node }) {
    return !!node._generatedByEspower;
  }

  // internal

  generateCanonicalCode (nodePath) {
    const gen = new babelgen.CodeGenerator(nodePath.node, { concise: true, comments: false });
    const { code } = gen.generate();
    return code;
  }

  generateAstAndTokensAndVisitorKeys (nodePath, canonicalCode) {
    const file = nodePath.hub.file;
    const types = this.babel.types;
    const { tokens, expression } = this.parseCanonicalCode(file, canonicalCode);
    this.ast = JSON.stringify(this.cloneAst(expression));
    this.tokens = JSON.stringify(tokens);
    const visitorKeys = this.options.visitorKeys;
    const keyName = 'powerAssertVisitorKeys';
    const generateNode = () => {
      return types.stringLiteral(JSON.stringify(visitorKeys));
    };
    this.visitorKeysNode = getOrCreateNode({ nodePath, keyName, generateNode, visitorKeys });
  }

  parseCanonicalCode (file, code) {
    let wrapper;
    if (this.withinAsync) {
      wrapper = wrappedInAsync;
    } else if (this.withinGenerator) {
      wrapper = wrappedInGenerator;
    }
    const { ast, tokens } = this.parseWithWrapper(file, code, wrapper);
    const expr = ast.body[0].expression;
    const columnOffset = expr.loc.start.column;
    const visitorKeys = this.options.visitorKeys;
    const offsetTree = estraverse.replace(expr, {
      keys: visitorKeys,
      enter: function (eachNode) {
        eachNode.range = [
          eachNode.loc.start.column - columnOffset,
          eachNode.loc.end.column - columnOffset
        ];
        delete eachNode.loc;
        return eachNode;
      }
    });

    return {
      tokens: offsetAndSlimDownTokens(tokens),
      expression: offsetTree
    };
  }

  parseWithWrapper (file, code, wrapper) {
    let ast, tokens;
    const content = wrapper ? wrapper(code) : code;
    const output = babelParser.parse(content, Object.assign({}, file.opts.parserOpts, { tokens: true }));
    if (wrapper) {
      ast = output.program.body[0].body;
      tokens = output.tokens.slice(6, -2);
    } else {
      ast = output.program;
      tokens = output.tokens.slice(0, -1);
    }
    return {
      ast,
      tokens
    };
  }

  appendMessage (nodePath) {
    const currentNode = nodePath.node;
    if (this.messageUpdated) {
      // AssertionMessage is already merged with existing message argument
      return currentNode;
    }
    const sigs = this.patternMatcher.matcher.argumentSignatures();
    const numDefinedParams = sigs.length;
    const lastParam = sigs[numDefinedParams - 1];
    const hasOptionalMessageArgument = (lastParam.name === 'message' && lastParam.kind === 'optional');
    if (!hasOptionalMessageArgument) {
      return currentNode;
    }
    const numActualArgs = currentNode.arguments.length;
    const onlyLastArgumentIsOmitted = (numDefinedParams - numActualArgs === 1);

    const params = {
      nodePath,
      types: this.babel.types,
      visitorKeys: this.options.visitorKeys,
      metadataIdent: this.metadataIdent,
      cloneAst: this.cloneAst
    };

    if (onlyLastArgumentIsOmitted) {
      // appending AssertionMessage in place of omitted message argument (as index -1)
      currentNode.arguments.push(createNewAssertionMessageNode(params));
    } else if (numDefinedParams === numActualArgs) {
      const lastIndex = numActualArgs - 1;
      const lastActualArg = currentNode.arguments[lastIndex];
      if (this.toBeSkipped(lastActualArg)) {
        // last arg may be a string literal
        currentNode.arguments[lastIndex] = createNewAssertionMessageNode(Object.assign({}, {
          originalMessageNode: lastActualArg,
          matchIndex: lastIndex
        }, params));
      }
    }
    return currentNode;
  }

  generatePowerAssertConfig (nodePath) {
    const types = this.babel.types;
    const options = this.options;
    const generateNode = () => {
      const patternIndexIdent = types.identifier('ptnidx');
      const contentIdent = types.identifier('content');
      const lineIdent = types.identifier('line');
      const extraIdent = types.identifier('extra');
      const configVersion = 2;
      const versionIdent = types.identifier('version');
      const filepathIdent = types.identifier('filepath');
      const patternsIdent = getOrCreateNode({
        nodePath,
        keyName: 'pwptn',
        generateNode: () => {
          const jsonStrNode = types.stringLiteral(JSON.stringify(options.patterns));
          return types.callExpression(
            types.memberExpression(types.identifier('JSON'), types.identifier('parse')),
            [ jsonStrNode ]
          );
        },
        visitorKeys
      });
      const objectAssignMethod = types.memberExpression(types.identifier('Object'), types.identifier('assign'));
      const funcNode = types.arrowFunctionExpression([
        patternIndexIdent,
        contentIdent,
        filepathIdent,
        lineIdent,
        extraIdent
      ], types.blockStatement([
        types.returnStatement(types.callExpression(objectAssignMethod, [
          types.objectExpression([
            types.objectProperty(versionIdent, types.numericLiteral(configVersion), false, false),
            types.objectProperty(contentIdent, contentIdent, false, true),
            types.objectProperty(filepathIdent, filepathIdent, false, true),
            types.objectProperty(lineIdent, lineIdent, false, true)
          ]),
          extraIdent,
          types.memberExpression(patternsIdent, patternIndexIdent, true)
        ]))
      ]));
      return funcNode;
    };
    const visitorKeys = options.visitorKeys;
    const keyName = 'pwmeta';
    return getOrCreateNode({ nodePath, keyName, generateNode, visitorKeys });
  }

  generateMetadata (nodePath) {
    const t = this.babel.types;
    const props = {
    };
    if (this.withinAsync) {
      props.async = true;
    }
    if (this.withinGenerator) {
      props.generator = true;
    }
    if (this.ast) {
      props.ast = this.ast;
    }
    if (this.tokens) {
      props.tokens = this.tokens;
    }
    const propsNode = t.valueToNode(props);
    if (this.visitorKeysNode) {
      propsNode.properties.push(t.objectProperty(t.identifier('visitorKeys'), this.visitorKeysNode));
    }
    const locationDetector = new EspowerLocationDetector(this.options);
    const { source, line } = locationDetector.locationFor(nodePath.node);
    const args = [
      t.numericLiteral(this.patternMatcher.index),
      t.stringLiteral(this.canonicalCode),
      t.stringLiteral(source),
      t.numericLiteral(line)
    ];
    if (propsNode.properties.length > 0) {
      args.push(propsNode);
    }
    const callConfigFuncNode = t.callExpression(this.configIdent, args);
    const metadataIdent = nodePath.scope.generateUidIdentifier('am');
    define(metadataIdent, { _generatedByEspower: true });
    nodePath.scope.push({ id: metadataIdent, init: callConfigFuncNode });
    return metadataIdent;
  }

  verifyNotInstrumented (currentNode) {
    const types = this.babel.types;
    if (!types.isCallExpression(currentNode)) {
      return;
    }
    if (!types.isMemberExpression(currentNode.callee)) {
      return;
    }
    const prop = currentNode.callee.property;
    if (types.isIdentifier(prop) && prop.name === '_rec') {
      let errorMessage = '[espower] Attempted to transform AST twice.';
      if (this.options.path) {
        errorMessage += ' path: ' + this.options.path;
      }
      throw new Error(errorMessage);
    }
  }

  findEnclosingFunction (nodePath) {
    if (!nodePath) {
      return null;
    }
    if (this.babel.types.isFunction(nodePath.node)) {
      return nodePath.node;
    }
    return this.findEnclosingFunction(nodePath.parentPath);
  }
}

module.exports = BabelAssertionVisitor;
