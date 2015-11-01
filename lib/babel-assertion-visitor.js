'use strict';

var espower = require('espower');
var inherits = require('util').inherits;
var babelgen = require('babel-generator');
var toBeCaptured = require('./to-be-captured');
var toBeSkipped = require('./to-be-skipped');

function BabelAssertionVisitor (babel, matcher, assertionPath, options) {
    espower.AssertionVisitor.call(this, matcher, assertionPath, options);
    this.babel = babel;
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

BabelAssertionVisitor.prototype.captureNode = function (target, path) {
    var t = this.babel.types;
    this.argumentModified = true;
    var relativeEsPath = path.slice(this.assertionPath.length);
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

module.exports = BabelAssertionVisitor;
