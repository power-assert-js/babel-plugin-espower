'use strict';

var _powerAssertVisitorKeys = "{\"ArrayExpression\":[\"elements\"],\"AssignmentExpression\":[\"left\",\"right\"],\"BinaryExpression\":[\"left\",\"right\"],\"InterpreterDirective\":[],\"Directive\":[\"value\"],\"DirectiveLiteral\":[],\"BlockStatement\":[\"directives\",\"body\"],\"BreakStatement\":[\"label\"],\"CallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"CatchClause\":[\"param\",\"body\"],\"ConditionalExpression\":[\"test\",\"consequent\",\"alternate\"],\"ContinueStatement\":[\"label\"],\"DebuggerStatement\":[],\"DoWhileStatement\":[\"test\",\"body\"],\"EmptyStatement\":[],\"ExpressionStatement\":[\"expression\"],\"File\":[\"program\"],\"ForInStatement\":[\"left\",\"right\",\"body\"],\"ForStatement\":[\"init\",\"test\",\"update\",\"body\"],\"FunctionDeclaration\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"FunctionExpression\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"Identifier\":[\"typeAnnotation\"],\"IfStatement\":[\"test\",\"consequent\",\"alternate\"],\"LabeledStatement\":[\"label\",\"body\"],\"StringLiteral\":[],\"NumericLiteral\":[],\"NullLiteral\":[],\"BooleanLiteral\":[],\"RegExpLiteral\":[],\"LogicalExpression\":[\"left\",\"right\"],\"MemberExpression\":[\"object\",\"property\"],\"NewExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"Program\":[\"directives\",\"body\"],\"ObjectExpression\":[\"properties\"],\"ObjectMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectProperty\":[\"key\",\"value\",\"decorators\"],\"RestElement\":[\"argument\",\"typeAnnotation\"],\"ReturnStatement\":[\"argument\"],\"SequenceExpression\":[\"expressions\"],\"SwitchCase\":[\"test\",\"consequent\"],\"SwitchStatement\":[\"discriminant\",\"cases\"],\"ThisExpression\":[],\"ThrowStatement\":[\"argument\"],\"TryStatement\":[\"block\",\"handler\",\"finalizer\"],\"UnaryExpression\":[\"argument\"],\"UpdateExpression\":[\"argument\"],\"VariableDeclaration\":[\"declarations\"],\"VariableDeclarator\":[\"id\",\"init\"],\"WhileStatement\":[\"test\",\"body\"],\"WithStatement\":[\"object\",\"body\"],\"AssignmentPattern\":[\"left\",\"right\"],\"ArrayPattern\":[\"elements\",\"typeAnnotation\"],\"ArrowFunctionExpression\":[\"params\",\"body\",\"returnType\",\"typeParameters\"],\"ClassBody\":[\"body\"],\"ClassDeclaration\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ClassExpression\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ExportAllDeclaration\":[\"source\"],\"ExportDefaultDeclaration\":[\"declaration\"],\"ExportNamedDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"ExportSpecifier\":[\"local\",\"exported\"],\"ForOfStatement\":[\"left\",\"right\",\"body\"],\"ImportDeclaration\":[\"specifiers\",\"source\"],\"ImportDefaultSpecifier\":[\"local\"],\"ImportNamespaceSpecifier\":[\"local\"],\"ImportSpecifier\":[\"local\",\"imported\"],\"MetaProperty\":[\"meta\",\"property\"],\"ClassMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectPattern\":[\"properties\",\"typeAnnotation\"],\"SpreadElement\":[\"argument\"],\"Super\":[],\"TaggedTemplateExpression\":[\"tag\",\"quasi\"],\"TemplateElement\":[],\"TemplateLiteral\":[\"quasis\",\"expressions\"],\"YieldExpression\":[\"argument\"],\"AnyTypeAnnotation\":[],\"ArrayTypeAnnotation\":[\"elementType\"],\"BooleanTypeAnnotation\":[],\"BooleanLiteralTypeAnnotation\":[],\"NullLiteralTypeAnnotation\":[],\"ClassImplements\":[\"id\",\"typeParameters\"],\"DeclareClass\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareFunction\":[\"id\"],\"DeclareInterface\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareModule\":[\"id\",\"body\"],\"DeclareModuleExports\":[\"typeAnnotation\"],\"DeclareTypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"DeclareOpaqueType\":[\"id\",\"typeParameters\",\"supertype\"],\"DeclareVariable\":[\"id\"],\"DeclareExportDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"DeclareExportAllDeclaration\":[\"source\"],\"DeclaredPredicate\":[\"value\"],\"ExistsTypeAnnotation\":[],\"FunctionTypeAnnotation\":[\"typeParameters\",\"params\",\"rest\",\"returnType\"],\"FunctionTypeParam\":[\"name\",\"typeAnnotation\"],\"GenericTypeAnnotation\":[\"id\",\"typeParameters\"],\"InferredPredicate\":[],\"InterfaceExtends\":[\"id\",\"typeParameters\"],\"InterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"InterfaceTypeAnnotation\":[\"extends\",\"body\"],\"IntersectionTypeAnnotation\":[\"types\"],\"MixedTypeAnnotation\":[],\"EmptyTypeAnnotation\":[],\"NullableTypeAnnotation\":[\"typeAnnotation\"],\"NumberLiteralTypeAnnotation\":[],\"NumberTypeAnnotation\":[],\"ObjectTypeAnnotation\":[\"properties\",\"indexers\",\"callProperties\",\"internalSlots\"],\"ObjectTypeInternalSlot\":[\"id\",\"value\",\"optional\",\"static\",\"method\"],\"ObjectTypeCallProperty\":[\"value\"],\"ObjectTypeIndexer\":[\"id\",\"key\",\"value\",\"variance\"],\"ObjectTypeProperty\":[\"key\",\"value\",\"variance\"],\"ObjectTypeSpreadProperty\":[\"argument\"],\"OpaqueType\":[\"id\",\"typeParameters\",\"supertype\",\"impltype\"],\"QualifiedTypeIdentifier\":[\"id\",\"qualification\"],\"StringLiteralTypeAnnotation\":[],\"StringTypeAnnotation\":[],\"ThisTypeAnnotation\":[],\"TupleTypeAnnotation\":[\"types\"],\"TypeofTypeAnnotation\":[\"argument\"],\"TypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"TypeAnnotation\":[\"typeAnnotation\"],\"TypeCastExpression\":[\"expression\",\"typeAnnotation\"],\"TypeParameter\":[\"bound\",\"default\",\"variance\"],\"TypeParameterDeclaration\":[\"params\"],\"TypeParameterInstantiation\":[\"params\"],\"UnionTypeAnnotation\":[\"types\"],\"Variance\":[],\"VoidTypeAnnotation\":[],\"JSXAttribute\":[\"name\",\"value\"],\"JSXClosingElement\":[\"name\"],\"JSXElement\":[\"openingElement\",\"children\",\"closingElement\"],\"JSXEmptyExpression\":[],\"JSXExpressionContainer\":[\"expression\"],\"JSXSpreadChild\":[\"expression\"],\"JSXIdentifier\":[],\"JSXMemberExpression\":[\"object\",\"property\"],\"JSXNamespacedName\":[\"namespace\",\"name\"],\"JSXOpeningElement\":[\"name\",\"attributes\"],\"JSXSpreadAttribute\":[\"argument\"],\"JSXText\":[],\"JSXFragment\":[\"openingFragment\",\"children\",\"closingFragment\"],\"JSXOpeningFragment\":[],\"JSXClosingFragment\":[],\"Noop\":[],\"ParenthesizedExpression\":[\"expression\"],\"AwaitExpression\":[\"argument\"],\"BindExpression\":[\"object\",\"callee\"],\"ClassProperty\":[\"key\",\"value\",\"typeAnnotation\",\"decorators\"],\"OptionalMemberExpression\":[\"object\",\"property\"],\"OptionalCallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"ClassPrivateProperty\":[\"key\",\"value\"],\"Import\":[],\"Decorator\":[\"expression\"],\"DoExpression\":[\"body\"],\"ExportDefaultSpecifier\":[\"exported\"],\"ExportNamespaceSpecifier\":[\"exported\"],\"PrivateName\":[\"id\"],\"BigIntLiteral\":[],\"TSParameterProperty\":[\"parameter\"],\"TSDeclareFunction\":[\"id\",\"typeParameters\",\"params\",\"returnType\"],\"TSDeclareMethod\":[\"decorators\",\"key\",\"typeParameters\",\"params\",\"returnType\"],\"TSQualifiedName\":[\"left\",\"right\"],\"TSCallSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSConstructSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSPropertySignature\":[\"key\",\"typeAnnotation\",\"initializer\"],\"TSMethodSignature\":[\"key\",\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSIndexSignature\":[\"parameters\",\"typeAnnotation\"],\"TSAnyKeyword\":[],\"TSNumberKeyword\":[],\"TSObjectKeyword\":[],\"TSBooleanKeyword\":[],\"TSStringKeyword\":[],\"TSSymbolKeyword\":[],\"TSVoidKeyword\":[],\"TSUndefinedKeyword\":[],\"TSNullKeyword\":[],\"TSNeverKeyword\":[],\"TSThisType\":[],\"TSFunctionType\":[\"typeParameters\",\"typeAnnotation\"],\"TSConstructorType\":[\"typeParameters\",\"typeAnnotation\"],\"TSTypeReference\":[\"typeName\",\"typeParameters\"],\"TSTypePredicate\":[\"parameterName\",\"typeAnnotation\"],\"TSTypeQuery\":[\"exprName\"],\"TSTypeLiteral\":[\"members\"],\"TSArrayType\":[\"elementType\"],\"TSTupleType\":[\"elementTypes\"],\"TSUnionType\":[\"types\"],\"TSIntersectionType\":[\"types\"],\"TSConditionalType\":[\"checkType\",\"extendsType\",\"trueType\",\"falseType\"],\"TSInferType\":[\"typeParameter\"],\"TSParenthesizedType\":[\"typeAnnotation\"],\"TSTypeOperator\":[\"typeAnnotation\"],\"TSIndexedAccessType\":[\"objectType\",\"indexType\"],\"TSMappedType\":[\"typeParameter\",\"typeAnnotation\"],\"TSLiteralType\":[\"literal\"],\"TSExpressionWithTypeArguments\":[\"expression\",\"typeParameters\"],\"TSInterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"body\"],\"TSInterfaceBody\":[\"body\"],\"TSTypeAliasDeclaration\":[\"id\",\"typeParameters\",\"typeAnnotation\"],\"TSAsExpression\":[\"expression\",\"typeAnnotation\"],\"TSTypeAssertion\":[\"typeAnnotation\",\"expression\"],\"TSEnumDeclaration\":[\"id\",\"members\"],\"TSEnumMember\":[\"id\",\"initializer\"],\"TSModuleDeclaration\":[\"id\",\"body\"],\"TSModuleBlock\":[\"body\"],\"TSImportEqualsDeclaration\":[\"id\",\"moduleReference\"],\"TSExternalModuleReference\":[\"expression\"],\"TSNonNullExpression\":[\"expression\"],\"TSExportAssignment\":[\"expression\"],\"TSNamespaceExportDeclaration\":[\"id\"],\"TSTypeAnnotation\":[\"typeAnnotation\"],\"TSTypeParameterInstantiation\":[\"params\"],\"TSTypeParameterDeclaration\":[\"params\"],\"TSTypeParameter\":[\"constraint\",\"default\"]}",
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

assert(_rec._expr(_rec._capt([_rec._capt(foo, "arguments/0/elements/0"), _rec._capt(bar, "arguments/0/elements/1")], "arguments/0"), {
  content: "assert([foo, bar])",
  filepath: "test/fixtures/ArrayExpression/fixture.js",
  line: 3,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"ArrayExpression\",\"elements\":[{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[8,11]},{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[13,16]}],\"range\":[7,17]}],\"range\":[0,18]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"[\"},\"range\":[7,8]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[8,11]},{\"type\":{\"label\":\",\"},\"range\":[11,12]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[13,16]},{\"type\":{\"label\":\"]\"},\"range\":[16,17]},{\"type\":{\"label\":\")\"},\"range\":[17,18]}]",
  visitorKeys: _powerAssertVisitorKeys
}));
assert(_rec2._expr(_rec2._capt(_rec2._capt(_typeof(_rec2._capt([_rec2._capt([_rec2._capt(_rec2._capt(foo, "arguments/0/left/argument/elements/0/elements/0/object").bar, "arguments/0/left/argument/elements/0/elements/0"), _rec2._capt(baz(_rec2._capt(moo, "arguments/0/left/argument/elements/0/elements/1/arguments/0")), "arguments/0/left/argument/elements/0/elements/1")], "arguments/0/left/argument/elements/0"), _rec2._capt(+_rec2._capt(fourStr, "arguments/0/left/argument/elements/1/argument"), "arguments/0/left/argument/elements/1")], "arguments/0/left/argument")), "arguments/0/left") === 'number', "arguments/0"), {
  content: "assert(typeof [[foo.bar, baz(moo)], +fourStr] === 'number')",
  filepath: "test/fixtures/ArrayExpression/fixture.js",
  line: 5,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"===\",\"left\":{\"type\":\"UnaryExpression\",\"operator\":\"typeof\",\"argument\":{\"type\":\"ArrayExpression\",\"elements\":[{\"type\":\"ArrayExpression\",\"elements\":[{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[16,19]},\"property\":{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[20,23]},\"computed\":false,\"range\":[16,23]},{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"baz\",\"range\":[25,28]},\"arguments\":[{\"type\":\"Identifier\",\"name\":\"moo\",\"range\":[29,32]}],\"range\":[25,33]}],\"range\":[15,34]},{\"type\":\"UnaryExpression\",\"operator\":\"+\",\"argument\":{\"type\":\"Identifier\",\"name\":\"fourStr\",\"range\":[37,44]},\"prefix\":true,\"range\":[36,44]}],\"range\":[14,45]},\"prefix\":true,\"range\":[7,45]},\"right\":{\"type\":\"StringLiteral\",\"value\":\"number\",\"range\":[50,58]},\"range\":[7,58]}],\"range\":[0,59]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"typeof\"},\"value\":\"typeof\",\"range\":[7,13]},{\"type\":{\"label\":\"[\"},\"range\":[14,15]},{\"type\":{\"label\":\"[\"},\"range\":[15,16]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[16,19]},{\"type\":{\"label\":\".\"},\"range\":[19,20]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[20,23]},{\"type\":{\"label\":\",\"},\"range\":[23,24]},{\"type\":{\"label\":\"name\"},\"value\":\"baz\",\"range\":[25,28]},{\"type\":{\"label\":\"(\"},\"range\":[28,29]},{\"type\":{\"label\":\"name\"},\"value\":\"moo\",\"range\":[29,32]},{\"type\":{\"label\":\")\"},\"range\":[32,33]},{\"type\":{\"label\":\"]\"},\"range\":[33,34]},{\"type\":{\"label\":\",\"},\"range\":[34,35]},{\"type\":{\"label\":\"+/-\"},\"value\":\"+\",\"range\":[36,37]},{\"type\":{\"label\":\"name\"},\"value\":\"fourStr\",\"range\":[37,44]},{\"type\":{\"label\":\"]\"},\"range\":[44,45]},{\"type\":{\"label\":\"==/!=\"},\"value\":\"===\",\"range\":[46,49]},{\"type\":{\"label\":\"string\"},\"value\":\"number\",\"range\":[50,58]},{\"type\":{\"label\":\")\"},\"range\":[58,59]}]",
  visitorKeys: _powerAssertVisitorKeys
}));
assert.notDeepEqual(_rec3._expr(_rec3._capt([_rec3._capt(foo, "arguments/0/elements/0"), _rec3._capt(bar, "arguments/0/elements/1")], "arguments/0"), {
  content: "assert.notDeepEqual([foo, bar], [hoge, fuga, piyo])",
  filepath: "test/fixtures/ArrayExpression/fixture.js",
  line: 7,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"property\":{\"type\":\"Identifier\",\"name\":\"notDeepEqual\",\"range\":[7,19]},\"computed\":false,\"range\":[0,19]},\"arguments\":[{\"type\":\"ArrayExpression\",\"elements\":[{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[21,24]},{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[26,29]}],\"range\":[20,30]},{\"type\":\"ArrayExpression\",\"elements\":[{\"type\":\"Identifier\",\"name\":\"hoge\",\"range\":[33,37]},{\"type\":\"Identifier\",\"name\":\"fuga\",\"range\":[39,43]},{\"type\":\"Identifier\",\"name\":\"piyo\",\"range\":[45,49]}],\"range\":[32,50]}],\"range\":[0,51]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\".\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"notDeepEqual\",\"range\":[7,19]},{\"type\":{\"label\":\"(\"},\"range\":[19,20]},{\"type\":{\"label\":\"[\"},\"range\":[20,21]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[21,24]},{\"type\":{\"label\":\",\"},\"range\":[24,25]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[26,29]},{\"type\":{\"label\":\"]\"},\"range\":[29,30]},{\"type\":{\"label\":\",\"},\"range\":[30,31]},{\"type\":{\"label\":\"[\"},\"range\":[32,33]},{\"type\":{\"label\":\"name\"},\"value\":\"hoge\",\"range\":[33,37]},{\"type\":{\"label\":\",\"},\"range\":[37,38]},{\"type\":{\"label\":\"name\"},\"value\":\"fuga\",\"range\":[39,43]},{\"type\":{\"label\":\",\"},\"range\":[43,44]},{\"type\":{\"label\":\"name\"},\"value\":\"piyo\",\"range\":[45,49]},{\"type\":{\"label\":\"]\"},\"range\":[49,50]},{\"type\":{\"label\":\")\"},\"range\":[50,51]}]",
  visitorKeys: _powerAssertVisitorKeys
}), _rec4._expr(_rec4._capt([_rec4._capt(hoge, "arguments/1/elements/0"), _rec4._capt(fuga, "arguments/1/elements/1"), _rec4._capt(piyo, "arguments/1/elements/2")], "arguments/1"), {
  content: "assert.notDeepEqual([foo, bar], [hoge, fuga, piyo])",
  filepath: "test/fixtures/ArrayExpression/fixture.js",
  line: 7,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"property\":{\"type\":\"Identifier\",\"name\":\"notDeepEqual\",\"range\":[7,19]},\"computed\":false,\"range\":[0,19]},\"arguments\":[{\"type\":\"ArrayExpression\",\"elements\":[{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[21,24]},{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[26,29]}],\"range\":[20,30]},{\"type\":\"ArrayExpression\",\"elements\":[{\"type\":\"Identifier\",\"name\":\"hoge\",\"range\":[33,37]},{\"type\":\"Identifier\",\"name\":\"fuga\",\"range\":[39,43]},{\"type\":\"Identifier\",\"name\":\"piyo\",\"range\":[45,49]}],\"range\":[32,50]}],\"range\":[0,51]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\".\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"notDeepEqual\",\"range\":[7,19]},{\"type\":{\"label\":\"(\"},\"range\":[19,20]},{\"type\":{\"label\":\"[\"},\"range\":[20,21]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[21,24]},{\"type\":{\"label\":\",\"},\"range\":[24,25]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[26,29]},{\"type\":{\"label\":\"]\"},\"range\":[29,30]},{\"type\":{\"label\":\",\"},\"range\":[30,31]},{\"type\":{\"label\":\"[\"},\"range\":[32,33]},{\"type\":{\"label\":\"name\"},\"value\":\"hoge\",\"range\":[33,37]},{\"type\":{\"label\":\",\"},\"range\":[37,38]},{\"type\":{\"label\":\"name\"},\"value\":\"fuga\",\"range\":[39,43]},{\"type\":{\"label\":\",\"},\"range\":[43,44]},{\"type\":{\"label\":\"name\"},\"value\":\"piyo\",\"range\":[45,49]},{\"type\":{\"label\":\"]\"},\"range\":[49,50]},{\"type\":{\"label\":\")\"},\"range\":[50,51]}]",
  visitorKeys: _powerAssertVisitorKeys
}));