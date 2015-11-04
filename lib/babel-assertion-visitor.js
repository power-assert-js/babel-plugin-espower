'use strict';

var espower = require('espower');
var inherits = require('util').inherits;
var babelgen = require('babel-generator');
var toBeCaptured = require('./to-be-captured');
var toBeSkipped = require('./to-be-skipped');

function BabelAssertionVisitor (babel, matcher, nodePath, createEsPath, options) {
    espower.AssertionVisitor.call(this, matcher, createEsPath(nodePath), options);
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

BabelAssertionVisitor.prototype.captureArgument = function (node) {
    var t = this.babel.types;
    return t.callExpression(
        t.memberExpression(this.powerAssertCalleeObject, t.identifier('_expr')),
        [
            node,
            t.valueToNode({
                content: this.canonicalCode,
                filepath: this.filepath,
                line: this.lineNum
            })
        ]
    );
};

BabelAssertionVisitor.prototype.captureNode = function (target, babelNodePath) {
    var t = this.babel.types;
    this.argumentModified = true;
    var relativeEsPath = this.createEsPath(babelNodePath).slice(this.assertionPath.length);
    return t.callExpression(
        t.memberExpression(this.powerAssertCalleeObject, t.identifier('_capt')),
        [
            target,
            t.valueToNode(relativeEsPath.join('/'))
        ]);
};

BabelAssertionVisitor.prototype.toBeSkipped = function (currentNode, parentNode, currentKey) {
    var types = this.babel.types;
    return toBeSkipped(types, currentNode, parentNode, currentKey);
};

BabelAssertionVisitor.prototype.toBeCaptured = function (currentNode, parentNode, currentKey) {
    var types = this.babel.types;
    return toBeCaptured(types, currentNode, parentNode, currentKey);
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
