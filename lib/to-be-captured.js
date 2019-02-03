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

module.exports = (types) => {
  const isCaputuringTargetType = ({ node }) => node && typesToBeCaptured.includes(node.type);
  const isCalleeOfParent = ({ key, parent }) => (types.isCallExpression(parent) || types.isNewExpression(parent)) && key === 'callee';
  const isChildOfTaggedTemplateExpression = ({ parent }) => types.isTaggedTemplateExpression(parent);

  const blacklist = [
    isCalleeOfParent,
    isChildOfTaggedTemplateExpression
  ];

  return (nodePath) => {
    return isCaputuringTargetType(nodePath) && !blacklist.some((pred) => pred(nodePath));
  };
};
