'use strict';

var supportedNodeTypes = [
    'Identifier',
    'MemberExpression',
    'CallExpression',
    'UnaryExpression',
    'BinaryExpression',
    'LogicalExpression',
    'AssignmentExpression',
    'ObjectExpression',
    'NewExpression',
    'ArrayExpression',
    'ConditionalExpression',
    'UpdateExpression',
    'TemplateLiteral',
    'TaggedTemplateExpression',
    'SpreadElement',
    'YieldExpression',
    'AwaitExpression',
    'Property'
];

function isLeftHandSideOfAssignment(types, parentNode, currentKey) {
    // Do not instrument left due to 'Invalid left-hand side in assignment'
    return types.isAssignmentExpression(parentNode) && currentKey === 'left';
}

function isChildOfObjectLiteral (types, parentNode) {
    return types.isObjectProperty(parentNode) ||
        types.isObjectMethod(parentNode) ||
        types.isSpreadProperty(parentNode);
}

function isObjectLiteralKey (types, parentNode, currentKey) {
    return isChildOfObjectLiteral(types, parentNode) && currentKey === 'key';
}

function isObjectLiteralValue (types, parentNode, currentKey) {
    return isChildOfObjectLiteral(types, parentNode) && currentKey === 'value';
}

function isNonComputedObjectLiteralKey(types, parentNode, currentKey) {
    // Do not instrument non-computed Object literal key
    return isObjectLiteralKey(types, parentNode, currentKey) && !parentNode.computed;
}

function isShorthandedValueOfObjectLiteral(types, parentNode, currentKey) {
    // Do not instrument shorthanded Object literal value
    return isObjectLiteralValue(types, parentNode, currentKey) && parentNode.shorthand;
}

function isUpdateExpression(types, parentNode) {
    // Just wrap UpdateExpression, not digging in.
    return types.isUpdateExpression(parentNode);
}

function isCallExpressionWithNonComputedMemberExpression(types, currentNode, parentNode, currentKey) {
    // Do not instrument non-computed property of MemberExpression within CallExpression.
    return types.isIdentifier(currentNode) && types.isMemberExpression(parentNode) && !parentNode.computed && currentKey === 'property';
}

function isTypeOfOrDeleteUnaryExpression(types, currentNode, parentNode, currentKey) {
    // 'typeof Identifier' or 'delete Identifier' is not instrumented
    return types.isIdentifier(currentNode) && types.isUnaryExpression(parentNode) && (parentNode.operator === 'typeof' || parentNode.operator === 'delete') && currentKey === 'argument';
}

function isSupportedNodeType (types, node) {
    return supportedNodeTypes.map(function (name) {
        return 'is' + name;
    }).some(function (methodName) {
        return types[methodName](node);
    });
}

module.exports = function toBeSkipped (types, currentNode, parentNode, currentKey) {
    return !isSupportedNodeType(types, currentNode) ||
        isLeftHandSideOfAssignment(types, parentNode, currentKey) ||
        isNonComputedObjectLiteralKey(types, parentNode, currentKey) ||
        isShorthandedValueOfObjectLiteral(types, parentNode, currentKey) ||
        isUpdateExpression(types, parentNode) ||
        isCallExpressionWithNonComputedMemberExpression(types, currentNode, parentNode, currentKey) ||
        isTypeOfOrDeleteUnaryExpression(types, currentNode, parentNode, currentKey);
};
