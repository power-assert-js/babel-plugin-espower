'use strict';

var espower = require('espower');
var escallmatch = require('escallmatch');
var matchers = espower.defaultOptions().patterns.map(escallmatch);
var esTreePath = require('./babel-estree-path');
var types = require('babel-core').types;

function enterTraversalPath (traversalPath, currentNode, parentNode, scope, file) {
    var path = esTreePath(traversalPath);
    var currentKey = traversalPath.key;
    var assertionVisitor = traversalPath.state.data['espowerAssertionVisitor'];
    if (assertionVisitor) {
        if (assertionVisitor.toBeSkipped(currentNode, parentNode, currentKey)) {
            // skipping this Node
            // MEMO: exit() will not be called when skip() is called
            traversalPath.skip();
            return;
        }
        if (!assertionVisitor.isCapturingArgument()) {
            // entering argument
            assertionVisitor.enterArgument(currentNode, parentNode, path);
        }
    } else {
        var candidates = matchers.filter(function (matcher) { return matcher.test(currentNode); });
        if (candidates.length === 1) {
            // entering assertion
            var espowerOptions = {
                path: file.opts.filename, // or opts.sourceFileName?
                sourceMap: file.opts.inputSourceMap
            };
            assertionVisitor = new espower.AssertionVisitor(candidates[0], path, espowerOptions);
            assertionVisitor.enter(currentNode, parentNode);
            traversalPath.state.data['espowerAssertionVisitor'] = assertionVisitor;
        }
    }
}

function exitTraversalPath (traversalPath, currentNode, parentNode, scope, file) {
    var path = esTreePath(traversalPath);
    var currentKey = traversalPath.key;
    var resultTree = currentNode;
    var isTreeModified = false;
    var assertionVisitor = traversalPath.state.data['espowerAssertionVisitor'];
    if (!assertionVisitor) {
        return;
    }
    if (assertionVisitor.isLeavingAssertion(path)) {
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
        resultTree = assertionVisitor.captureNode(currentNode, path);
        isTreeModified = true;
    }
    if (assertionVisitor.isLeavingArgument(path)) {
        // capturing whole argument
        resultTree = assertionVisitor.leaveArgument(resultTree);
        isTreeModified = true;
    }
    if (isTreeModified) {
        traversalPath.replaceWith(resultTree);
    }
}

module.exports = function createEspowerVisitor () {
    return Object.keys(types.VISITOR_KEYS).reduce(function (handlers, nodeType) {
        handlers[nodeType] = {
            enter: function (currentNode, parentNode, scope, file) {
                enterTraversalPath(this, currentNode, parentNode, scope, file);
            },
            exit: function (currentNode, parentNode, scope, file) {
                exitTraversalPath(this, currentNode, parentNode, scope, file);
            }
        };
        return handlers;
    }, {});
};
