'use strict';

var defaultOptions = require('./default-options');
var CallMatcher = require('call-matcher');
var babylon = require('babylon');
var estraverse = require('estraverse');
var extend = require('xtend');
var define = require('define-properties');
var find = require('array-find');
var BabelAssertionVisitor = require('./babel-assertion-visitor');

function BabelEspowerVisitor (babel, opts) {
    this.babel = babel;
    this.esTreePath = require('./babel-estree-path')(babel);
    this.matchers = opts.patterns.map(function (pattern) {
        var signatureAst = babylon.parse(pattern);
        var expression = signatureAst.program.body[0].expression;
        return new CallMatcher(expression, opts);
    });
    this.options = opts;
}

BabelEspowerVisitor.prototype.enter = function (nodePath) {
    var currentKey = nodePath.key;
    var currentNode = nodePath.node;
    var parentNode = nodePath.parent;
    var file = nodePath.hub.file;
    var assertionVisitor = file.get('espowerAssertionVisitor');
    var types = this.babel.types;
    if (assertionVisitor) {
        if (currentNode._generatedByEspower || assertionVisitor.toBeSkipped(currentNode, parentNode, currentKey)) {
            // skipping this Node
            // MEMO: exit() will not be called when skip() is called
            nodePath.skip();
            return;
        }
        if (!assertionVisitor.isCapturingArgument() && !this.isCalleeOfParentCallExpression(parentNode, currentKey)) {
            // entering argument
            assertionVisitor.enterArgument(nodePath);
        }
    } else if (types.isCallExpression(currentNode)) {
        var matcher = find(this.matchers, function (m) { return m.test(currentNode); });
        if (matcher) {
            // entering assertion
            var espowerOptions = extend(defaultOptions(), {
                path: file.opts.filename, // or opts.sourceFileName?
                sourceMap: file.opts.inputSourceMap
            }, this.options);
            var enclosingFunction = this.esTreePath.findEnclosingFunction(nodePath);
            assertionVisitor = new BabelAssertionVisitor(this.babel, matcher, nodePath, this.esTreePath, enclosingFunction, espowerOptions);
            assertionVisitor.enter(currentNode, parentNode);
            // mega hack: store original espath for each node
            estraverse.traverse(currentNode, {
                keys: types.VISITOR_KEYS,
                enter: function (currentNode, parentNode) {
                    if (this.path()) {
                        var espath = this.path().join('/');
                        define(currentNode, { _espowerEspath: espath });
                    }
                }
            });
            file.set('espowerAssertionVisitor', assertionVisitor);
        }
    }
};

BabelEspowerVisitor.prototype.exit = function (nodePath) {
    var currentKey = nodePath.key;
    var currentNode = nodePath.node;
    var parentNode = nodePath.parent;
    var resultTree = currentNode;
    var isTreeModified = false;
    var file = nodePath.hub.file;
    var assertionVisitor = file.get('espowerAssertionVisitor');
    var types = this.babel.types;
    if (!assertionVisitor) {
        return;
    }
    if (assertionVisitor.isLeavingAssertion(nodePath)) {
        // leaving assertion
        assertionVisitor.leave(currentNode, parentNode);
        file.delete('espowerAssertionVisitor');
        estraverse.traverse(currentNode, {
            keys: types.VISITOR_KEYS,
            enter: function (currentNode, parentNode) {
                delete currentNode._espowerEspath;
            }
        });
        return;
    }
    if (!assertionVisitor.isCapturingArgument()) {
        return;
    }
    if (assertionVisitor.toBeCaptured(currentNode, parentNode, currentKey)) {
        // capturing Node
        resultTree = assertionVisitor.captureNode(currentNode, nodePath);
        isTreeModified = true;
    }
    if (assertionVisitor.isLeavingArgument(nodePath) && assertionVisitor.isArgumentModified()) {
        // capturing whole argument on leaving argument
        resultTree = assertionVisitor.leaveArgument(resultTree);
        isTreeModified = true;
    }
    if (isTreeModified) {
        nodePath.replaceWith(resultTree);
    }
};

BabelEspowerVisitor.prototype.isCalleeOfParentCallExpression = function (parentNode, currentKey) {
    var types = this.babel.types;
    return types.isCallExpression(parentNode) && currentKey === 'callee';
};

module.exports = BabelEspowerVisitor;
