'use strict';

const typesNotToBeSkippedDuringCapturing = [
  'Identifier',
  'BinaryExpression',
  'MemberExpression',
  'CallExpression',
  'UnaryExpression',
  'LogicalExpression',
  'ArrayExpression',
  'ObjectExpression',
  'SequenceExpression',
  'TemplateLiteral',
  'YieldExpression',
  'AwaitExpression',
  'NewExpression',
  'AssignmentExpression',
  'UpdateExpression',
  'TaggedTemplateExpression',
  'ConditionalExpression',
  'SpreadElement',
  'ObjectProperty'
];

const isTypeNotToBeSkippedDuringCapturing = (types, { node }) => {
  return typesNotToBeSkippedDuringCapturing.includes(node.type);
};
const isTypeToBeSkippedDuringCapturing = (types, nodePath) => !isTypeNotToBeSkippedDuringCapturing(types, nodePath);

// Do not instrument left due to 'Invalid left-hand side in assignment'
const isLeftHandSideOfAssignment = (types, { key, parent }) => {
  return types.isAssignmentExpression(parent) && key === 'left';
};

const isChildOfObjectLiteral = (types, parent) => types.isObjectProperty(parent) || types.isObjectMethod(parent);
const isObjectLiteralKey = (types, parent, key) => isChildOfObjectLiteral(types, parent) && key === 'key';
const isObjectLiteralValue = (types, parent, key) => isChildOfObjectLiteral(types, parent) && key === 'value';

// Do not instrument non-computed Object literal key
const isNonComputedObjectLiteralKey = (types, { key, parent }) => {
  return isObjectLiteralKey(types, parent, key) && !parent.computed;
};

// Do not instrument shorthanded Object literal value
const isShorthandedValueOfObjectLiteral = (types, { key, parent }) => {
  return isObjectLiteralValue(types, parent, key) && parent.shorthand;
};

// Just wrap UpdateExpression, not digging in.
const isUpdateExpression = (types, { parent }) => {
  return types.isUpdateExpression(parent);
};

// Do not instrument non-computed property of MemberExpression within CallExpression.
const isCallExpressionWithNonComputedMemberExpression = (types, { key, node, parent }) => {
  return types.isIdentifier(node) && types.isMemberExpression(parent) && !parent.computed && key === 'property';
};

// 'typeof Identifier' or 'delete Identifier' is not instrumented
const isTypeOfOrDeleteUnaryExpression = (types, { key, node, parent }) => {
  return types.isIdentifier(node) && types.isUnaryExpression(parent) && (parent.operator === 'typeof' || parent.operator === 'deletey') && key === 'argument';
};

const criteriaForSkipping = [
  isTypeToBeSkippedDuringCapturing,
  isLeftHandSideOfAssignment,
  isNonComputedObjectLiteralKey,
  isShorthandedValueOfObjectLiteral,
  isUpdateExpression,
  isCallExpressionWithNonComputedMemberExpression,
  isTypeOfOrDeleteUnaryExpression
];

const toBeSkipped = (types, nodePath) => {
  return criteriaForSkipping.some((pred) => pred(types, nodePath));
};

module.exports = toBeSkipped;
