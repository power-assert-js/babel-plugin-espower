'use strict';

const EspowerLocationDetector = require('espower-location-detector');
const estraverse = require('estraverse');
const cloneWithWhitelist = require('espurify').cloneWithWhitelist;
const babelParser = require('@babel/parser');
const babelgen = require('@babel/generator');
const babelTemplate = require('@babel/core').template;
const define = require('./define-properties');
const createIsNodeToBeCaptured = require('./to-be-captured');
const createIsNodeToBeSkipped = require('./to-be-skipped');
const fs = require('fs');
const loadTemplate = (filepath) => {
  const templateLines = fs.readFileSync(require.resolve(filepath), 'utf8').split('\n');
  const funcBody = templateLines.slice(2, templateLines.length - 2).join('\n'); // extract template body
  const ast = babelTemplate.ast(`(function () { ${funcBody} })()`);
  return (purify) => purify(ast);
};
const argumentRecorderTemplate = loadTemplate('./argument-recorder.js');
const assertionMessageTemplate = loadTemplate('./assertion-message.js');
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

class ArgumentModification {
  constructor (babel, match, options, purifyAst) {
    this.babel = babel;
    this.options = options;
    this.currentArgumentMatchResult = match;
    this.purifyAst = purifyAst;
  }
  enter (nodePath) {
    // entering target argument
    this.currentArgumentNodePath = nodePath;
    // create recorder per argument
    this.argumentRecorder = this.createNewArgumentRecorder(nodePath);
  }
  leave (nodePath) {

  }
  createNewArgumentRecorder (nodePath) {
    const types = this.babel.types;
    const purifyAst = this.purifyAst;
    const argRecNameNode = this.getOrCreateNode(nodePath, 'ArgumentRecorder', () => {
      return types.toExpression(argumentRecorderTemplate(purifyAst));
    });
    const recorderIdent = nodePath.scope.generateUidIdentifier('ag');
    define(recorderIdent, { _generatedByEspower: true });
    const init = types.newExpression(argRecNameNode, [
      this.assertionNodePath.node.callee,
      this.metadataIdent,
      types.valueToNode(this.currentArgumentMatchResult.index)
    ]);
    define(init, { _generatedByEspower: true });
    nodePath.scope.push({ id: recorderIdent, init: init });
    return recorderIdent;
  }
  getOrCreateNode (nodePath, keyName, generateNode) {
    const file = nodePath.hub.file;
    // helperNameNode = file.addImport('power-assert-runtime/recorder', 'default', 'recorder');
    return file.get(keyName) || this.createNode(nodePath, keyName, generateNode);
  }
  createNode (nodePath, keyName, generateNode) {
    const file = nodePath.hub.file;
    const programScope = nodePath.scope.getProgramParent();
    const ident = programScope.generateUidIdentifier(keyName);
    define(ident, { _generatedByEspower: true });
    file.set(keyName, ident);
    const generatedNode = generateNode();
    const visitorKeys = this.options.visitorKeys;
    estraverse.traverse(generatedNode, {
      keys: visitorKeys,
      enter: function (node) {
        define(node, { _generatedByEspower: true });
      }
    });
    generatedNode._compact = true;
    programScope.push({ id: ident, init: generatedNode });
    return ident;
  }
}

class NoModification {

}

class BabelAssertionVisitor {
  constructor (babel, patternMatcher, options) {
    this.babel = babel;
    this.patternMatcher = patternMatcher;
    this.options = options;
    this.currentArgumentNodePath = null;
    this.currentArgumentMatchResult = null;
    this.argumentModified = false;
    this.argumentRecorder = null;
    this.argumentModifiedHistory = [];
    this.messageUpdated = false;
    const whiteListWithRange = Object.keys(options.astWhiteList).reduce((acc, key) => {
      acc[key] = options.astWhiteList[key].concat(['range']);
      return acc;
    }, {});
    this.purifyAst = cloneWithWhitelist(whiteListWithRange);
    this.isNodeToBeSkipped = createIsNodeToBeSkipped(babel.types);
    this.isNodeToBeCaptured = createIsNodeToBeCaptured(babel.types);
  }

  enter (nodePath) {
    this.assertionNodePath = nodePath;
    const enclosingFunc = this.findEnclosingFunction(nodePath);
    this.withinGenerator = enclosingFunc && enclosingFunc.generator;
    this.withinAsync = enclosingFunc && enclosingFunc.async;
    this.canonicalCode = this.generateCanonicalCode(nodePath);
    // should be before generateMetadata
    this.configIdent = this.generatePowerAssertConfig(nodePath);
    // should be after configIdent
    // should be after enclosingFunc detection
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
    if (!argMatchResult) {
      this.currentModification = new NoModification();
      return;
    }
    this.verifyNotInstrumented(currentNode);
    this.currentModification = new ArgumentModification(this.babel, argMatchResult, this.options, this.purifyAst);
    // entering target argument
    this.currentArgumentNodePath = nodePath;
    this.currentArgumentMatchResult = argMatchResult;
    // create recorder per argument
    this.argumentRecorder = this.createNewArgumentRecorder(nodePath);
  }

  leaveArgument (nodePath) {
    const currentNode = nodePath.node;
    const shouldCapture = this.argumentModified || this.toBeCaptured(nodePath);
    try {
      const resultNode = shouldCapture ? this.captureArgument(nodePath) : currentNode;
      if (this.currentArgumentMatchResult.name === 'message' && this.currentArgumentMatchResult.kind === 'optional') {
        this.messageUpdated = true;
        // enclose it in AssertionMessage
        return this.createNewAssertionMessage(nodePath, resultNode, this.currentArgumentMatchResult.index);
      } else {
        return resultNode;
      }
    } finally {
      this.currentArgumentNodePath = null;
      this.currentArgumentMatchResult = null;
      this.argumentModifiedHistory.push(this.argumentModified);
      this.argumentModified = false;
      this.argumentRecorder = null;
    }
  }

  captureNode (nodePath) {
    const currentNode = nodePath.node;
    const t = this.babel.types;
    const relativeEsPath = currentNode._espowerEspath;
    const newNode = t.callExpression(
      t.memberExpression(this.argumentRecorder, t.identifier('_tap')),
      [
        currentNode,
        t.valueToNode(relativeEsPath)
      ]);
    define(newNode, { _generatedByEspower: true });
    this.argumentModified = true;
    return newNode;
  }

  toBeSkipped (nodePath) {
    return this.isNodeToBeSkipped(nodePath);
  }

  toBeCaptured (nodePath) {
    return this.isNodeToBeCaptured(nodePath);
  }

  isArgumentModified () {
    return !!this.argumentModified;
  }

  isCapturingArgument () {
    return !!this.currentArgumentNodePath;
  }

  isLeavingAssertion (nodePath) {
    return this.assertionNodePath === nodePath;
  }

  isLeavingArgument (nodePath) {
    return this.currentArgumentNodePath === nodePath;
  }

  isGeneratedNode ({ node }) {
    return !!node._generatedByEspower;
  }

  // internal

  generateCanonicalCode (nodePath) {
    const gen = new babelgen.CodeGenerator(nodePath.node, { concise: true, comments: false });
    const { code } = gen.generate();
    if (this.options.embedAst) {
      this.generateAstAndTokensAndVisitorKeys(nodePath, code);
    }
    return code;
  }

  generateAstAndTokensAndVisitorKeys (nodePath, canonicalCode) {
    const file = nodePath.hub.file;
    const options = this.options;
    const types = this.babel.types;
    const { tokens, expression } = this.parseCanonicalCode(file, canonicalCode);
    this.ast = JSON.stringify(this.purifyAst(expression));
    this.tokens = JSON.stringify(tokens);
    this.visitorKeys = this.getOrCreateNode(nodePath, 'powerAssertVisitorKeys', () => {
      return types.stringLiteral(JSON.stringify(options.visitorKeys));
    });
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
    if (onlyLastArgumentIsOmitted) {
      // appending AssertionMessage in place of omitted message argument (as index -1)
      currentNode.arguments.push(this.createNewAssertionMessage(nodePath, null, -1));
    } else if (numDefinedParams === numActualArgs) {
      const lastIndex = numActualArgs - 1;
      const lastActualArg = currentNode.arguments[lastIndex];
      if (this.toBeSkipped(lastActualArg)) {
        // last arg may be a string literal
        currentNode.arguments[lastIndex] = this.createNewAssertionMessage(nodePath, lastActualArg, lastIndex);
      }
    }
    return currentNode;
  }

  generatePowerAssertConfig (nodePath) {
    const types = this.babel.types;
    const options = this.options;
    return this.getOrCreateNode(nodePath, 'powerAssertConfig', () => {
      return types.valueToNode(options.patterns);
    });
  }

  generateMetadata (nodePath) {
    const t = this.babel.types;
    const locationDetector = new EspowerLocationDetector(this.options);
    const { source, line } = locationDetector.locationFor(nodePath.node);
    const props = {
      content: this.canonicalCode,
      filepath: source,
      line
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
    if (this.visitorKeys) {
      const visitorKeysNode = t.objectProperty(t.identifier('visitorKeys'), this.visitorKeys);
      propsNode.properties.push(visitorKeysNode);
    }
    // TODO: this is not an optional key
    if (typeof this.patternMatcher.index === 'number') {
      const configAccess = t.memberExpression(this.configIdent, t.valueToNode(this.patternMatcher.index), true);
      const configNode = t.objectProperty(t.identifier('config'), configAccess);
      propsNode.properties.push(configNode);
    }
    const metadataIdent = nodePath.scope.generateUidIdentifier('am');
    define(metadataIdent, { _generatedByEspower: true });
    nodePath.scope.push({ id: metadataIdent, init: propsNode });
    return metadataIdent;
  }

  createNewAssertionMessage (nodePath, originalMessageNode, matchIndex) {
    const _this = this;
    const t = this.babel.types;
    const assertionMessageNameNode = this.getOrCreateNode(nodePath, 'AssertionMessage', () => {
      return t.toExpression(assertionMessageTemplate(_this.purifyAst));
    });
    const newArgs = [
      this.metadataIdent,
      t.valueToNode(matchIndex)
    ];
    if (originalMessageNode) {
      newArgs.push(originalMessageNode);
    }
    const newNode = t.newExpression(assertionMessageNameNode, newArgs);
    define(newNode, { _generatedByEspower: true });
    return newNode;
  }

  captureArgument (nodePath) {
    const currentNode = nodePath.node;
    const relativeEsPath = currentNode._espowerEspath;
    const t = this.babel.types;
    const newNode = t.callExpression(
      t.memberExpression(this.argumentRecorder, t.identifier('_rec')),
      [
        currentNode,
        t.valueToNode(relativeEsPath)
      ]
    );
    define(newNode, { _generatedByEspower: true });
    this.argumentModified = true;
    return newNode;
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

  createNewArgumentRecorder (nodePath) {
    const _this = this;
    const types = this.babel.types;
    const argRecNameNode = this.getOrCreateNode(nodePath, 'ArgumentRecorder', () => {
      return types.toExpression(argumentRecorderTemplate(_this.purifyAst));
    });
    const recorderIdent = nodePath.scope.generateUidIdentifier('ag');
    define(recorderIdent, { _generatedByEspower: true });
    const init = types.newExpression(argRecNameNode, [
      this.assertionNodePath.node.callee,
      this.metadataIdent,
      types.valueToNode(this.currentArgumentMatchResult.index)
    ]);
    define(init, { _generatedByEspower: true });
    nodePath.scope.push({ id: recorderIdent, init: init });
    return recorderIdent;
  }

  getOrCreateNode (nodePath, keyName, generateNode) {
    const file = nodePath.hub.file;
    // helperNameNode = file.addImport('power-assert-runtime/recorder', 'default', 'recorder');
    return file.get(keyName) || this.createNode(nodePath, keyName, generateNode);
  }

  createNode (nodePath, keyName, generateNode) {
    const file = nodePath.hub.file;
    const programScope = nodePath.scope.getProgramParent();
    const ident = programScope.generateUidIdentifier(keyName);
    define(ident, { _generatedByEspower: true });
    file.set(keyName, ident);
    const generatedNode = generateNode();
    const visitorKeys = this.options.visitorKeys;
    estraverse.traverse(generatedNode, {
      keys: visitorKeys,
      enter: function (node) {
        define(node, { _generatedByEspower: true });
      }
    });
    generatedNode._compact = true;
    programScope.push({ id: ident, init: generatedNode });
    return ident;
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
