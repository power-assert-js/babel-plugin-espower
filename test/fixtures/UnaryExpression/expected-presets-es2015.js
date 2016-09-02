'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _powerAssertVisitorKeys = '{"ArrayExpression":["elements"],"AssignmentExpression":["left","right"],"BinaryExpression":["left","right"],"Directive":["value"],"DirectiveLiteral":[],"BlockStatement":["directives","body"],"BreakStatement":["label"],"CallExpression":["callee","arguments"],"CatchClause":["param","body"],"ConditionalExpression":["test","consequent","alternate"],"ContinueStatement":["label"],"DebuggerStatement":[],"DoWhileStatement":["test","body"],"EmptyStatement":[],"ExpressionStatement":["expression"],"File":["program"],"ForInStatement":["left","right","body"],"ForStatement":["init","test","update","body"],"FunctionDeclaration":["id","params","body","returnType","typeParameters"],"FunctionExpression":["id","params","body","returnType","typeParameters"],"Identifier":["typeAnnotation"],"IfStatement":["test","consequent","alternate"],"LabeledStatement":["label","body"],"StringLiteral":[],"NumericLiteral":[],"NullLiteral":[],"BooleanLiteral":[],"RegExpLiteral":[],"LogicalExpression":["left","right"],"MemberExpression":["object","property"],"NewExpression":["callee","arguments"],"Program":["directives","body"],"ObjectExpression":["properties"],"ObjectMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectProperty":["key","value","decorators"],"RestElement":["argument","typeAnnotation"],"ReturnStatement":["argument"],"SequenceExpression":["expressions"],"SwitchCase":["test","consequent"],"SwitchStatement":["discriminant","cases"],"ThisExpression":[],"ThrowStatement":["argument"],"TryStatement":["block","handler","finalizer"],"UnaryExpression":["argument"],"UpdateExpression":["argument"],"VariableDeclaration":["declarations"],"VariableDeclarator":["id","init"],"WhileStatement":["test","body"],"WithStatement":["object","body"],"AssignmentPattern":["left","right"],"ArrayPattern":["elements","typeAnnotation"],"ArrowFunctionExpression":["params","body","returnType"],"ClassBody":["body"],"ClassDeclaration":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ClassExpression":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ExportAllDeclaration":["source"],"ExportDefaultDeclaration":["declaration"],"ExportNamedDeclaration":["declaration","specifiers","source"],"ExportSpecifier":["local","exported"],"ForOfStatement":["left","right","body"],"ImportDeclaration":["specifiers","source"],"ImportDefaultSpecifier":["local"],"ImportNamespaceSpecifier":["local"],"ImportSpecifier":["local","imported"],"MetaProperty":["meta","property"],"ClassMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectPattern":["properties","typeAnnotation"],"SpreadElement":["argument"],"Super":[],"TaggedTemplateExpression":["tag","quasi"],"TemplateElement":[],"TemplateLiteral":["quasis","expressions"],"YieldExpression":["argument"],"AnyTypeAnnotation":[],"ArrayTypeAnnotation":["elementType"],"BooleanTypeAnnotation":[],"BooleanLiteralTypeAnnotation":[],"NullLiteralTypeAnnotation":[],"ClassImplements":["id","typeParameters"],"ClassProperty":["key","value","typeAnnotation","decorators"],"DeclareClass":["id","typeParameters","extends","body"],"DeclareFunction":["id"],"DeclareInterface":["id","typeParameters","extends","body"],"DeclareModule":["id","body"],"DeclareModuleExports":["typeAnnotation"],"DeclareTypeAlias":["id","typeParameters","right"],"DeclareVariable":["id"],"ExistentialTypeParam":[],"FunctionTypeAnnotation":["typeParameters","params","rest","returnType"],"FunctionTypeParam":["name","typeAnnotation"],"GenericTypeAnnotation":["id","typeParameters"],"InterfaceExtends":["id","typeParameters"],"InterfaceDeclaration":["id","typeParameters","extends","body"],"IntersectionTypeAnnotation":["types"],"MixedTypeAnnotation":[],"NullableTypeAnnotation":["typeAnnotation"],"NumericLiteralTypeAnnotation":[],"NumberTypeAnnotation":[],"StringLiteralTypeAnnotation":[],"StringTypeAnnotation":[],"ThisTypeAnnotation":[],"TupleTypeAnnotation":["types"],"TypeofTypeAnnotation":["argument"],"TypeAlias":["id","typeParameters","right"],"TypeAnnotation":["typeAnnotation"],"TypeCastExpression":["expression","typeAnnotation"],"TypeParameter":["bound"],"TypeParameterDeclaration":["params"],"TypeParameterInstantiation":["params"],"ObjectTypeAnnotation":["properties","indexers","callProperties"],"ObjectTypeCallProperty":["value"],"ObjectTypeIndexer":["id","key","value"],"ObjectTypeProperty":["key","value"],"QualifiedTypeIdentifier":["id","qualification"],"UnionTypeAnnotation":["types"],"VoidTypeAnnotation":[],"JSXAttribute":["name","value"],"JSXClosingElement":["name"],"JSXElement":["openingElement","children","closingElement"],"JSXEmptyExpression":[],"JSXExpressionContainer":["expression"],"JSXIdentifier":[],"JSXMemberExpression":["object","property"],"JSXNamespacedName":["namespace","name"],"JSXOpeningElement":["name","attributes"],"JSXSpreadAttribute":["argument"],"JSXText":[],"Noop":[],"ParenthesizedExpression":["expression"],"AwaitExpression":["argument"],"BindExpression":["object","callee"],"Decorator":["expression"],"DoExpression":["body"],"ExportDefaultSpecifier":["exported"],"ExportNamespaceSpecifier":["exported"],"RestProperty":["argument"],"SpreadProperty":["argument"]}',
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { return { powerAssertContext: { value: value, events: this.captured }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder(),
    _rec5 = new _powerAssertRecorder(),
    _rec6 = new _powerAssertRecorder(),
    _rec7 = new _powerAssertRecorder(),
    _rec8 = new _powerAssertRecorder();

assert(_rec._expr(_rec._capt(!_rec._capt(truth, 'arguments/0/argument'), 'arguments/0'), {
  content: 'assert(!truth)',
  filepath: 'test/fixtures/UnaryExpression/fixture.js',
  line: 3,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"UnaryExpression","operator":"!","argument":{"type":"Identifier","name":"truth","range":[8,13]},"prefix":true,"range":[7,13]}],"range":[0,14]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"prefix"},"value":"!","range":[7,8]},{"type":{"label":"name"},"value":"truth","range":[8,13]},{"type":{"label":")"},"range":[13,14]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec2._expr(_rec2._capt(!_rec2._capt(!_rec2._capt(some, 'arguments/0/argument/argument'), 'arguments/0/argument'), 'arguments/0'), {
  content: 'assert(!!some)',
  filepath: 'test/fixtures/UnaryExpression/fixture.js',
  line: 5,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"UnaryExpression","operator":"!","argument":{"type":"UnaryExpression","operator":"!","argument":{"type":"Identifier","name":"some","range":[9,13]},"prefix":true,"range":[8,13]},"prefix":true,"range":[7,13]}],"range":[0,14]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"prefix"},"value":"!","range":[7,8]},{"type":{"label":"prefix"},"value":"!","range":[8,9]},{"type":{"label":"name"},"value":"some","range":[9,13]},{"type":{"label":")"},"range":[13,14]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec3._expr(_rec3._capt(!_rec3._capt(!_rec3._capt(_rec3._capt(foo, 'arguments/0/argument/argument/object').bar, 'arguments/0/argument/argument'), 'arguments/0/argument'), 'arguments/0'), {
  content: 'assert(!!foo.bar)',
  filepath: 'test/fixtures/UnaryExpression/fixture.js',
  line: 7,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"UnaryExpression","operator":"!","argument":{"type":"UnaryExpression","operator":"!","argument":{"type":"MemberExpression","object":{"type":"Identifier","name":"foo","range":[9,12]},"property":{"type":"Identifier","name":"bar","range":[13,16]},"computed":false,"range":[9,16]},"prefix":true,"range":[8,16]},"prefix":true,"range":[7,16]}],"range":[0,17]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"prefix"},"value":"!","range":[7,8]},{"type":{"label":"prefix"},"value":"!","range":[8,9]},{"type":{"label":"name"},"value":"foo","range":[9,12]},{"type":{"label":"."},"range":[12,13]},{"type":{"label":"name"},"value":"bar","range":[13,16]},{"type":{"label":")"},"range":[16,17]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec4._expr(_rec4._capt(delete _rec4._capt(_rec4._capt(foo, 'arguments/0/argument/object').bar, 'arguments/0/argument'), 'arguments/0'), {
  content: 'assert(delete foo.bar)',
  filepath: 'test/fixtures/UnaryExpression/fixture.js',
  line: 9,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"UnaryExpression","operator":"delete","argument":{"type":"MemberExpression","object":{"type":"Identifier","name":"foo","range":[14,17]},"property":{"type":"Identifier","name":"bar","range":[18,21]},"computed":false,"range":[14,21]},"prefix":true,"range":[7,21]}],"range":[0,22]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"delete"},"value":"delete","range":[7,13]},{"type":{"label":"name"},"value":"foo","range":[14,17]},{"type":{"label":"."},"range":[17,18]},{"type":{"label":"name"},"value":"bar","range":[18,21]},{"type":{"label":")"},"range":[21,22]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec5._expr(_rec5._capt(_rec5._capt(typeof foo === 'undefined' ? 'undefined' : _typeof(foo), 'arguments/0/left') !== 'undefined', 'arguments/0'), {
  content: 'assert(typeof foo !== \'undefined\')',
  filepath: 'test/fixtures/UnaryExpression/fixture.js',
  line: 11,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"!==","left":{"type":"UnaryExpression","operator":"typeof","argument":{"type":"Identifier","name":"foo","range":[14,17]},"prefix":true,"range":[7,17]},"right":{"type":"StringLiteral","value":"undefined","range":[22,33]},"range":[7,33]}],"range":[0,34]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"typeof"},"value":"typeof","range":[7,13]},{"type":{"label":"name"},"value":"foo","range":[14,17]},{"type":{"label":"==/!="},"value":"!==","range":[18,21]},{"type":{"label":"string"},"value":"undefined","range":[22,33]},{"type":{"label":")"},"range":[33,34]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec6._expr(_rec6._capt(_rec6._capt(_typeof(_rec6._capt(_rec6._capt(foo, 'arguments/0/left/argument/object').bar, 'arguments/0/left/argument')), 'arguments/0/left') !== 'undefined', 'arguments/0'), {
  content: 'assert(typeof foo.bar !== \'undefined\')',
  filepath: 'test/fixtures/UnaryExpression/fixture.js',
  line: 13,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"!==","left":{"type":"UnaryExpression","operator":"typeof","argument":{"type":"MemberExpression","object":{"type":"Identifier","name":"foo","range":[14,17]},"property":{"type":"Identifier","name":"bar","range":[18,21]},"computed":false,"range":[14,21]},"prefix":true,"range":[7,21]},"right":{"type":"StringLiteral","value":"undefined","range":[26,37]},"range":[7,37]}],"range":[0,38]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"typeof"},"value":"typeof","range":[7,13]},{"type":{"label":"name"},"value":"foo","range":[14,17]},{"type":{"label":"."},"range":[17,18]},{"type":{"label":"name"},"value":"bar","range":[18,21]},{"type":{"label":"==/!="},"value":"!==","range":[22,25]},{"type":{"label":"string"},"value":"undefined","range":[26,37]},{"type":{"label":")"},"range":[37,38]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert.strictEqual(_rec7._expr(_rec7._capt(typeof foo === 'undefined' ? 'undefined' : _typeof(foo), 'arguments/0'), {
  content: 'assert.strictEqual(typeof foo, typeof bar)',
  filepath: 'test/fixtures/UnaryExpression/fixture.js',
  line: 15,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"strictEqual","range":[7,18]},"computed":false,"range":[0,18]},"arguments":[{"type":"UnaryExpression","operator":"typeof","argument":{"type":"Identifier","name":"foo","range":[26,29]},"prefix":true,"range":[19,29]},{"type":"UnaryExpression","operator":"typeof","argument":{"type":"Identifier","name":"bar","range":[38,41]},"prefix":true,"range":[31,41]}],"range":[0,42]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"strictEqual","range":[7,18]},{"type":{"label":"("},"range":[18,19]},{"type":{"label":"typeof"},"value":"typeof","range":[19,25]},{"type":{"label":"name"},"value":"foo","range":[26,29]},{"type":{"label":","},"range":[29,30]},{"type":{"label":"typeof"},"value":"typeof","range":[31,37]},{"type":{"label":"name"},"value":"bar","range":[38,41]},{"type":{"label":")"},"range":[41,42]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec8._expr(_rec8._capt(typeof bar === 'undefined' ? 'undefined' : _typeof(bar), 'arguments/1'), {
  content: 'assert.strictEqual(typeof foo, typeof bar)',
  filepath: 'test/fixtures/UnaryExpression/fixture.js',
  line: 15,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"strictEqual","range":[7,18]},"computed":false,"range":[0,18]},"arguments":[{"type":"UnaryExpression","operator":"typeof","argument":{"type":"Identifier","name":"foo","range":[26,29]},"prefix":true,"range":[19,29]},{"type":"UnaryExpression","operator":"typeof","argument":{"type":"Identifier","name":"bar","range":[38,41]},"prefix":true,"range":[31,41]}],"range":[0,42]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"strictEqual","range":[7,18]},{"type":{"label":"("},"range":[18,19]},{"type":{"label":"typeof"},"value":"typeof","range":[19,25]},{"type":{"label":"name"},"value":"foo","range":[26,29]},{"type":{"label":","},"range":[29,30]},{"type":{"label":"typeof"},"value":"typeof","range":[31,37]},{"type":{"label":"name"},"value":"bar","range":[38,41]},{"type":{"label":")"},"range":[41,42]}]',
  visitorKeys: _powerAssertVisitorKeys
}));
