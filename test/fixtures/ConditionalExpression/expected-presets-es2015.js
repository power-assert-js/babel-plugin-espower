'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _powerAssertVisitorKeys = '{"ArrayExpression":["elements"],"AssignmentExpression":["left","right"],"BinaryExpression":["left","right"],"Directive":["value"],"DirectiveLiteral":[],"BlockStatement":["directives","body"],"BreakStatement":["label"],"CallExpression":["callee","arguments"],"CatchClause":["param","body"],"ConditionalExpression":["test","consequent","alternate"],"ContinueStatement":["label"],"DebuggerStatement":[],"DoWhileStatement":["test","body"],"EmptyStatement":[],"ExpressionStatement":["expression"],"File":["program"],"ForInStatement":["left","right","body"],"ForStatement":["init","test","update","body"],"FunctionDeclaration":["id","params","body","returnType","typeParameters"],"FunctionExpression":["id","params","body","returnType","typeParameters"],"Identifier":["typeAnnotation"],"IfStatement":["test","consequent","alternate"],"LabeledStatement":["label","body"],"StringLiteral":[],"NumericLiteral":[],"NullLiteral":[],"BooleanLiteral":[],"RegExpLiteral":[],"LogicalExpression":["left","right"],"MemberExpression":["object","property"],"NewExpression":["callee","arguments"],"Program":["directives","body"],"ObjectExpression":["properties"],"ObjectMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectProperty":["key","value","decorators"],"RestElement":["argument","typeAnnotation"],"ReturnStatement":["argument"],"SequenceExpression":["expressions"],"SwitchCase":["test","consequent"],"SwitchStatement":["discriminant","cases"],"ThisExpression":[],"ThrowStatement":["argument"],"TryStatement":["block","handler","finalizer"],"UnaryExpression":["argument"],"UpdateExpression":["argument"],"VariableDeclaration":["declarations"],"VariableDeclarator":["id","init"],"WhileStatement":["test","body"],"WithStatement":["object","body"],"AssignmentPattern":["left","right"],"ArrayPattern":["elements","typeAnnotation"],"ArrowFunctionExpression":["params","body","returnType","typeParameters"],"ClassBody":["body"],"ClassDeclaration":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ClassExpression":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ExportAllDeclaration":["source"],"ExportDefaultDeclaration":["declaration"],"ExportNamedDeclaration":["declaration","specifiers","source"],"ExportSpecifier":["local","exported"],"ForOfStatement":["left","right","body"],"ImportDeclaration":["specifiers","source"],"ImportDefaultSpecifier":["local"],"ImportNamespaceSpecifier":["local"],"ImportSpecifier":["local","imported"],"MetaProperty":["meta","property"],"ClassMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectPattern":["properties","typeAnnotation"],"SpreadElement":["argument"],"Super":[],"TaggedTemplateExpression":["tag","quasi"],"TemplateElement":[],"TemplateLiteral":["quasis","expressions"],"YieldExpression":["argument"],"AnyTypeAnnotation":[],"ArrayTypeAnnotation":["elementType"],"BooleanTypeAnnotation":[],"BooleanLiteralTypeAnnotation":[],"NullLiteralTypeAnnotation":[],"ClassImplements":["id","typeParameters"],"ClassProperty":["key","value","typeAnnotation","decorators"],"DeclareClass":["id","typeParameters","extends","body"],"DeclareFunction":["id"],"DeclareInterface":["id","typeParameters","extends","body"],"DeclareModule":["id","body"],"DeclareModuleExports":["typeAnnotation"],"DeclareTypeAlias":["id","typeParameters","right"],"DeclareVariable":["id"],"ExistentialTypeParam":[],"FunctionTypeAnnotation":["typeParameters","params","rest","returnType"],"FunctionTypeParam":["name","typeAnnotation"],"GenericTypeAnnotation":["id","typeParameters"],"InterfaceExtends":["id","typeParameters"],"InterfaceDeclaration":["id","typeParameters","extends","body"],"IntersectionTypeAnnotation":["types"],"MixedTypeAnnotation":[],"EmptyTypeAnnotation":[],"NullableTypeAnnotation":["typeAnnotation"],"NumericLiteralTypeAnnotation":[],"NumberTypeAnnotation":[],"StringLiteralTypeAnnotation":[],"StringTypeAnnotation":[],"ThisTypeAnnotation":[],"TupleTypeAnnotation":["types"],"TypeofTypeAnnotation":["argument"],"TypeAlias":["id","typeParameters","right"],"TypeAnnotation":["typeAnnotation"],"TypeCastExpression":["expression","typeAnnotation"],"TypeParameter":["bound"],"TypeParameterDeclaration":["params"],"TypeParameterInstantiation":["params"],"ObjectTypeAnnotation":["properties","indexers","callProperties"],"ObjectTypeCallProperty":["value"],"ObjectTypeIndexer":["id","key","value"],"ObjectTypeProperty":["key","value"],"QualifiedTypeIdentifier":["id","qualification"],"UnionTypeAnnotation":["types"],"VoidTypeAnnotation":[],"JSXAttribute":["name","value"],"JSXClosingElement":["name"],"JSXElement":["openingElement","children","closingElement"],"JSXEmptyExpression":[],"JSXExpressionContainer":["expression"],"JSXSpreadChild":["expression"],"JSXIdentifier":[],"JSXMemberExpression":["object","property"],"JSXNamespacedName":["namespace","name"],"JSXOpeningElement":["name","attributes"],"JSXSpreadAttribute":["argument"],"JSXText":[],"Noop":[],"ParenthesizedExpression":["expression"],"AwaitExpression":["argument"],"ForAwaitStatement":["left","right","body"],"BindExpression":["object","callee"],"Import":[],"Decorator":["expression"],"DoExpression":["body"],"ExportDefaultSpecifier":["exported"],"ExportNamespaceSpecifier":["exported"],"RestProperty":["argument"],"SpreadProperty":["argument"]}',
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { return { powerAssertContext: { value: value, events: this.captured }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder(),
    _rec5 = new _powerAssertRecorder();

assert(_rec._expr(_rec._capt(foo, 'arguments/0/test') ? _rec._capt(bar, 'arguments/0/consequent') : _rec._capt(baz, 'arguments/0/alternate'), {
  content: 'assert(foo ? bar : baz)',
  filepath: 'test/fixtures/ConditionalExpression/fixture.js',
  line: 3,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"ConditionalExpression","test":{"type":"Identifier","name":"foo","range":[7,10]},"consequent":{"type":"Identifier","name":"bar","range":[13,16]},"alternate":{"type":"Identifier","name":"baz","range":[19,22]},"range":[7,22]}],"range":[0,23]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"foo","range":[7,10]},{"type":{"label":"?"},"range":[11,12]},{"type":{"label":"name"},"value":"bar","range":[13,16]},{"type":{"label":":"},"range":[17,18]},{"type":{"label":"name"},"value":"baz","range":[19,22]},{"type":{"label":")"},"range":[22,23]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec2._expr(_rec2._capt(falsy, 'arguments/0/test') ? _rec2._capt(truthy, 'arguments/0/consequent') : _rec2._capt(truthy, 'arguments/0/alternate/test') ? _rec2._capt(anotherFalsy, 'arguments/0/alternate/consequent') : _rec2._capt(truthy, 'arguments/0/alternate/alternate'), {
  content: 'assert(falsy ? truthy : truthy ? anotherFalsy : truthy)',
  filepath: 'test/fixtures/ConditionalExpression/fixture.js',
  line: 5,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"ConditionalExpression","test":{"type":"Identifier","name":"falsy","range":[7,12]},"consequent":{"type":"Identifier","name":"truthy","range":[15,21]},"alternate":{"type":"ConditionalExpression","test":{"type":"Identifier","name":"truthy","range":[24,30]},"consequent":{"type":"Identifier","name":"anotherFalsy","range":[33,45]},"alternate":{"type":"Identifier","name":"truthy","range":[48,54]},"range":[24,54]},"range":[7,54]}],"range":[0,55]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"falsy","range":[7,12]},{"type":{"label":"?"},"range":[13,14]},{"type":{"label":"name"},"value":"truthy","range":[15,21]},{"type":{"label":":"},"range":[22,23]},{"type":{"label":"name"},"value":"truthy","range":[24,30]},{"type":{"label":"?"},"range":[31,32]},{"type":{"label":"name"},"value":"anotherFalsy","range":[33,45]},{"type":{"label":":"},"range":[46,47]},{"type":{"label":"name"},"value":"truthy","range":[48,54]},{"type":{"label":")"},"range":[54,55]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec3._expr(_rec3._capt(foo(), 'arguments/0/test') ? _rec3._capt(_rec3._capt(bar, 'arguments/0/consequent/object').baz, 'arguments/0/consequent') : _rec3._capt(typeof goo === 'undefined' ? 'undefined' : _typeof(goo), 'arguments/0/alternate'), {
  content: 'assert(foo() ? bar.baz : typeof goo)',
  filepath: 'test/fixtures/ConditionalExpression/fixture.js',
  line: 7,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"ConditionalExpression","test":{"type":"CallExpression","callee":{"type":"Identifier","name":"foo","range":[7,10]},"arguments":[],"range":[7,12]},"consequent":{"type":"MemberExpression","object":{"type":"Identifier","name":"bar","range":[15,18]},"property":{"type":"Identifier","name":"baz","range":[19,22]},"computed":false,"range":[15,22]},"alternate":{"type":"UnaryExpression","operator":"typeof","argument":{"type":"Identifier","name":"goo","range":[32,35]},"prefix":true,"range":[25,35]},"range":[7,35]}],"range":[0,36]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"foo","range":[7,10]},{"type":{"label":"("},"range":[10,11]},{"type":{"label":")"},"range":[11,12]},{"type":{"label":"?"},"range":[13,14]},{"type":{"label":"name"},"value":"bar","range":[15,18]},{"type":{"label":"."},"range":[18,19]},{"type":{"label":"name"},"value":"baz","range":[19,22]},{"type":{"label":":"},"range":[23,24]},{"type":{"label":"typeof"},"value":"typeof","range":[25,31]},{"type":{"label":"name"},"value":"goo","range":[32,35]},{"type":{"label":")"},"range":[35,36]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert.equal(_rec4._expr(_rec4._capt(foo, 'arguments/0/test') ? _rec4._capt(bar, 'arguments/0/consequent') : _rec4._capt(baz, 'arguments/0/alternate'), {
  content: 'assert.equal(foo ? bar : baz, falsy ? truthy : truthy ? anotherFalsy : truthy)',
  filepath: 'test/fixtures/ConditionalExpression/fixture.js',
  line: 9,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"equal","range":[7,12]},"computed":false,"range":[0,12]},"arguments":[{"type":"ConditionalExpression","test":{"type":"Identifier","name":"foo","range":[13,16]},"consequent":{"type":"Identifier","name":"bar","range":[19,22]},"alternate":{"type":"Identifier","name":"baz","range":[25,28]},"range":[13,28]},{"type":"ConditionalExpression","test":{"type":"Identifier","name":"falsy","range":[30,35]},"consequent":{"type":"Identifier","name":"truthy","range":[38,44]},"alternate":{"type":"ConditionalExpression","test":{"type":"Identifier","name":"truthy","range":[47,53]},"consequent":{"type":"Identifier","name":"anotherFalsy","range":[56,68]},"alternate":{"type":"Identifier","name":"truthy","range":[71,77]},"range":[47,77]},"range":[30,77]}],"range":[0,78]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"equal","range":[7,12]},{"type":{"label":"("},"range":[12,13]},{"type":{"label":"name"},"value":"foo","range":[13,16]},{"type":{"label":"?"},"range":[17,18]},{"type":{"label":"name"},"value":"bar","range":[19,22]},{"type":{"label":":"},"range":[23,24]},{"type":{"label":"name"},"value":"baz","range":[25,28]},{"type":{"label":","},"range":[28,29]},{"type":{"label":"name"},"value":"falsy","range":[30,35]},{"type":{"label":"?"},"range":[36,37]},{"type":{"label":"name"},"value":"truthy","range":[38,44]},{"type":{"label":":"},"range":[45,46]},{"type":{"label":"name"},"value":"truthy","range":[47,53]},{"type":{"label":"?"},"range":[54,55]},{"type":{"label":"name"},"value":"anotherFalsy","range":[56,68]},{"type":{"label":":"},"range":[69,70]},{"type":{"label":"name"},"value":"truthy","range":[71,77]},{"type":{"label":")"},"range":[77,78]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec5._expr(_rec5._capt(falsy, 'arguments/1/test') ? _rec5._capt(truthy, 'arguments/1/consequent') : _rec5._capt(truthy, 'arguments/1/alternate/test') ? _rec5._capt(anotherFalsy, 'arguments/1/alternate/consequent') : _rec5._capt(truthy, 'arguments/1/alternate/alternate'), {
  content: 'assert.equal(foo ? bar : baz, falsy ? truthy : truthy ? anotherFalsy : truthy)',
  filepath: 'test/fixtures/ConditionalExpression/fixture.js',
  line: 9,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"equal","range":[7,12]},"computed":false,"range":[0,12]},"arguments":[{"type":"ConditionalExpression","test":{"type":"Identifier","name":"foo","range":[13,16]},"consequent":{"type":"Identifier","name":"bar","range":[19,22]},"alternate":{"type":"Identifier","name":"baz","range":[25,28]},"range":[13,28]},{"type":"ConditionalExpression","test":{"type":"Identifier","name":"falsy","range":[30,35]},"consequent":{"type":"Identifier","name":"truthy","range":[38,44]},"alternate":{"type":"ConditionalExpression","test":{"type":"Identifier","name":"truthy","range":[47,53]},"consequent":{"type":"Identifier","name":"anotherFalsy","range":[56,68]},"alternate":{"type":"Identifier","name":"truthy","range":[71,77]},"range":[47,77]},"range":[30,77]}],"range":[0,78]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"equal","range":[7,12]},{"type":{"label":"("},"range":[12,13]},{"type":{"label":"name"},"value":"foo","range":[13,16]},{"type":{"label":"?"},"range":[17,18]},{"type":{"label":"name"},"value":"bar","range":[19,22]},{"type":{"label":":"},"range":[23,24]},{"type":{"label":"name"},"value":"baz","range":[25,28]},{"type":{"label":","},"range":[28,29]},{"type":{"label":"name"},"value":"falsy","range":[30,35]},{"type":{"label":"?"},"range":[36,37]},{"type":{"label":"name"},"value":"truthy","range":[38,44]},{"type":{"label":":"},"range":[45,46]},{"type":{"label":"name"},"value":"truthy","range":[47,53]},{"type":{"label":"?"},"range":[54,55]},{"type":{"label":"name"},"value":"anotherFalsy","range":[56,68]},{"type":{"label":":"},"range":[69,70]},{"type":{"label":"name"},"value":"truthy","range":[71,77]},{"type":{"label":")"},"range":[77,78]}]',
  visitorKeys: _powerAssertVisitorKeys
}));
