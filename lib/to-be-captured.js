'use strict';

var caputuringTargetTypes = [
    'Identifier',
    'ObjectExpression',
    'ArrayExpression',
    'MemberExpression',
    'CallExpression',
    'UnaryExpression',
    'BinaryExpression',
    'LogicalExpression',
    'AssignmentExpression',
    'NewExpression',
    'UpdateExpression',
    'YieldExpression',
    'AwaitExpression',
    'TemplateLiteral',
    'TaggedTemplateExpression'
];

function isCaputuringTargetType (types, currentNode) {
    return caputuringTargetTypes.some(function (nodeType) {
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

module.exports = function toBeCaptured (types, currentNode, parentNode, currentKey) {
    return isCaputuringTargetType(types, currentNode) &&
        !isYieldOrAwaitArgument(types, parentNode, currentKey) &&
        !isCalleeOfParent(types, parentNode, currentKey) &&
        !isChildOfTaggedTemplateExpression(types, parentNode);
};
