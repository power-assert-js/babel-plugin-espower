'use strict';

var espower = require('espower');
var escallmatch = require('escallmatch');
var esTreePath = require('./babel-estree-path');
var types = require('babel-core').types;
var extend = require('xtend');

function enterTraversalPath (traversalPath, currentNode, parentNode, scope, file, matchers) {
    var treePath;
    var currentKey = traversalPath.key;
    var assertionVisitor = traversalPath.state.data['espowerAssertionVisitor'];
    if (assertionVisitor) {
        if (assertionVisitor.toBeSkipped(currentNode, parentNode, currentKey)) {
            // skipping this Node
            // MEMO: exit() will not be called when skip() is called
            traversalPath.skip();
            return;
        }
        if (!assertionVisitor.isCapturingArgument() && !isCalleeOfParentCallExpression(parentNode, currentKey)) {
            // entering argument
            treePath = esTreePath(traversalPath);
            assertionVisitor.enterArgument(currentNode, parentNode, treePath);
        }
    } else if (currentNode.type === 'CallExpression') {
        var candidates = matchers.filter(function (matcher) { return matcher.test(currentNode); });
        if (candidates.length === 1) {
            // entering assertion
            var espowerOptions = {
                path: file.opts.filename, // or opts.sourceFileName?
                sourceMap: file.opts.inputSourceMap
            };
            treePath = esTreePath(traversalPath);
            assertionVisitor = new espower.AssertionVisitor(candidates[0], treePath, espowerOptions);
            assertionVisitor.enter(currentNode, parentNode);
            traversalPath.state.data['espowerAssertionVisitor'] = assertionVisitor;
        }
    }
}

function exitTraversalPath (traversalPath, currentNode, parentNode, scope, file) {
    var currentKey = traversalPath.key;
    var resultTree = currentNode;
    var isTreeModified = false;
    var assertionVisitor = traversalPath.state.data['espowerAssertionVisitor'];
    if (!assertionVisitor) {
        return;
    }
    var treePath = esTreePath(traversalPath);
    if (assertionVisitor.isLeavingAssertion(treePath)) {
        // leaving assertion
        assertionVisitor.leave(currentNode, parentNode);
        delete traversalPath.state.data['espowerAssertionVisitor'];
        return;
    }
    if (!assertionVisitor.isCapturingArgument()) {
        return;
    }
    if (assertionVisitor.toBeCaptured(currentNode, parentNode, currentKey)) {
        // capturing Node
        resultTree = assertionVisitor.captureNode(currentNode, treePath);
        isTreeModified = true;
    }
    if (assertionVisitor.isLeavingArgument(treePath)) {
        // capturing whole argument
        resultTree = assertionVisitor.leaveArgument(resultTree);
        isTreeModified = true;
    }
    if (isTreeModified) {
        traversalPath.replaceWith(resultTree);
    }
}

function isCalleeOfParentCallExpression(parentNode, currentKey) {
    return parentNode.type === 'CallExpression' && currentKey === 'callee';
}

module.exports = function createEspowerVisitor (options) {
    var opts = extend(espower.defaultOptions(), { visitorKeys: types.VISITOR_KEYS }, options);
    var matchers = opts.patterns.map(function (pattern) { return escallmatch(pattern, opts); });
    return Object.keys(types.VISITOR_KEYS).reduce(function (handlers, nodeType) {
        handlers[nodeType] = {
            enter: function (currentNode, parentNode, scope, file) {
                enterTraversalPath(this, currentNode, parentNode, scope, file, matchers);
            },
            exit: function (currentNode, parentNode, scope, file) {
                exitTraversalPath(this, currentNode, parentNode, scope, file);
            }
        };
        return handlers;
    }, {});
};
