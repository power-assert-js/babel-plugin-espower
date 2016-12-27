'use strict';

var _powerAssertVisitorKeys = '{"ArrayExpression":["elements"],"AssignmentExpression":["left","right"],"BinaryExpression":["left","right"],"Directive":["value"],"DirectiveLiteral":[],"BlockStatement":["directives","body"],"BreakStatement":["label"],"CallExpression":["callee","arguments"],"CatchClause":["param","body"],"ConditionalExpression":["test","consequent","alternate"],"ContinueStatement":["label"],"DebuggerStatement":[],"DoWhileStatement":["test","body"],"EmptyStatement":[],"ExpressionStatement":["expression"],"File":["program"],"ForInStatement":["left","right","body"],"ForStatement":["init","test","update","body"],"FunctionDeclaration":["id","params","body","returnType","typeParameters"],"FunctionExpression":["id","params","body","returnType","typeParameters"],"Identifier":["typeAnnotation"],"IfStatement":["test","consequent","alternate"],"LabeledStatement":["label","body"],"StringLiteral":[],"NumericLiteral":[],"NullLiteral":[],"BooleanLiteral":[],"RegExpLiteral":[],"LogicalExpression":["left","right"],"MemberExpression":["object","property"],"NewExpression":["callee","arguments"],"Program":["directives","body"],"ObjectExpression":["properties"],"ObjectMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectProperty":["key","value","decorators"],"RestElement":["argument","typeAnnotation"],"ReturnStatement":["argument"],"SequenceExpression":["expressions"],"SwitchCase":["test","consequent"],"SwitchStatement":["discriminant","cases"],"ThisExpression":[],"ThrowStatement":["argument"],"TryStatement":["block","handler","finalizer"],"UnaryExpression":["argument"],"UpdateExpression":["argument"],"VariableDeclaration":["declarations"],"VariableDeclarator":["id","init"],"WhileStatement":["test","body"],"WithStatement":["object","body"],"AssignmentPattern":["left","right"],"ArrayPattern":["elements","typeAnnotation"],"ArrowFunctionExpression":["params","body","returnType","typeParameters"],"ClassBody":["body"],"ClassDeclaration":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ClassExpression":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ExportAllDeclaration":["source"],"ExportDefaultDeclaration":["declaration"],"ExportNamedDeclaration":["declaration","specifiers","source"],"ExportSpecifier":["local","exported"],"ForOfStatement":["left","right","body"],"ImportDeclaration":["specifiers","source"],"ImportDefaultSpecifier":["local"],"ImportNamespaceSpecifier":["local"],"ImportSpecifier":["local","imported"],"MetaProperty":["meta","property"],"ClassMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectPattern":["properties","typeAnnotation"],"SpreadElement":["argument"],"Super":[],"TaggedTemplateExpression":["tag","quasi"],"TemplateElement":[],"TemplateLiteral":["quasis","expressions"],"YieldExpression":["argument"],"AnyTypeAnnotation":[],"ArrayTypeAnnotation":["elementType"],"BooleanTypeAnnotation":[],"BooleanLiteralTypeAnnotation":[],"NullLiteralTypeAnnotation":[],"ClassImplements":["id","typeParameters"],"ClassProperty":["key","value","typeAnnotation","decorators"],"DeclareClass":["id","typeParameters","extends","body"],"DeclareFunction":["id"],"DeclareInterface":["id","typeParameters","extends","body"],"DeclareModule":["id","body"],"DeclareModuleExports":["typeAnnotation"],"DeclareTypeAlias":["id","typeParameters","right"],"DeclareVariable":["id"],"ExistentialTypeParam":[],"FunctionTypeAnnotation":["typeParameters","params","rest","returnType"],"FunctionTypeParam":["name","typeAnnotation"],"GenericTypeAnnotation":["id","typeParameters"],"InterfaceExtends":["id","typeParameters"],"InterfaceDeclaration":["id","typeParameters","extends","body"],"IntersectionTypeAnnotation":["types"],"MixedTypeAnnotation":[],"EmptyTypeAnnotation":[],"NullableTypeAnnotation":["typeAnnotation"],"NumericLiteralTypeAnnotation":[],"NumberTypeAnnotation":[],"StringLiteralTypeAnnotation":[],"StringTypeAnnotation":[],"ThisTypeAnnotation":[],"TupleTypeAnnotation":["types"],"TypeofTypeAnnotation":["argument"],"TypeAlias":["id","typeParameters","right"],"TypeAnnotation":["typeAnnotation"],"TypeCastExpression":["expression","typeAnnotation"],"TypeParameter":["bound"],"TypeParameterDeclaration":["params"],"TypeParameterInstantiation":["params"],"ObjectTypeAnnotation":["properties","indexers","callProperties"],"ObjectTypeCallProperty":["value"],"ObjectTypeIndexer":["id","key","value"],"ObjectTypeProperty":["key","value"],"QualifiedTypeIdentifier":["id","qualification"],"UnionTypeAnnotation":["types"],"VoidTypeAnnotation":[],"JSXAttribute":["name","value"],"JSXClosingElement":["name"],"JSXElement":["openingElement","children","closingElement"],"JSXEmptyExpression":[],"JSXExpressionContainer":["expression"],"JSXSpreadChild":["expression"],"JSXIdentifier":[],"JSXMemberExpression":["object","property"],"JSXNamespacedName":["namespace","name"],"JSXOpeningElement":["name","attributes"],"JSXSpreadAttribute":["argument"],"JSXText":[],"Noop":[],"ParenthesizedExpression":["expression"],"AwaitExpression":["argument"],"ForAwaitStatement":["left","right","body"],"BindExpression":["object","callee"],"Import":[],"Decorator":["expression"],"DoExpression":["body"],"ExportDefaultSpecifier":["exported"],"ExportNamespaceSpecifier":["exported"],"RestProperty":["argument"],"SpreadProperty":["argument"]}',
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { return { powerAssertContext: { value: value, events: this.captured }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder(),
    _rec5 = new _powerAssertRecorder(),
    _rec6 = new _powerAssertRecorder();

assert(_rec._expr(_rec._capt(_rec._capt(5 < _rec._capt(actual, 'arguments/0/left/right'), 'arguments/0/left') && _rec._capt(_rec._capt(actual, 'arguments/0/right/left') < 13, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(5 < actual && actual < 13)',
  filepath: 'test/fixtures/LogicalExpression/fixture.js',
  line: 3,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"LogicalExpression","operator":"&&","left":{"type":"BinaryExpression","operator":"<","left":{"type":"NumericLiteral","value":5,"range":[7,8]},"right":{"type":"Identifier","name":"actual","range":[11,17]},"range":[7,17]},"right":{"type":"BinaryExpression","operator":"<","left":{"type":"Identifier","name":"actual","range":[21,27]},"right":{"type":"NumericLiteral","value":13,"range":[30,32]},"range":[21,32]},"range":[7,32]}],"range":[0,33]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"num"},"value":5,"range":[7,8]},{"type":{"label":"</>"},"value":"<","range":[9,10]},{"type":{"label":"name"},"value":"actual","range":[11,17]},{"type":{"label":"&&"},"value":"&&","range":[18,20]},{"type":{"label":"name"},"value":"actual","range":[21,27]},{"type":{"label":"</>"},"value":"<","range":[28,29]},{"type":{"label":"num"},"value":13,"range":[30,32]},{"type":{"label":")"},"range":[32,33]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert.ok(_rec2._expr(_rec2._capt(_rec2._capt(_rec2._capt(actual, 'arguments/0/left/left') < 5, 'arguments/0/left') || _rec2._capt(13 < _rec2._capt(actual, 'arguments/0/right/right'), 'arguments/0/right'), 'arguments/0'), {
  content: 'assert.ok(actual < 5 || 13 < actual)',
  filepath: 'test/fixtures/LogicalExpression/fixture.js',
  line: 5,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"ok","range":[7,9]},"computed":false,"range":[0,9]},"arguments":[{"type":"LogicalExpression","operator":"||","left":{"type":"BinaryExpression","operator":"<","left":{"type":"Identifier","name":"actual","range":[10,16]},"right":{"type":"NumericLiteral","value":5,"range":[19,20]},"range":[10,20]},"right":{"type":"BinaryExpression","operator":"<","left":{"type":"NumericLiteral","value":13,"range":[24,26]},"right":{"type":"Identifier","name":"actual","range":[29,35]},"range":[24,35]},"range":[10,35]}],"range":[0,36]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"ok","range":[7,9]},{"type":{"label":"("},"range":[9,10]},{"type":{"label":"name"},"value":"actual","range":[10,16]},{"type":{"label":"</>"},"value":"<","range":[17,18]},{"type":{"label":"num"},"value":5,"range":[19,20]},{"type":{"label":"||"},"value":"||","range":[21,23]},{"type":{"label":"num"},"value":13,"range":[24,26]},{"type":{"label":"</>"},"value":"<","range":[27,28]},{"type":{"label":"name"},"value":"actual","range":[29,35]},{"type":{"label":")"},"range":[35,36]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec3._expr(_rec3._capt(_rec3._capt(2 > _rec3._capt(actual, 'arguments/0/left/right'), 'arguments/0/left') && _rec3._capt(_rec3._capt(actual, 'arguments/0/right/left') < 13, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(2 > actual && actual < 13)',
  filepath: 'test/fixtures/LogicalExpression/fixture.js',
  line: 7,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"LogicalExpression","operator":"&&","left":{"type":"BinaryExpression","operator":">","left":{"type":"NumericLiteral","value":2,"range":[7,8]},"right":{"type":"Identifier","name":"actual","range":[11,17]},"range":[7,17]},"right":{"type":"BinaryExpression","operator":"<","left":{"type":"Identifier","name":"actual","range":[21,27]},"right":{"type":"NumericLiteral","value":13,"range":[30,32]},"range":[21,32]},"range":[7,32]}],"range":[0,33]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"num"},"value":2,"range":[7,8]},{"type":{"label":"</>"},"value":">","range":[9,10]},{"type":{"label":"name"},"value":"actual","range":[11,17]},{"type":{"label":"&&"},"value":"&&","range":[18,20]},{"type":{"label":"name"},"value":"actual","range":[21,27]},{"type":{"label":"</>"},"value":"<","range":[28,29]},{"type":{"label":"num"},"value":13,"range":[30,32]},{"type":{"label":")"},"range":[32,33]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec4._expr(_rec4._capt(_rec4._capt(2 > _rec4._capt(actual, 'arguments/0/left/right'), 'arguments/0/left') && _rec4._capt(_rec4._capt(actual, 'arguments/0/right/left') < 13, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(2 > actual && actual < 13)',
  filepath: 'test/fixtures/LogicalExpression/fixture.js',
  line: 9,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"LogicalExpression","operator":"&&","left":{"type":"BinaryExpression","operator":">","left":{"type":"NumericLiteral","value":2,"range":[7,8]},"right":{"type":"Identifier","name":"actual","range":[11,17]},"range":[7,17]},"right":{"type":"BinaryExpression","operator":"<","left":{"type":"Identifier","name":"actual","range":[21,27]},"right":{"type":"NumericLiteral","value":13,"range":[30,32]},"range":[21,32]},"range":[7,32]}],"range":[0,33]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"num"},"value":2,"range":[7,8]},{"type":{"label":"</>"},"value":">","range":[9,10]},{"type":{"label":"name"},"value":"actual","range":[11,17]},{"type":{"label":"&&"},"value":"&&","range":[18,20]},{"type":{"label":"name"},"value":"actual","range":[21,27]},{"type":{"label":"</>"},"value":"<","range":[28,29]},{"type":{"label":"num"},"value":13,"range":[30,32]},{"type":{"label":")"},"range":[32,33]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert.equal(_rec5._expr(_rec5._capt(_rec5._capt(5 < _rec5._capt(actual, 'arguments/0/left/right'), 'arguments/0/left') && _rec5._capt(_rec5._capt(actual, 'arguments/0/right/left') < 13, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert.equal(5 < actual && actual < 13, falsy)',
  filepath: 'test/fixtures/LogicalExpression/fixture.js',
  line: 11,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"equal","range":[7,12]},"computed":false,"range":[0,12]},"arguments":[{"type":"LogicalExpression","operator":"&&","left":{"type":"BinaryExpression","operator":"<","left":{"type":"NumericLiteral","value":5,"range":[13,14]},"right":{"type":"Identifier","name":"actual","range":[17,23]},"range":[13,23]},"right":{"type":"BinaryExpression","operator":"<","left":{"type":"Identifier","name":"actual","range":[27,33]},"right":{"type":"NumericLiteral","value":13,"range":[36,38]},"range":[27,38]},"range":[13,38]},{"type":"Identifier","name":"falsy","range":[40,45]}],"range":[0,46]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"equal","range":[7,12]},{"type":{"label":"("},"range":[12,13]},{"type":{"label":"num"},"value":5,"range":[13,14]},{"type":{"label":"</>"},"value":"<","range":[15,16]},{"type":{"label":"name"},"value":"actual","range":[17,23]},{"type":{"label":"&&"},"value":"&&","range":[24,26]},{"type":{"label":"name"},"value":"actual","range":[27,33]},{"type":{"label":"</>"},"value":"<","range":[34,35]},{"type":{"label":"num"},"value":13,"range":[36,38]},{"type":{"label":","},"range":[38,39]},{"type":{"label":"name"},"value":"falsy","range":[40,45]},{"type":{"label":")"},"range":[45,46]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec6._expr(_rec6._capt(falsy, 'arguments/1'), {
  content: 'assert.equal(5 < actual && actual < 13, falsy)',
  filepath: 'test/fixtures/LogicalExpression/fixture.js',
  line: 11,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"equal","range":[7,12]},"computed":false,"range":[0,12]},"arguments":[{"type":"LogicalExpression","operator":"&&","left":{"type":"BinaryExpression","operator":"<","left":{"type":"NumericLiteral","value":5,"range":[13,14]},"right":{"type":"Identifier","name":"actual","range":[17,23]},"range":[13,23]},"right":{"type":"BinaryExpression","operator":"<","left":{"type":"Identifier","name":"actual","range":[27,33]},"right":{"type":"NumericLiteral","value":13,"range":[36,38]},"range":[27,38]},"range":[13,38]},{"type":"Identifier","name":"falsy","range":[40,45]}],"range":[0,46]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"equal","range":[7,12]},{"type":{"label":"("},"range":[12,13]},{"type":{"label":"num"},"value":5,"range":[13,14]},{"type":{"label":"</>"},"value":"<","range":[15,16]},{"type":{"label":"name"},"value":"actual","range":[17,23]},{"type":{"label":"&&"},"value":"&&","range":[24,26]},{"type":{"label":"name"},"value":"actual","range":[27,33]},{"type":{"label":"</>"},"value":"<","range":[34,35]},{"type":{"label":"num"},"value":13,"range":[36,38]},{"type":{"label":","},"range":[38,39]},{"type":{"label":"name"},"value":"falsy","range":[40,45]},{"type":{"label":")"},"range":[45,46]}]',
  visitorKeys: _powerAssertVisitorKeys
}));
