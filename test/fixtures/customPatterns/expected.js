'use strict';

var _powerAssertVisitorKeys = '{"ArrayExpression":["elements"],"AssignmentExpression":["left","right"],"BinaryExpression":["left","right"],"Directive":["value"],"DirectiveLiteral":[],"BlockStatement":["directives","body"],"BreakStatement":["label"],"CallExpression":["callee","arguments"],"CatchClause":["param","body"],"ConditionalExpression":["test","consequent","alternate"],"ContinueStatement":["label"],"DebuggerStatement":[],"DoWhileStatement":["test","body"],"EmptyStatement":[],"ExpressionStatement":["expression"],"File":["program"],"ForInStatement":["left","right","body"],"ForStatement":["init","test","update","body"],"FunctionDeclaration":["id","params","body","returnType","typeParameters"],"FunctionExpression":["id","params","body","returnType","typeParameters"],"Identifier":["typeAnnotation"],"IfStatement":["test","consequent","alternate"],"LabeledStatement":["label","body"],"StringLiteral":[],"NumericLiteral":[],"NullLiteral":[],"BooleanLiteral":[],"RegExpLiteral":[],"LogicalExpression":["left","right"],"MemberExpression":["object","property"],"NewExpression":["callee","arguments"],"Program":["directives","body"],"ObjectExpression":["properties"],"ObjectMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectProperty":["key","value","decorators"],"RestElement":["argument","typeAnnotation"],"ReturnStatement":["argument"],"SequenceExpression":["expressions"],"SwitchCase":["test","consequent"],"SwitchStatement":["discriminant","cases"],"ThisExpression":[],"ThrowStatement":["argument"],"TryStatement":["block","handler","finalizer"],"UnaryExpression":["argument"],"UpdateExpression":["argument"],"VariableDeclaration":["declarations"],"VariableDeclarator":["id","init"],"WhileStatement":["test","body"],"WithStatement":["object","body"],"AssignmentPattern":["left","right"],"ArrayPattern":["elements","typeAnnotation"],"ArrowFunctionExpression":["params","body","returnType"],"ClassBody":["body"],"ClassDeclaration":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ClassExpression":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ExportAllDeclaration":["source"],"ExportDefaultDeclaration":["declaration"],"ExportNamedDeclaration":["declaration","specifiers","source"],"ExportSpecifier":["local","exported"],"ForOfStatement":["left","right","body"],"ImportDeclaration":["specifiers","source"],"ImportDefaultSpecifier":["local"],"ImportNamespaceSpecifier":["local"],"ImportSpecifier":["local","imported"],"MetaProperty":["meta","property"],"ClassMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectPattern":["properties","typeAnnotation"],"SpreadElement":["argument"],"Super":[],"TaggedTemplateExpression":["tag","quasi"],"TemplateElement":[],"TemplateLiteral":["quasis","expressions"],"YieldExpression":["argument"],"AnyTypeAnnotation":[],"ArrayTypeAnnotation":["elementType"],"BooleanTypeAnnotation":[],"BooleanLiteralTypeAnnotation":[],"NullLiteralTypeAnnotation":[],"ClassImplements":["id","typeParameters"],"ClassProperty":["key","value","typeAnnotation","decorators"],"DeclareClass":["id","typeParameters","extends","body"],"DeclareFunction":["id"],"DeclareInterface":["id","typeParameters","extends","body"],"DeclareModule":["id","body"],"DeclareTypeAlias":["id","typeParameters","right"],"DeclareVariable":["id"],"ExistentialTypeParam":[],"FunctionTypeAnnotation":["typeParameters","params","rest","returnType"],"FunctionTypeParam":["name","typeAnnotation"],"GenericTypeAnnotation":["id","typeParameters"],"InterfaceExtends":["id","typeParameters"],"InterfaceDeclaration":["id","typeParameters","extends","body"],"IntersectionTypeAnnotation":["types"],"MixedTypeAnnotation":[],"NullableTypeAnnotation":["typeAnnotation"],"NumericLiteralTypeAnnotation":[],"NumberTypeAnnotation":[],"StringLiteralTypeAnnotation":[],"StringTypeAnnotation":[],"ThisTypeAnnotation":[],"TupleTypeAnnotation":["types"],"TypeofTypeAnnotation":["argument"],"TypeAlias":["id","typeParameters","right"],"TypeAnnotation":["typeAnnotation"],"TypeCastExpression":["expression","typeAnnotation"],"TypeParameterDeclaration":["params"],"TypeParameterInstantiation":["params"],"ObjectTypeAnnotation":["properties","indexers","callProperties"],"ObjectTypeCallProperty":["value"],"ObjectTypeIndexer":["id","key","value"],"ObjectTypeProperty":["key","value"],"QualifiedTypeIdentifier":["id","qualification"],"UnionTypeAnnotation":["types"],"VoidTypeAnnotation":[],"JSXAttribute":["name","value"],"JSXClosingElement":["name"],"JSXElement":["openingElement","children","closingElement"],"JSXEmptyExpression":[],"JSXExpressionContainer":["expression"],"JSXIdentifier":[],"JSXMemberExpression":["object","property"],"JSXNamespacedName":["namespace","name"],"JSXOpeningElement":["name","attributes"],"JSXSpreadAttribute":["argument"],"JSXText":[],"Noop":[],"ParenthesizedExpression":["expression"],"AwaitExpression":["argument"],"BindExpression":["object","callee"],"Decorator":["expression"],"DoExpression":["body"],"ExportDefaultSpecifier":["exported"],"ExportNamespaceSpecifier":["exported"],"RestProperty":["argument"],"SpreadProperty":["argument"]}',
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { return { powerAssertContext: { value: value, events: this.captured }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder(),
    _rec5 = new _powerAssertRecorder(),
    _rec6 = new _powerAssertRecorder(),
    _rec7 = new _powerAssertRecorder(),
    _rec8 = new _powerAssertRecorder(),
    _rec9 = new _powerAssertRecorder(),
    _rec10 = new _powerAssertRecorder(),
    _rec11 = new _powerAssertRecorder(),
    _rec12 = new _powerAssertRecorder();

assert.isNull(_rec._expr(_rec._capt(falsy, 'arguments/0'), {
  content: 'assert.isNull(falsy)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 3,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"isNull","range":[7,13]},"computed":false,"range":[0,13]},"arguments":[{"type":"Identifier","name":"falsy","range":[14,19]}],"range":[0,20]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"isNull","range":[7,13]},{"type":{"label":"("},"range":[13,14]},{"type":{"label":"name"},"value":"falsy","range":[14,19]},{"type":{"label":")"},"range":[19,20]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert.isNull(_rec2._expr(_rec2._capt(falsy, 'arguments/0'), {
  content: 'assert.isNull(falsy, message)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 5,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"isNull","range":[7,13]},"computed":false,"range":[0,13]},"arguments":[{"type":"Identifier","name":"falsy","range":[14,19]},{"type":"Identifier","name":"message","range":[21,28]}],"range":[0,29]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"isNull","range":[7,13]},{"type":{"label":"("},"range":[13,14]},{"type":{"label":"name"},"value":"falsy","range":[14,19]},{"type":{"label":","},"range":[19,20]},{"type":{"label":"name"},"value":"message","range":[21,28]},{"type":{"label":")"},"range":[28,29]}]',
  visitorKeys: _powerAssertVisitorKeys
}), message);

assert.same(_rec3._expr(_rec3._capt(foo, 'arguments/0'), {
  content: 'assert.same(foo, bar)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 7,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"same","range":[7,11]},"computed":false,"range":[0,11]},"arguments":[{"type":"Identifier","name":"foo","range":[12,15]},{"type":"Identifier","name":"bar","range":[17,20]}],"range":[0,21]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"same","range":[7,11]},{"type":{"label":"("},"range":[11,12]},{"type":{"label":"name"},"value":"foo","range":[12,15]},{"type":{"label":","},"range":[15,16]},{"type":{"label":"name"},"value":"bar","range":[17,20]},{"type":{"label":")"},"range":[20,21]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec4._expr(_rec4._capt(bar, 'arguments/1'), {
  content: 'assert.same(foo, bar)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 7,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"same","range":[7,11]},"computed":false,"range":[0,11]},"arguments":[{"type":"Identifier","name":"foo","range":[12,15]},{"type":"Identifier","name":"bar","range":[17,20]}],"range":[0,21]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"same","range":[7,11]},{"type":{"label":"("},"range":[11,12]},{"type":{"label":"name"},"value":"foo","range":[12,15]},{"type":{"label":","},"range":[15,16]},{"type":{"label":"name"},"value":"bar","range":[17,20]},{"type":{"label":")"},"range":[20,21]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert.same(_rec5._expr(_rec5._capt(foo, 'arguments/0'), {
  content: 'assert.same(foo, bar, message)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 9,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"same","range":[7,11]},"computed":false,"range":[0,11]},"arguments":[{"type":"Identifier","name":"foo","range":[12,15]},{"type":"Identifier","name":"bar","range":[17,20]},{"type":"Identifier","name":"message","range":[22,29]}],"range":[0,30]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"same","range":[7,11]},{"type":{"label":"("},"range":[11,12]},{"type":{"label":"name"},"value":"foo","range":[12,15]},{"type":{"label":","},"range":[15,16]},{"type":{"label":"name"},"value":"bar","range":[17,20]},{"type":{"label":","},"range":[20,21]},{"type":{"label":"name"},"value":"message","range":[22,29]},{"type":{"label":")"},"range":[29,30]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec6._expr(_rec6._capt(bar, 'arguments/1'), {
  content: 'assert.same(foo, bar, message)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 9,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"same","range":[7,11]},"computed":false,"range":[0,11]},"arguments":[{"type":"Identifier","name":"foo","range":[12,15]},{"type":"Identifier","name":"bar","range":[17,20]},{"type":"Identifier","name":"message","range":[22,29]}],"range":[0,30]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"same","range":[7,11]},{"type":{"label":"("},"range":[11,12]},{"type":{"label":"name"},"value":"foo","range":[12,15]},{"type":{"label":","},"range":[15,16]},{"type":{"label":"name"},"value":"bar","range":[17,20]},{"type":{"label":","},"range":[20,21]},{"type":{"label":"name"},"value":"message","range":[22,29]},{"type":{"label":")"},"range":[29,30]}]',
  visitorKeys: _powerAssertVisitorKeys
}), message);

assert.near(actualVal, expectedVal);

assert.near(_rec7._expr(_rec7._capt(actualVal, 'arguments/0'), {
  content: 'assert.near(actualVal, expectedVal, delta)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 13,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"near","range":[7,11]},"computed":false,"range":[0,11]},"arguments":[{"type":"Identifier","name":"actualVal","range":[12,21]},{"type":"Identifier","name":"expectedVal","range":[23,34]},{"type":"Identifier","name":"delta","range":[36,41]}],"range":[0,42]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"near","range":[7,11]},{"type":{"label":"("},"range":[11,12]},{"type":{"label":"name"},"value":"actualVal","range":[12,21]},{"type":{"label":","},"range":[21,22]},{"type":{"label":"name"},"value":"expectedVal","range":[23,34]},{"type":{"label":","},"range":[34,35]},{"type":{"label":"name"},"value":"delta","range":[36,41]},{"type":{"label":")"},"range":[41,42]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec8._expr(_rec8._capt(expectedVal, 'arguments/1'), {
  content: 'assert.near(actualVal, expectedVal, delta)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 13,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"near","range":[7,11]},"computed":false,"range":[0,11]},"arguments":[{"type":"Identifier","name":"actualVal","range":[12,21]},{"type":"Identifier","name":"expectedVal","range":[23,34]},{"type":"Identifier","name":"delta","range":[36,41]}],"range":[0,42]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"near","range":[7,11]},{"type":{"label":"("},"range":[11,12]},{"type":{"label":"name"},"value":"actualVal","range":[12,21]},{"type":{"label":","},"range":[21,22]},{"type":{"label":"name"},"value":"expectedVal","range":[23,34]},{"type":{"label":","},"range":[34,35]},{"type":{"label":"name"},"value":"delta","range":[36,41]},{"type":{"label":")"},"range":[41,42]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec9._expr(_rec9._capt(delta, 'arguments/2'), {
  content: 'assert.near(actualVal, expectedVal, delta)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 13,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"near","range":[7,11]},"computed":false,"range":[0,11]},"arguments":[{"type":"Identifier","name":"actualVal","range":[12,21]},{"type":"Identifier","name":"expectedVal","range":[23,34]},{"type":"Identifier","name":"delta","range":[36,41]}],"range":[0,42]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"near","range":[7,11]},{"type":{"label":"("},"range":[11,12]},{"type":{"label":"name"},"value":"actualVal","range":[12,21]},{"type":{"label":","},"range":[21,22]},{"type":{"label":"name"},"value":"expectedVal","range":[23,34]},{"type":{"label":","},"range":[34,35]},{"type":{"label":"name"},"value":"delta","range":[36,41]},{"type":{"label":")"},"range":[41,42]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert.near(_rec10._expr(_rec10._capt(actualVal, 'arguments/0'), {
  content: 'assert.near(actualVal, expectedVal, delta, message)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 15,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"near","range":[7,11]},"computed":false,"range":[0,11]},"arguments":[{"type":"Identifier","name":"actualVal","range":[12,21]},{"type":"Identifier","name":"expectedVal","range":[23,34]},{"type":"Identifier","name":"delta","range":[36,41]},{"type":"Identifier","name":"message","range":[43,50]}],"range":[0,51]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"near","range":[7,11]},{"type":{"label":"("},"range":[11,12]},{"type":{"label":"name"},"value":"actualVal","range":[12,21]},{"type":{"label":","},"range":[21,22]},{"type":{"label":"name"},"value":"expectedVal","range":[23,34]},{"type":{"label":","},"range":[34,35]},{"type":{"label":"name"},"value":"delta","range":[36,41]},{"type":{"label":","},"range":[41,42]},{"type":{"label":"name"},"value":"message","range":[43,50]},{"type":{"label":")"},"range":[50,51]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec11._expr(_rec11._capt(expectedVal, 'arguments/1'), {
  content: 'assert.near(actualVal, expectedVal, delta, message)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 15,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"near","range":[7,11]},"computed":false,"range":[0,11]},"arguments":[{"type":"Identifier","name":"actualVal","range":[12,21]},{"type":"Identifier","name":"expectedVal","range":[23,34]},{"type":"Identifier","name":"delta","range":[36,41]},{"type":"Identifier","name":"message","range":[43,50]}],"range":[0,51]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"near","range":[7,11]},{"type":{"label":"("},"range":[11,12]},{"type":{"label":"name"},"value":"actualVal","range":[12,21]},{"type":{"label":","},"range":[21,22]},{"type":{"label":"name"},"value":"expectedVal","range":[23,34]},{"type":{"label":","},"range":[34,35]},{"type":{"label":"name"},"value":"delta","range":[36,41]},{"type":{"label":","},"range":[41,42]},{"type":{"label":"name"},"value":"message","range":[43,50]},{"type":{"label":")"},"range":[50,51]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec12._expr(_rec12._capt(delta, 'arguments/2'), {
  content: 'assert.near(actualVal, expectedVal, delta, message)',
  filepath: 'test/fixtures/customPatterns/fixture.js',
  line: 15,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"near","range":[7,11]},"computed":false,"range":[0,11]},"arguments":[{"type":"Identifier","name":"actualVal","range":[12,21]},{"type":"Identifier","name":"expectedVal","range":[23,34]},{"type":"Identifier","name":"delta","range":[36,41]},{"type":"Identifier","name":"message","range":[43,50]}],"range":[0,51]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"near","range":[7,11]},{"type":{"label":"("},"range":[11,12]},{"type":{"label":"name"},"value":"actualVal","range":[12,21]},{"type":{"label":","},"range":[21,22]},{"type":{"label":"name"},"value":"expectedVal","range":[23,34]},{"type":{"label":","},"range":[34,35]},{"type":{"label":"name"},"value":"delta","range":[36,41]},{"type":{"label":","},"range":[41,42]},{"type":{"label":"name"},"value":"message","range":[43,50]},{"type":{"label":")"},"range":[50,51]}]',
  visitorKeys: _powerAssertVisitorKeys
}), message);
