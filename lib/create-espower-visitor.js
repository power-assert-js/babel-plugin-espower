'use strict';

var espower = require('espower');
var escallmatch = require('escallmatch');
var extend = require('xtend');
var find = require('array-find');

function enterTraversalPath (traversalPath, currentNode, parentNode, scope, file, matchers, esTreePath, options) {
    var treePath;
    var currentKey = traversalPath.key;
    var assertionVisitor = file.get('espowerAssertionVisitor');
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
        var matcher = find(matchers, function (m) { return m.test(currentNode); });
        if (matcher) {
            // entering assertion
            var espowerOptions = extend(espower.defaultOptions(), {
                path: file.opts.filename, // or opts.sourceFileName?
                sourceRoot: process.cwd(),
                sourceMap: file.opts.inputSourceMap
            }, options);
            treePath = esTreePath(traversalPath);
            assertionVisitor = new espower.AssertionVisitor(matcher, treePath, espowerOptions);
            assertionVisitor.enter(currentNode, parentNode);
            file.set('espowerAssertionVisitor', assertionVisitor);
        }
    }
}

function exitTraversalPath (traversalPath, currentNode, parentNode, scope, file, esTreePath, options) {
    var currentKey = traversalPath.key;
    var resultTree = currentNode;
    var isTreeModified = false;
    var assertionVisitor = file.get('espowerAssertionVisitor');
    if (!assertionVisitor) {
        return;
    }
    var treePath = esTreePath(traversalPath);
    if (assertionVisitor.isLeavingAssertion(treePath)) {
        // leaving assertion
        assertionVisitor.leave(currentNode, parentNode);
        delete file.data.espowerAssertionVisitor;
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
        traversalPath.skip();
    }
}

function isCalleeOfParentCallExpression(parentNode, currentKey) {
    return parentNode.type === 'CallExpression' && currentKey === 'callee';
}

module.exports = function createEspowerVisitor (babel, options) {
    var esTreePath = require('./babel-estree-path')(babel);
    var opts = extend(espower.defaultOptions(), { visitorKeys: babel.types.VISITOR_KEYS }, options);
    var matchers = opts.patterns.map(function (pattern) { return escallmatch(pattern, opts); });
    return Object.keys(babel.types.VISITOR_KEYS).reduce(function (handlers, nodeType) {
        handlers[nodeType] = {
            enter: function (currentNode, parentNode, scope, file) {
                enterTraversalPath(this, currentNode, parentNode, scope, file, matchers, esTreePath, options);
            },
            exit: function (currentNode, parentNode, scope, file) {
                exitTraversalPath(this, currentNode, parentNode, scope, file, esTreePath, options);
            }
        };
        return handlers;
    }, {});
};
