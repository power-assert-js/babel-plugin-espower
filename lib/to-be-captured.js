'use strict';

const typesToBeCaptured = [
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

const isCaputuringTargetType = (types, {node}) => {
    return typesToBeCaptured.some((nodeType) => types['is' + nodeType](node));
};

const isCalleeOfParent = (types, {key, parent}) => {
    return (types.isCallExpression(parent) || types.isNewExpression(parent)) && key === 'callee';
};

const isChildOfTaggedTemplateExpression = (types, {parent}) => {
    return types.isTaggedTemplateExpression(parent);
};

const blacklist = [
    isCalleeOfParent,
    isChildOfTaggedTemplateExpression
];

const toBeCaptured = (types, nodePath) => {
    return isCaputuringTargetType(types, nodePath) && !blacklist.some((pred) => pred(types, nodePath));
};

module.exports = toBeCaptured;
