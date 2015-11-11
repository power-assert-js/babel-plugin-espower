'use strict';

var espower = require('espower');
var inherits = require('util').inherits;
var babelgen = require('babel-generator');
var toBeCaptured = require('./to-be-captured');
var toBeSkipped = require('./to-be-skipped');
var _path = require('path');
var isAbsolute = require('path-is-absolute');
var isUrl = require('is-url');

function BabelAssertionVisitor (babel, matcher, nodePath, createEsPath, enclosingFunc, options) {
    espower.AssertionVisitor.call(this, matcher, createEsPath(nodePath), enclosingFunc, options);
    this.babel = babel;
    this.createEsPath = createEsPath;
    this.assertionBabelNodePath = nodePath;
    this.currentArgumentBabelNodePath = null;
}
inherits(BabelAssertionVisitor, espower.AssertionVisitor);

BabelAssertionVisitor.prototype.enter = function (currentNode, parentNode) {
    this.canonicalCode = this.generateCanonicalCode(currentNode);
    this.powerAssertCalleeObject = this.guessPowerAssertCalleeObjectFor(currentNode.callee);

    if (this.sourceMapConsumer) {
        var pos = this.sourceMapConsumer.originalPositionFor({
            line: currentNode.loc.start.line,
            column: currentNode.loc.start.column
        });
        if (pos) {
            // console.log(JSON.stringify(pos, null, 2));
            if (pos.source) {
                if (this.sourceMapConsumer.sourceRoot && isUrl(this.sourceMapConsumer.sourceRoot)) {
                    this.filepath = _path.relative(this.sourceMapConsumer.sourceRoot, pos.source);
                } else if (this.options.sourceRoot && isAbsolute(this.options.sourceRoot) && isAbsolute(pos.source)) {
                    this.filepath = _path.relative(this.options.sourceRoot, pos.source);
                } else if (this.sourceMapConsumer.sourceRoot && isAbsolute(this.sourceMapConsumer.sourceRoot) && isAbsolute(pos.source)) {
                    this.filepath = _path.relative(this.sourceMapConsumer.sourceRoot, pos.source);
                } else if (isUrl(pos.source)) {
                    this.filepath = _path.basename(pos.source);
                } else {
                    this.filepath = pos.source;
                }
            }
            if (pos.line) {
                this.lineNum = pos.line;
            }
        }
    }

    if (!this.filepath) {
        if (this.options.sourceRoot && isAbsolute(this.options.sourceRoot) && isAbsolute(this.options.path)) {
            this.filepath = _path.relative(this.options.sourceRoot, this.options.path);
        } else {
            this.filepath = this.options.path;
        }
    }

    this.filepath = fallbackOnBasename(this.filepath);

    if (!this.lineNum) {
        this.lineNum = currentNode.loc.start.line;
    }
};

function fallbackOnBasename (filepath) {
    if (filepath) {
        if (filepath.split(_path.sep).indexOf('..') !== -1) {
            return _path.basename(filepath);
        } else if (isUrl(filepath)) {
            return _path.basename(filepath);
        } else if (isAbsolute(filepath)) {
            return _path.basename(filepath);
        }
    }
    return filepath;
}

BabelAssertionVisitor.prototype.generateCanonicalCode = function (node) {
    var gen = new babelgen.CodeGenerator(node, { concise: true });
    return gen.generate().code;
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
    return t.callExpression(
        t.memberExpression(this.powerAssertCalleeObject, t.identifier('_expr')),
        [
            node,
            t.valueToNode(props)
        ]
    );
};

BabelAssertionVisitor.prototype.captureNode = function (target, babelNodePath) {
    var t = this.babel.types;
    this.argumentModified = true;
    var relativeEsPath = babelNodePath.node._espowerEspath;
    return t.callExpression(
        t.memberExpression(this.powerAssertCalleeObject, t.identifier('_capt')),
        [
            target,
            t.valueToNode(relativeEsPath)
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
