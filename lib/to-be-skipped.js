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
const isTypeNotToBeSkippedDuringCapturing = ({ node }) => node && typesNotToBeSkippedDuringCapturing.includes(node.type);
const isTypeToBeSkippedDuringCapturing = (nodePath) => !isTypeNotToBeSkippedDuringCapturing(nodePath);

module.exports = (types) => {
  const isChildOfObjectLiteral = (parent) => types.isObjectProperty(parent) || types.isObjectMethod(parent);
  const isObjectLiteralKey = (parent, key) => isChildOfObjectLiteral(parent) && key === 'key';
  const isObjectLiteralValue = (parent, key) => isChildOfObjectLiteral(parent) && key === 'value';

  // Do not instrument left due to 'Invalid left-hand side in assignment'
  const isLeftHandSideOfAssignment = ({ key, parent }) => types.isAssignmentExpression(parent) && key === 'left';

  // Do not instrument non-computed Object literal key
  const isNonComputedObjectLiteralKey = ({ key, parent }) => isObjectLiteralKey(parent, key) && !parent.computed;

  // Do not instrument shorthanded Object literal value
  const isShorthandedValueOfObjectLiteral = ({ key, parent }) => isObjectLiteralValue(parent, key) && parent.shorthand;

  // Just wrap UpdateExpression, not digging in.
  const isUpdateExpression = ({ parent }) => types.isUpdateExpression(parent);

  // Do not instrument non-computed property of MemberExpression within CallExpression.
  const isCallExpressionWithNonComputedMemberExpression = ({ key, node, parent }) => {
    return types.isIdentifier(node) && types.isMemberExpression(parent) && !parent.computed && key === 'property';
  };

  // 'typeof Identifier' or 'delete Identifier' is not instrumented
  const isTypeOfOrDeleteUnaryExpression = ({ key, node, parent }) => {
    return types.isIdentifier(node) && types.isUnaryExpression(parent) &&
      (parent.operator === 'typeof' || parent.operator === 'deletey') && key === 'argument';
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

  return (nodePath) => {
    return criteriaForSkipping.some((pred) => pred(nodePath));
  };
};
