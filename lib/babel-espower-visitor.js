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
    this.matchers = opts.patterns.map(function (pattern) {
        var signatureAst = babylon.parse(pattern);
        var expression = signatureAst.program.body[0].expression;
        return new CallMatcher(expression, opts);
    });
    this.options = opts;
}

BabelEspowerVisitor.prototype.enter = function (nodePath) {
    var currentNode = nodePath.node;
    var file = nodePath.hub.file;
    var assertionVisitor = file.get('espowerAssertionVisitor');
    var types = this.babel.types;
    if (assertionVisitor) {
        if (assertionVisitor.isGeneratedNode(nodePath) || assertionVisitor.toBeSkipped(nodePath)) {
            // skipping this Node
            // MEMO: exit() will not be called when skip() is called
            nodePath.skip();
            return;
        }
        if (!assertionVisitor.isCapturingArgument() && !this.isCalleeOfParentCallExpression(nodePath)) {
            // entering argument
            assertionVisitor.enterArgument(nodePath);
        }
    } else if (nodePath.isCallExpression()) {
        var matcher = find(this.matchers, function (m) { return m.test(currentNode); });
        if (matcher) {
            // entering assertion
            var espowerOptions = extend(defaultOptions(), {
                path: file.opts.filename, // or opts.sourceFileName?
                sourceMap: file.opts.inputSourceMap
            }, this.options);
            assertionVisitor = new BabelAssertionVisitor(this.babel, matcher, espowerOptions);
            assertionVisitor.enter(nodePath);
            // mega hack: store original espath for each node
            estraverse.traverse(currentNode, {
                keys: types.VISITOR_KEYS,
                enter: function (node) {
                    if (this.path()) {
                        var espath = this.path().join('/');
                        define(node, { _espowerEspath: espath });
                    }
                }
            });
            file.set('espowerAssertionVisitor', assertionVisitor);
        }
    }
};

BabelEspowerVisitor.prototype.exit = function (nodePath) {
    var currentNode = nodePath.node;
    var resultTree = currentNode;
    var file = nodePath.hub.file;
    var assertionVisitor = file.get('espowerAssertionVisitor');
    var types = this.babel.types;
    if (!assertionVisitor) {
        return;
    }
    if (assertionVisitor.isLeavingAssertion(nodePath)) {
        // leaving assertion
        assertionVisitor.leave(nodePath);
        file.delete('espowerAssertionVisitor');
        estraverse.traverse(currentNode, {
            keys: types.VISITOR_KEYS,
            enter: function (node) {
                delete node._espowerEspath;
            }
        });
        return;
    }
    if (!assertionVisitor.isCapturingArgument()) {
        return;
    }
    if (assertionVisitor.toBeCaptured(nodePath)) {
        // capturing Node
        resultTree = assertionVisitor.captureNode(nodePath);
    }
    if (assertionVisitor.isLeavingArgument(nodePath)) {
        // capturing whole argument on leaving argument
        resultTree = assertionVisitor.leaveArgument(resultTree);
    }
    if (resultTree !== currentNode) {
        nodePath.replaceWith(resultTree);
    }
};

BabelEspowerVisitor.prototype.isCalleeOfParentCallExpression = function (nodePath) {
    var currentKey = nodePath.key;
    var parentNode = nodePath.parent;
    var types = this.babel.types;
    return types.isCallExpression(parentNode) && currentKey === 'callee';
};

module.exports = BabelEspowerVisitor;
