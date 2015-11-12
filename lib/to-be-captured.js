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
    'TemplateLiteral',
    'TaggedTemplateExpression'
];

function isCaputuringTargetType (types, currentNode) {
    return caputuringTargetTypes.map(function (name) {
        return 'is' + name;
    }).some(function (methodName) {
        return types[methodName](currentNode);
    });
}

function isCalleeOfParent(types, parentNode, currentKey) {
    return (types.isCallExpression(parentNode) || types.isNewExpression(parentNode)) && currentKey === 'callee';
}

function isChildOfTaggedTemplateExpression(types, parentNode) {
    return types.isTaggedTemplateExpression(parentNode);
}

module.exports = function toBeCaptured (types, currentNode, parentNode, currentKey) {
    return isCaputuringTargetType(types, currentNode) &&
        !isCalleeOfParent(types, parentNode, currentKey) &&
        !isChildOfTaggedTemplateExpression(types, parentNode);
};
