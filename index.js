var babel = require('babel-core');
var t = babel.types;
var Transformer = babel.Transformer;
var espower = require('espower');
var escallmatch = require('escallmatch');
var matchers = espower.defaultOptions().patterns.map(escallmatch);

function enterTraversalPath (traversalPath, currentNode, parentNode, scope, file) {
    var path = esPath(traversalPath);
    var currentPath = path ? path[path.length - 1] : null;
    var assertionVisitor = traversalPath.state.data['espowerAssertionVisitor'];
    if (assertionVisitor) {
        // console.log('########## found assertionVisitor ' + path.join('/'));
        if (espower.rules.toBeSkipped(currentNode, parentNode, currentPath)) {
            traversalPath.state.data['espowerSkipping'] = true;
        }
        if (!assertionVisitor.isCapturingArgument()) {
            // console.log('########## entering argument ' + path.join('/'));
            assertionVisitor.enterArgument(currentNode, parentNode, path);
        }
    } else {
        var candidates = matchers.filter(function (matcher) { return matcher.test(currentNode); });
        if (candidates.length === 1) {
            // console.log('########## entering assertion ' + path.join('/'));
            assertionVisitor = new espower.AssertionVisitor(candidates[0], path);
            assertionVisitor.enter(currentNode, parentNode);
            traversalPath.state.data['espowerAssertionVisitor'] = assertionVisitor;
        }
    }
}

function exitTraversalPath (traversalPath, currentNode, parentNode, scope, file) {
    var path = esPath(traversalPath);
    var resultTree = currentNode;
    var assertionVisitor = traversalPath.state.data['espowerAssertionVisitor'];

    if (!assertionVisitor) {
        return;
    }
    if (traversalPath.state.data['espowerSkipping']) {
        // console.log('########## skipping ' + path.join('/'));
        traversalPath.state.data['espowerSkipping'] = false;
        return;
    }
    if (assertionVisitor.isLeavingAssertion(path)) {
        // console.log('########## leaving assertion ' + path.join('/'));
        delete traversalPath.state.data['espowerAssertionVisitor'];
        return;
    }
    if (!assertionVisitor.isCapturingArgument()) {
        return;
    }
    if (isCalleeOfParent(currentNode, parentNode)) {
        return;
    }
    if (espower.rules.toBeCaptured(currentNode)) {
        // console.log('########## capturing ' + path.join('/'));
        resultTree = assertionVisitor.captureNode(currentNode, path);
        if (assertionVisitor.isLeavingArgument(path)) {
            // console.log('########## wrap argument ' + path.join('/'));
            resultTree = assertionVisitor.leaveArgument(resultTree);
        }
        traversalPath.replaceWith(resultTree);
    }
}

function collectPath (stack, traversalPath) {
    stack.push(traversalPath.key);
    if (traversalPath.parentPath !== traversalPath) { // root node
        collectPath(stack, traversalPath.parentPath);
    }
}

function esPath (traversalPath) {
    var stack = [];
    collectPath(stack, traversalPath);
    stack.reverse();
    return stack;
}

function isCalleeOfParent(currentNode, parentNode) {
    return (parentNode.type === 'CallExpression' || parentNode.type === 'NewExpression') &&
        parentNode.callee === currentNode;
}

var customization = espower.rules.supportedNodeTypes.reduce(function (proto, nodeType) {
    proto[nodeType] = {
        enter: function (currentNode, parentNode, scope, file) {
            enterTraversalPath(this, currentNode, parentNode, scope, file);
        },
        exit: function (currentNode, parentNode, scope, file) {
            exitTraversalPath(this, currentNode, parentNode, scope, file);
        }
    };
    return proto;
}, {});
var options = {};

module.exports = new Transformer('babel-plugin-espower', customization, options);
