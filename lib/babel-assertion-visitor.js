'use strict';

var espower = require('espower');
var inherits = require('util').inherits;
var babelgen = require('babel-generator');

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

module.exports = BabelAssertionVisitor;
