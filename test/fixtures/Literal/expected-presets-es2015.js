'use strict';

var _powerAssertVisitorKeys = '{"ArrayExpression":["elements"],"AssignmentExpression":["left","right"],"BinaryExpression":["left","right"],"Directive":["value"],"DirectiveLiteral":[],"BlockStatement":["directives","body"],"BreakStatement":["label"],"CallExpression":["callee","arguments"],"CatchClause":["param","body"],"ConditionalExpression":["test","consequent","alternate"],"ContinueStatement":["label"],"DebuggerStatement":[],"DoWhileStatement":["test","body"],"EmptyStatement":[],"ExpressionStatement":["expression"],"File":["program"],"ForInStatement":["left","right","body"],"ForStatement":["init","test","update","body"],"FunctionDeclaration":["id","params","body","returnType","typeParameters"],"FunctionExpression":["id","params","body","returnType","typeParameters"],"Identifier":["typeAnnotation"],"IfStatement":["test","consequent","alternate"],"LabeledStatement":["label","body"],"StringLiteral":[],"NumericLiteral":[],"NullLiteral":[],"BooleanLiteral":[],"RegExpLiteral":[],"LogicalExpression":["left","right"],"MemberExpression":["object","property"],"NewExpression":["callee","arguments"],"Program":["directives","body"],"ObjectExpression":["properties"],"ObjectMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectProperty":["key","value","decorators"],"RestElement":["argument","typeAnnotation"],"ReturnStatement":["argument"],"SequenceExpression":["expressions"],"SwitchCase":["test","consequent"],"SwitchStatement":["discriminant","cases"],"ThisExpression":[],"ThrowStatement":["argument"],"TryStatement":["block","handler","finalizer"],"UnaryExpression":["argument"],"UpdateExpression":["argument"],"VariableDeclaration":["declarations"],"VariableDeclarator":["id","init"],"WhileStatement":["test","body"],"WithStatement":["object","body"],"AssignmentPattern":["left","right"],"ArrayPattern":["elements","typeAnnotation"],"ArrowFunctionExpression":["params","body","returnType"],"ClassBody":["body"],"ClassDeclaration":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ClassExpression":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ExportAllDeclaration":["source"],"ExportDefaultDeclaration":["declaration"],"ExportNamedDeclaration":["declaration","specifiers","source"],"ExportSpecifier":["local","exported"],"ForOfStatement":["left","right","body"],"ImportDeclaration":["specifiers","source"],"ImportDefaultSpecifier":["local"],"ImportNamespaceSpecifier":["local"],"ImportSpecifier":["local","imported"],"MetaProperty":["meta","property"],"ClassMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectPattern":["properties","typeAnnotation"],"SpreadElement":["argument"],"Super":[],"TaggedTemplateExpression":["tag","quasi"],"TemplateElement":[],"TemplateLiteral":["quasis","expressions"],"YieldExpression":["argument"],"AnyTypeAnnotation":[],"ArrayTypeAnnotation":["elementType"],"BooleanTypeAnnotation":[],"BooleanLiteralTypeAnnotation":[],"NullLiteralTypeAnnotation":[],"ClassImplements":["id","typeParameters"],"ClassProperty":["key","value","typeAnnotation","decorators"],"DeclareClass":["id","typeParameters","extends","body"],"DeclareFunction":["id"],"DeclareInterface":["id","typeParameters","extends","body"],"DeclareModule":["id","body"],"DeclareTypeAlias":["id","typeParameters","right"],"DeclareVariable":["id"],"ExistentialTypeParam":[],"FunctionTypeAnnotation":["typeParameters","params","rest","returnType"],"FunctionTypeParam":["name","typeAnnotation"],"GenericTypeAnnotation":["id","typeParameters"],"InterfaceExtends":["id","typeParameters"],"InterfaceDeclaration":["id","typeParameters","extends","body"],"IntersectionTypeAnnotation":["types"],"MixedTypeAnnotation":[],"NullableTypeAnnotation":["typeAnnotation"],"NumericLiteralTypeAnnotation":[],"NumberTypeAnnotation":[],"StringLiteralTypeAnnotation":[],"StringTypeAnnotation":[],"ThisTypeAnnotation":[],"TupleTypeAnnotation":["types"],"TypeofTypeAnnotation":["argument"],"TypeAlias":["id","typeParameters","right"],"TypeAnnotation":["typeAnnotation"],"TypeCastExpression":["expression","typeAnnotation"],"TypeParameter":["bound"],"TypeParameterDeclaration":["params"],"TypeParameterInstantiation":["params"],"ObjectTypeAnnotation":["properties","indexers","callProperties"],"ObjectTypeCallProperty":["value"],"ObjectTypeIndexer":["id","key","value"],"ObjectTypeProperty":["key","value"],"QualifiedTypeIdentifier":["id","qualification"],"UnionTypeAnnotation":["types"],"VoidTypeAnnotation":[],"JSXAttribute":["name","value"],"JSXClosingElement":["name"],"JSXElement":["openingElement","children","closingElement"],"JSXEmptyExpression":[],"JSXExpressionContainer":["expression"],"JSXIdentifier":[],"JSXMemberExpression":["object","property"],"JSXNamespacedName":["namespace","name"],"JSXOpeningElement":["name","attributes"],"JSXSpreadAttribute":["argument"],"JSXText":[],"Noop":[],"ParenthesizedExpression":["expression"],"AwaitExpression":["argument"],"BindExpression":["object","callee"],"Decorator":["expression"],"DoExpression":["body"],"ExportDefaultSpecifier":["exported"],"ExportNamespaceSpecifier":["exported"],"RestProperty":["argument"],"SpreadProperty":["argument"]}',
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { return { powerAssertContext: { value: value, events: this.captured }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder();

assert(false);

assert(0);

assert.equal(1, 0);

assert(false, 'message');

assert(false, messageStr);

assert.equal(_rec._expr(_rec._capt(foo, 'arguments/0'), {
  content: 'assert.equal(foo, \'bar\', \'msg\')',
  filepath: 'test/fixtures/Literal/fixture.js',
  line: 13,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"equal","range":[7,12]},"computed":false,"range":[0,12]},"arguments":[{"type":"Identifier","name":"foo","range":[13,16]},{"type":"StringLiteral","value":"bar","range":[18,23]},{"type":"StringLiteral","value":"msg","range":[25,30]}],"range":[0,31]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"equal","range":[7,12]},{"type":{"label":"("},"range":[12,13]},{"type":{"label":"name"},"value":"foo","range":[13,16]},{"type":{"label":","},"range":[16,17]},{"type":{"label":"string"},"value":"bar","range":[18,23]},{"type":{"label":","},"range":[23,24]},{"type":{"label":"string"},"value":"msg","range":[25,30]},{"type":{"label":")"},"range":[30,31]}]',
  visitorKeys: _powerAssertVisitorKeys
}), 'bar', 'msg');

assert(_rec2._expr(_rec2._capt(/^not/.exec(_rec2._capt(str, 'arguments/0/arguments/0')), 'arguments/0'), {
  content: 'assert(/^not/.exec(str))',
  filepath: 'test/fixtures/Literal/fixture.js',
  line: 15,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"RegExpLiteral","pattern":"^not","flags":"","range":[7,13]},"property":{"type":"Identifier","name":"exec","range":[14,18]},"computed":false,"range":[7,18]},"arguments":[{"type":"Identifier","name":"str","range":[19,22]}],"range":[7,23]}],"range":[0,24]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"regexp"},"value":{"pattern":"^not","flags":""},"range":[7,13]},{"type":{"label":"."},"range":[13,14]},{"type":{"label":"name"},"value":"exec","range":[14,18]},{"type":{"label":"("},"range":[18,19]},{"type":{"label":"name"},"value":"str","range":[19,22]},{"type":{"label":")"},"range":[22,23]},{"type":{"label":")"},"range":[23,24]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec3._expr(_rec3._capt(_rec3._capt(fuga, 'arguments/0/left') !== 'ふが', 'arguments/0'), {
  content: 'assert(fuga !== \'ふが\')',
  filepath: 'test/fixtures/Literal/fixture.js',
  line: 17,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"!==","left":{"type":"Identifier","name":"fuga","range":[7,11]},"right":{"type":"StringLiteral","value":"ふが","range":[16,20]},"range":[7,20]}],"range":[0,21]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"fuga","range":[7,11]},{"type":{"label":"==/!="},"value":"!==","range":[12,15]},{"type":{"label":"string"},"value":"ふが","range":[16,20]},{"type":{"label":")"},"range":[20,21]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec4._expr(_rec4._capt('ほげ' !== 'ふが', 'arguments/0'), {
  content: 'assert(\'ほげ\' !== \'ふが\')',
  filepath: 'test/fixtures/Literal/fixture.js',
  line: 19,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"!==","left":{"type":"StringLiteral","value":"ほげ","range":[7,11]},"right":{"type":"StringLiteral","value":"ふが","range":[16,20]},"range":[7,20]}],"range":[0,21]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"string"},"value":"ほげ","range":[7,11]},{"type":{"label":"==/!="},"value":"!==","range":[12,15]},{"type":{"label":"string"},"value":"ふが","range":[16,20]},{"type":{"label":")"},"range":[20,21]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(503);

assert(503);
