'use strict';

var EspowerLocationDetector = require('espower-location-detector');
var estraverse = require('estraverse');
var babelgen = require('babel-generator');
var define = require('define-properties');
var toBeCaptured = require('./to-be-captured');
var toBeSkipped = require('./to-be-skipped');
var helperCode = [
    '(function () {',
    '    var captured = [];',
    '    function _capt (value, espath) {',
    '        captured.push({value: value, espath: espath});',
    '        return value;',
    '    }',
    '    function _expr (value, args) {',
    '        var source = {',
    '            content: args.content,',
    '            filepath: args.filepath,',
    '            line: args.line',
    '        };',
    '        if (args.generator) {',
    '            source.generator = true;',
    '        }',
    '        if (args.async) {',
    '            source.async = true;',
    '        }',
    '        return {',
    '            powerAssertContext: {',
    '                value: value,',
    '                events: captured',
    '            },',
    '            source: source',
    '        };',
    '    }',
    '    return {',
    '        _capt: _capt,',
    '        _expr: _expr',
    '    };',
    '});'
].join('\n');


function BabelAssertionVisitor (babel, matcher, nodePath, enclosingFunc, options) {
    this.options = options || {};
    this.matcher = matcher;
    this.locationDetector = new EspowerLocationDetector(this.options);
    this.argumentModified = false;
    this.withinGenerator = enclosingFunc && enclosingFunc.generator;
    this.withinAsync = enclosingFunc && enclosingFunc.async;

    this.babel = babel;
    this.assertionBabelNodePath = nodePath;
    this.currentArgumentBabelNodePath = null;
    var babelTemplate = babel.template;
    this.helperTemplate = babelTemplate(helperCode);
}

BabelAssertionVisitor.prototype.enter = function (currentNode, parentNode) {
    this.canonicalCode = this.generateCanonicalCode(currentNode);
    var loc = this.locationDetector.locationFor(currentNode);
    this.filepath = loc.source;
    this.lineNum = loc.line;
};

BabelAssertionVisitor.prototype.generateCanonicalCode = function (node) {
    var gen = new babelgen.CodeGenerator(node, { concise: true });
    return gen.generate().code;
};

BabelAssertionVisitor.prototype.leave = function (currentNode, parentNode) {
    // nothing to do now
};

BabelAssertionVisitor.prototype.isArgumentModified = function () {
    return !!this.argumentModified;
};

BabelAssertionVisitor.prototype.captureArgument = function (node) {
    var t = this.babel.types;
    var props = {
        content: this.canonicalCode,
        filepath: this.filepath,
        line: this.lineNum
    };
    if (this.withinAsync) {
        props.async = true;
    }
    if (this.withinGenerator) {
        props.generator = true;
    }
    var newNode = t.callExpression(
        t.memberExpression(this.powerAssertCalleeObject, t.identifier('_expr')),
        [
            node,
            t.valueToNode(props)
        ]
    );
    define(newNode, { _generatedByEspower: true });
    return newNode;
};

BabelAssertionVisitor.prototype.captureNode = function (target, babelNodePath) {
    var t = this.babel.types;
    this.argumentModified = true;
    var relativeEsPath = babelNodePath.node._espowerEspath;
    var newNode = t.callExpression(
        t.memberExpression(this.powerAssertCalleeObject, t.identifier('_capt')),
        [
            target,
            t.valueToNode(relativeEsPath)
        ]);
    define(newNode, { _generatedByEspower: true });
    return newNode;
};

BabelAssertionVisitor.prototype.toBeSkipped = function (currentNode, parentNode, currentKey) {
    return toBeSkipped(this.babel.types, currentNode, parentNode, currentKey);
};

BabelAssertionVisitor.prototype.toBeCaptured = function (currentNode, parentNode, currentKey) {
    return toBeCaptured(this.babel.types, currentNode, parentNode, currentKey);
};

BabelAssertionVisitor.prototype.enterArgument = function (babelNodePath) {
    var currentNode = babelNodePath.node;
    var parentNode = babelNodePath.parent;
    var argMatchResult = this.matcher.matchArgument(currentNode, parentNode);
    if (argMatchResult) {
        if (argMatchResult.name === 'message' && argMatchResult.kind === 'optional') {
            // skip optional message argument
            return undefined;
        }

        // create capturer per argument
        this.powerAssertCalleeObject = this.createNewCapturer(babelNodePath);

        this.verifyNotInstrumented(currentNode);
        // entering target argument
        this.currentArgumentBabelNodePath = babelNodePath;
        return undefined;
    }
    return undefined;
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

BabelAssertionVisitor.prototype.leaveArgument = function (resultTree) {
    this.currentArgumentBabelNodePath = null;
    if (this.argumentModified) {
        this.argumentModified = false;
        return this.captureArgument(resultTree);
    } else {
        return resultTree;
    }
};

BabelAssertionVisitor.prototype.isCapturingArgument = function () {
    return !!this.currentArgumentBabelNodePath;
};

BabelAssertionVisitor.prototype.isLeavingAssertion = function (babelNodePath) {
    return this.assertionBabelNodePath === babelNodePath;
};

BabelAssertionVisitor.prototype.isLeavingArgument = function (babelNodePath) {
    return this.currentArgumentBabelNodePath === babelNodePath;
};

BabelAssertionVisitor.prototype.createNewCapturer = function (nodePath) {
    var types = this.babel.types;
    var helperNameNode = this.getCaptureHelperNameNode(nodePath);
    var capturerIdent = nodePath.scope.generateUidIdentifier('rec');
    define(capturerIdent, {_generatedByEspower: true});
    var init = types.callExpression(helperNameNode, []);
    define(init, {_generatedByEspower: true});
    nodePath.scope.push({id: capturerIdent, init: init});
    return capturerIdent;
};

BabelAssertionVisitor.prototype.getCaptureHelperNameNode = function (nodePath) {
    var file = nodePath.hub.file;
    var helperNameNode = file.get('powerAssertCaptureHelper');
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
    define(helperNameNode, {_generatedByEspower: true});
    file.set('powerAssertCaptureHelper', helperNameNode);
    var helperFunctionNode = types.toExpression(this.helperTemplate());
    estraverse.traverse(helperFunctionNode, {
        keys: types.VISITOR_KEYS,
        enter: function (currentNode) {
            define(currentNode, {_generatedByEspower: true});
        }
    });
    helperFunctionNode._compact = true;
    programScope.push({id: helperNameNode, init: helperFunctionNode});
    return helperNameNode;
};

module.exports = BabelAssertionVisitor;
