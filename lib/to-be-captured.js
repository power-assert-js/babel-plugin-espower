'use strict';

var typesToBeCaptured = [
    'Identifier',
    'BinaryExpression',
    'MemberExpression',
    'CallExpression',
    'UnaryExpression',
    'LogicalExpression',
    'ArrayExpression',
    'ObjectExpression',
    'TemplateLiteral',
    'YieldExpression',
    'AwaitExpression',
    'NewExpression',
    'AssignmentExpression',
    'UpdateExpression',
    'TaggedTemplateExpression'
];

function isCaputuringTargetType (types, currentNode) {
    return typesToBeCaptured.some(function (nodeType) {
        return types['is' + nodeType](currentNode);
    });
}

function isCalleeOfParent(types, parentNode, currentKey) {
    return (types.isCallExpression(parentNode) || types.isNewExpression(parentNode)) && currentKey === 'callee';
}

function isChildOfTaggedTemplateExpression(types, parentNode) {
    return types.isTaggedTemplateExpression(parentNode);
}

function isYieldOrAwaitArgument(types, parentNode, currentKey) {
    // capture the yielded/await result, not the promise
    return (types.isYieldExpression(parentNode) || types.isAwaitExpression(parentNode)) && currentKey === 'argument';
}

module.exports = function toBeCaptured (types, nodePath) {
    var currentKey = nodePath.key;
    var currentNode = nodePath.node;
    var parentNode = nodePath.parent;
    return isCaputuringTargetType(types, currentNode) &&
        !isYieldOrAwaitArgument(types, parentNode, currentKey) &&
        !isCalleeOfParent(types, parentNode, currentKey) &&
        !isChildOfTaggedTemplateExpression(types, parentNode);
};
