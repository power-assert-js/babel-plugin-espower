'use strict';

var EspowerLocationDetector = require('espower-location-detector');
var estraverse = require('estraverse');
var cloneWithWhitelist = require('espurify').cloneWithWhitelist;
var babelgen = require('babel-generator');
var define = require('define-properties');
var toBeCaptured = require('./to-be-captured');
var toBeSkipped = require('./to-be-skipped');
var clone = require('clone');
var path = require('path');
var fs = require('fs');
var helperCode = '(' +
  fs.readFileSync(require.resolve('./power-assert-recorder.js'), 'utf8')
    .split('\n')
    .slice(2)
    .join('\n')
  + ')()';

function BabelAssertionVisitor (babel, matcher, options) {
    this.babel = babel;
    this.matcher = matcher;
    this.options = options;
    this.currentArgumentNodePath = null;
    this.argumentModified = false;
    this.valueRecorder = null;
    this.locationDetector = new EspowerLocationDetector(this.options);
    var babelTemplate = babel.template;
    this.helperTemplate = babelTemplate(helperCode);
    var whiteListWithLoc = Object.keys(options.astWhiteList).reduce(function (acc, key) {
        acc[key] = options.astWhiteList[key].concat(['loc']);
        return acc;
    }, {});
    this.purifyAst = cloneWithWhitelist(whiteListWithLoc);
}

BabelAssertionVisitor.prototype.enter = function (nodePath) {
    this.assertionNodePath = nodePath;
    var currentNode = nodePath.node;
    this.location = this.locationDetector.locationFor(currentNode);
    var enclosingFunc = this.findEnclosingFunction(nodePath);
    this.withinGenerator = enclosingFunc && enclosingFunc.generator;
    this.withinAsync = enclosingFunc && enclosingFunc.async;
    var file = nodePath.hub.file;
    this.generateCanonicalCode(file, currentNode); // should be next to enclosingFunc detection
    // store original espath for each node
    var visitorKeys = this.options.visitorKeys;
    estraverse.traverse(currentNode, {
        keys: visitorKeys,
        enter: function (node) {
            if (this.path()) {
                var espath = this.path().join('/');
                define(node, { _espowerEspath: espath });
            }
        }
    });
};

BabelAssertionVisitor.prototype.enterArgument = function (nodePath) {
    var currentNode = nodePath.node;
    var parentNode = nodePath.parent;
    var argMatchResult = this.matcher.matchArgument(currentNode, parentNode);
    if (!argMatchResult) {
        return;
    }
    if (argMatchResult.name === 'message' && argMatchResult.kind === 'optional') {
        // skip optional message argument
        return;
    }
    this.verifyNotInstrumented(currentNode);
    // create recorder per argument
    this.valueRecorder = this.createNewRecorder(nodePath);
    // entering target argument
    this.currentArgumentNodePath = nodePath;
};

BabelAssertionVisitor.prototype.leave = function (nodePath) {
    var currentNode = nodePath.node;
    var visitorKeys = this.options.visitorKeys;
    estraverse.traverse(currentNode, {
        keys: visitorKeys,
        enter: function (node) {
            delete node._espowerEspath;
        }
    });
};

BabelAssertionVisitor.prototype.leaveArgument = function (resultTree) {
    try {
        return this.argumentModified ? this.captureArgument(resultTree) : resultTree;
    } finally {
        this.currentArgumentNodePath = null;
        this.argumentModified = false;
        this.valueRecorder = null;
    }
};

BabelAssertionVisitor.prototype.captureNode = function (nodePath) {
    var currentNode = nodePath.node;
    var t = this.babel.types;
    this.argumentModified = true;
    var relativeEsPath = currentNode._espowerEspath;
    var newNode = t.callExpression(
        t.memberExpression(this.valueRecorder, t.identifier('_capt')),
        [
            currentNode,
            t.valueToNode(relativeEsPath)
        ]);
    define(newNode, { _generatedByEspower: true });
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
    var currentNode = nodePath.node;
    return !!currentNode._generatedByEspower;
};

// internal

BabelAssertionVisitor.prototype.generateCanonicalCode = function (file, node) {
    var src = path.basename(file.opts.filename);
    var gen = new babelgen.CodeGenerator(node, { concise: true, comments: false });
    var output = gen.generate();
    this.canonicalCode = output.code;
    var astAndTokens = this.parseCanonicalCode(file, this.canonicalCode);
    this.ast = JSON.stringify(this.purifyAst(astAndTokens.expression));
    this.tokens = JSON.stringify(astAndTokens.tokens);
    this.visitorKeys = JSON.stringify(this.options.visitorKeys);
};

BabelAssertionVisitor.prototype.parseCanonicalCode = function (file, code) {
    var ast, tokens;

    function doParse(wrapper) {
        var content = wrapper ? wrapper(code) : code;
        var output = file.parse(content);
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

    var exp = ast.body[0].expression;
    var columnOffset = exp.loc.start.column;
    var offsetTree = estraverse.replace(exp, {
        keys: this.options.visitorKeys,
        enter: function (eachNode) {
            eachNode.loc.start = {
                line: 1,
                column: eachNode.loc.start.column - columnOffset
            };
            eachNode.loc.end = {
                line: 1,
                column: eachNode.loc.end.column - columnOffset
            };
            return eachNode;
        }
    });

    return {
        tokens: offsetTokens(tokens).map(slimDown),
        expression: offsetTree
    };
};

function wrappedInGenerator (jsCode) {
    return 'function *wrapper() { ' + jsCode + ' }';
}

function wrappedInAsync (jsCode) {
    return 'async function wrapper() { ' + jsCode + ' }';
}

function offsetTokens (tokens) {
    var i, token, result = [];
    var lineOffset, columnOffset;
    for(i = 0; i < tokens.length; i += 1) {
        token = clone(tokens[i]);
        if (i === 0) {
            columnOffset = token.loc.start.column;
            lineOffset = token.loc.start.line - 1;
        }
        token.loc.start.line -= lineOffset;
        token.loc.start.column -= columnOffset;
        token.loc.end.line -= lineOffset;
        token.loc.end.column -= columnOffset;
        result.push(token);
    }
    return result;
}

function slimDown (token) {
    return {
        type: {
            label: token.type.label
        },
        value: token.value,
        loc: clone(token.loc)
    };
}

BabelAssertionVisitor.prototype.captureArgument = function (node) {
    var t = this.babel.types;
    var props = {
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
    if (this.visitorKeys) {
        props.visitorKeys = this.visitorKeys;
    }
    var newNode = t.callExpression(
        t.memberExpression(this.valueRecorder, t.identifier('_expr')),
        [
            node,
            t.valueToNode(props)
        ]
    );
    define(newNode, { _generatedByEspower: true });
    return newNode;
};

BabelAssertionVisitor.prototype.verifyNotInstrumented = function (currentNode) {
    var types = this.babel.types;
    if (!types.isCallExpression(currentNode)) {
        return;
    }
    if (!types.isMemberExpression(currentNode.callee)) {
        return;
    }
    var prop = currentNode.callee.property;
    if (types.isIdentifier(prop) && prop.name === '_expr') {
        var errorMessage = '[espower] Attempted to transform AST twice.';
        if (this.options.path) {
            errorMessage += ' path: ' + this.options.path;
        }
        throw new Error(errorMessage);
    }
};

BabelAssertionVisitor.prototype.createNewRecorder = function (nodePath) {
    var types = this.babel.types;
    var helperNameNode = this.getRecordHelperNameNode(nodePath);
    var recorderIdent = nodePath.scope.generateUidIdentifier('rec');
    define(recorderIdent, { _generatedByEspower: true });
    var init = types.newExpression(helperNameNode, []);
    define(init, { _generatedByEspower: true });
    nodePath.scope.push({ id: recorderIdent, init: init });
    return recorderIdent;
};

BabelAssertionVisitor.prototype.getRecordHelperNameNode = function (nodePath) {
    var file = nodePath.hub.file;
    var helperNameNode = file.get('powerAssertRecordHelper');
    if (!helperNameNode) {
        helperNameNode = this.createHelperNameNode(nodePath);
        // helperNameNode = file.addImport('power-assert-runtime/recorder', 'default', 'recorder');
    }
    return helperNameNode;
};

BabelAssertionVisitor.prototype.createHelperNameNode = function (nodePath) {
    var types = this.babel.types;
    var file = nodePath.hub.file;
    var programScope = nodePath.scope.getProgramParent();
    var helperNameNode = programScope.generateUidIdentifier('powerAssertRecorder');
    define(helperNameNode, { _generatedByEspower: true });
    file.set('powerAssertRecordHelper', helperNameNode);
    var helperFunctionNode = types.toExpression(this.helperTemplate());
    var visitorKeys = this.options.visitorKeys;
    estraverse.traverse(helperFunctionNode, {
        keys: visitorKeys,
        enter: function (node) {
            define(node, { _generatedByEspower: true });
        }
    });
    helperFunctionNode._compact = true;
    programScope.push({ id: helperNameNode, init: helperFunctionNode });
    return helperNameNode;
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
