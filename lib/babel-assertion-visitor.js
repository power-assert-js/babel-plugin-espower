'use strict';

const EspowerLocationDetector = require('espower-location-detector');
const estraverse = require('estraverse');
const cloneWithWhitelist = require('espurify').cloneWithWhitelist;
const babelParser = require('@babel/parser');
const babelgen = require('@babel/generator');
const babelTemplate = require('@babel/core').template;
const assign = require('core-js/library/fn/object/assign');
const define = require('./define-properties');
const toBeCaptured = require('./to-be-captured');
const toBeSkipped = require('./to-be-skipped');
const fs = require('fs');
const argumentRecorderHelperCode = '(' +
  fs.readFileSync(require.resolve('./argument-recorder.js'), 'utf8')
    .split('\n')
    .slice(2)
    .join('\n')
  + ')()';
const assertionMessageHelperCode = '(' +
  fs.readFileSync(require.resolve('./assertion-message.js'), 'utf8')
    .split('\n')
    .slice(2)
    .join('\n')
  + ')()';
const argumentRecorderTemplate = function () {
    const ast = babelTemplate.ast(argumentRecorderHelperCode);
    return function (purify) {
        return purify(ast);
    };
}();
const assertionMessageTemplate = function () {
    const ast = babelTemplate.ast(assertionMessageHelperCode);
    return function (purify) {
        return purify(ast);
    };
}();

function BabelAssertionVisitor (babel, patternMatcher, options) {
    this.babel = babel;
    this.patternMatcher = patternMatcher;
    this.options = options;
    this.currentArgumentNodePath = null;
    this.currentArgumentMatchResult = null;
    this.argumentModified = false;
    this.argumentRecorder = null;
    this.argumentModifiedHistory = [];
    this.messageUpdated = false;
    this.locationDetector = new EspowerLocationDetector(this.options);
    const whiteListWithRange = Object.keys(options.astWhiteList).reduce(function (acc, key) {
        acc[key] = options.astWhiteList[key].concat(['range']);
        return acc;
    }, {});
    this.purifyAst = cloneWithWhitelist(whiteListWithRange);
}

BabelAssertionVisitor.prototype.enter = function (nodePath) {
    this.assertionNodePath = nodePath;
    const currentNode = nodePath.node;
    this.location = this.locationDetector.locationFor(currentNode);
    const enclosingFunc = this.findEnclosingFunction(nodePath);
    this.withinGenerator = enclosingFunc && enclosingFunc.generator;
    this.withinAsync = enclosingFunc && enclosingFunc.async;
    this.generateCanonicalCode(nodePath, currentNode); // should be next to enclosingFunc detection
    const t = this.babel.types;
    const _this = this;
    // should be before generateMetadata
    this.configIdent = this.getOrCreateNode(nodePath, 'powerAssertConfig', function () {
        return t.valueToNode(_this.options.patterns);
    });
    // should be after configIdent
    this.metadataIdent = this.generateMetadata(nodePath);
    // store original espath for each node
    const visitorKeys = this.options.visitorKeys;
    estraverse.traverse(currentNode, {
        keys: visitorKeys,
        enter: function (node) {
            if (this.path()) {
                const espath = this.path().join('/');
                define(node, { _espowerEspath: espath });
            }
        }
    });
};

BabelAssertionVisitor.prototype.enterArgument = function (nodePath) {
    const currentNode = nodePath.node;
    const parentNode = nodePath.parent;
    const argMatchResult = this.patternMatcher.matcher.matchArgument(currentNode, parentNode);
    if (!argMatchResult) {
        return;
    }
    // entering target argument
    this.currentArgumentNodePath = nodePath;
    this.currentArgumentMatchResult = argMatchResult;
    this.verifyNotInstrumented(currentNode);
    // create recorder per argument
    this.argumentRecorder = this.createNewArgumentRecorder(nodePath);
};

BabelAssertionVisitor.prototype.leave = function (nodePath) {
    const currentNode = nodePath.node;
    const visitorKeys = this.options.visitorKeys;
    const modifiedSome = this.argumentModifiedHistory.some(function(b) { return b; });
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
};

BabelAssertionVisitor.prototype.leaveArgument = function (nodePath) {
    const currentNode = nodePath.node;
    const shouldCapture = this.argumentModified || this.toBeCaptured(nodePath);
    try {
        const resultNode = shouldCapture ? this.captureArgument(nodePath) : currentNode;
        if (this.currentArgumentMatchResult.name === 'message' && this.currentArgumentMatchResult.kind === 'optional') {
            this.messageUpdated = true;
            return this.createNewAssertionMessage(nodePath, resultNode, this.currentArgumentMatchResult.index);  // enclose it in AssertionMessage
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
};

BabelAssertionVisitor.prototype.captureNode = function (nodePath) {
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
};

BabelAssertionVisitor.prototype.toBeSkipped = function (nodePath) {
    return toBeSkipped(this.babel.types, nodePath);
};

BabelAssertionVisitor.prototype.toBeCaptured = function (nodePath) {
    return toBeCaptured(this.babel.types, nodePath);
};

BabelAssertionVisitor.prototype.isArgumentModified = function () {
    return !!this.argumentModified;
};

BabelAssertionVisitor.prototype.isCapturingArgument = function () {
    return !!this.currentArgumentNodePath;
};

BabelAssertionVisitor.prototype.isLeavingAssertion = function (nodePath) {
    return this.assertionNodePath === nodePath;
};

BabelAssertionVisitor.prototype.isLeavingArgument = function (nodePath) {
    return this.currentArgumentNodePath === nodePath;
};

BabelAssertionVisitor.prototype.isGeneratedNode = function (nodePath) {
    const currentNode = nodePath.node;
    return !!currentNode._generatedByEspower;
};

// internal

BabelAssertionVisitor.prototype.generateCanonicalCode = function (nodePath, node) {
    const file = nodePath.hub.file;
    const gen = new babelgen.CodeGenerator(node, { concise: true, comments: false });
    const output = gen.generate();
    this.canonicalCode = output.code;
    if (!this.options.embedAst) {
        return;
    }
    const astAndTokens = this.parseCanonicalCode(file, this.canonicalCode);
    this.ast = JSON.stringify(this.purifyAst(astAndTokens.expression));
    this.tokens = JSON.stringify(astAndTokens.tokens);
    const _this = this;
    const types = this.babel.types;
    this.visitorKeys = this.getOrCreateNode(nodePath, 'powerAssertVisitorKeys', function () {
        return types.stringLiteral(JSON.stringify(_this.options.visitorKeys));
    });
};

BabelAssertionVisitor.prototype.parseCanonicalCode = function (file, code) {
    let ast, tokens;

    function doParse(wrapper) {
        const content = wrapper ? wrapper(code) : code;
        const output = babelParser.parse(content, assign({}, file.opts.parserOpts, {tokens: true}));
        if (wrapper) {
            ast = output.program.body[0].body;
            tokens = output.tokens.slice(6, -2);
        } else {
            ast = output.program;
            tokens = output.tokens.slice(0, -1);
        }
    }

    if (this.withinAsync) {
        doParse(wrappedInAsync);
    } else if (this.withinGenerator) {
        doParse(wrappedInGenerator);
    } else {
        doParse();
    }

    const exp = ast.body[0].expression;
    const columnOffset = exp.loc.start.column;
    const offsetTree = estraverse.replace(exp, {
        keys: this.options.visitorKeys,
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
};

function wrappedInGenerator (jsCode) {
    return 'function *wrapper() { ' + jsCode + ' }';
}

function wrappedInAsync (jsCode) {
    return 'async function wrapper() { ' + jsCode + ' }';
}

function offsetAndSlimDownTokens (tokens) {
    const result = [];
    let i, token, newToken, columnOffset;
    for(i = 0; i < tokens.length; i += 1) {
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
}

BabelAssertionVisitor.prototype.appendMessage = function (nodePath) {
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
        // appending AssertionMessage in place of omitted message argument
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
};

BabelAssertionVisitor.prototype.generateMetadata = function (nodePath) {
    const t = this.babel.types;
    const props = {
        content: this.canonicalCode,
        filepath: this.location.source,
        line: this.location.line
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
    if (typeof this.patternMatcher.index === 'number') {
        const configAccess = t.memberExpression(this.configIdent, t.valueToNode(this.patternMatcher.index), true);
        const configNode = t.objectProperty(t.identifier('config'), configAccess);
        propsNode.properties.push(configNode);
    }
    const metadataIdent = nodePath.scope.generateUidIdentifier('am');
    define(metadataIdent, { _generatedByEspower: true });
    nodePath.scope.push({ id: metadataIdent, init: propsNode });
    return metadataIdent;
};

BabelAssertionVisitor.prototype.createNewAssertionMessage = function (nodePath, originalMessageNode, matchIndex) {
    const _this = this;
    const t = this.babel.types;
    const assertionMessageNameNode = this.getOrCreateNode(nodePath, 'AssertionMessage', function () {
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
};

BabelAssertionVisitor.prototype.captureArgument = function (nodePath) {
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
};

BabelAssertionVisitor.prototype.verifyNotInstrumented = function (currentNode) {
    const types = this.babel.types;
    if (!types.isCallExpression(currentNode)) {
        return;
    }
    if (!types.isMemberExpression(currentNode.callee)) {
        return;
    }
    const prop = currentNode.callee.property;
    if (types.isIdentifier(prop) && prop.name === '_rec') {
        const errorMessage = '[espower] Attempted to transform AST twice.';
        if (this.options.path) {
            errorMessage += ' path: ' + this.options.path;
        }
        throw new Error(errorMessage);
    }
};

BabelAssertionVisitor.prototype.createNewArgumentRecorder = function (nodePath) {
    const _this = this;
    const types = this.babel.types;
    const currentNode = nodePath.node;
    const argRecNameNode = this.getOrCreateNode(nodePath, 'ArgumentRecorder', function () {
        return types.toExpression(argumentRecorderTemplate(_this.purifyAst));
    });
    const recorderIdent = nodePath.scope.generateUidIdentifier('ag');
    define(recorderIdent, { _generatedByEspower: true });
    // const relativeEsPath = currentNode._espowerEspath;
    // const gen = new babelgen.CodeGenerator(currentNode, { concise: true, comments: false });
    // const output = gen.generate();
    // const argumentCanonicalCode = output.code;
    // const meta = Object.assign({}, {
    //     espath: relativeEsPath,
    //     code: argumentCanonicalCode
    // }, this.currentArgumentMatchResult);  // includes match index
    // const meta = {
    //     index: this.currentArgumentMatchResult.index
    // };
    const init = types.newExpression(argRecNameNode, [
        this.assertionNodePath.node.callee,
        this.metadataIdent,
        // types.valueToNode(meta)
        types.valueToNode(this.currentArgumentMatchResult.index)
    ]);
    define(init, { _generatedByEspower: true });
    nodePath.scope.push({ id: recorderIdent, init: init });
    return recorderIdent;
};

BabelAssertionVisitor.prototype.getOrCreateNode = function (nodePath, keyName, generateNode) {
    const file = nodePath.hub.file;
    // helperNameNode = file.addImport('power-assert-runtime/recorder', 'default', 'recorder');
    return file.get(keyName) || this.createNode(nodePath, keyName, generateNode);
};

BabelAssertionVisitor.prototype.createNode = function (nodePath, keyName, generateNode) {
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
};

BabelAssertionVisitor.prototype.findEnclosingFunction = function (nodePath) {
    if (!nodePath) {
        return null;
    }
    if (this.babel.types.isFunction(nodePath.node)) {
        return nodePath.node;
    }
    return this.findEnclosingFunction(nodePath.parentPath);
};

module.exports = BabelAssertionVisitor;
