'use strict';

var espower = require('espower');
var inherits = require('util').inherits;
var babelgen = require('babel-generator');
var define = require('define-properties');
var toBeCaptured = require('./to-be-captured');
var toBeSkipped = require('./to-be-skipped');

function BabelAssertionVisitor (babel, matcher, nodePath, createEsPath, enclosingFunc, options) {
    espower.AssertionVisitor.call(this, matcher, createEsPath(nodePath), enclosingFunc, options);
    this.babel = babel;
    this.createEsPath = createEsPath;
    this.assertionBabelNodePath = nodePath;
    this.currentArgumentBabelNodePath = null;
}
inherits(BabelAssertionVisitor, espower.AssertionVisitor);

BabelAssertionVisitor.prototype.generateCanonicalCode = function (node) {
    var gen = new babelgen.CodeGenerator(node, { concise: true });
    return gen.generate().code;
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
        this.verifyNotInstrumented(currentNode);
        // entering target argument
        this.currentArgumentBabelNodePath = babelNodePath;
        return undefined;
    }
    return undefined;
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

module.exports = BabelAssertionVisitor;
