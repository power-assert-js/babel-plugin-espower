'use strict';

var espower = require('espower');
var inherits = require('util').inherits;
var babelgen = require('babel-generator');
var define = require('define-properties');
var toBeCaptured = require('./to-be-captured');
var toBeSkipped = require('./to-be-skipped');

function BabelAssertionVisitor (babel, matcher, esPath, enclosingFunc, options) {
    espower.AssertionVisitor.call(this, matcher, esPath, enclosingFunc, options);
    this.babel = babel;
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

BabelAssertionVisitor.prototype.captureNode = function (target, path) {
    var t = this.babel.types;
    this.argumentModified = true;
    var relativeEsPath = path.slice(this.assertionPath.length).join('/');
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

module.exports = BabelAssertionVisitor;
