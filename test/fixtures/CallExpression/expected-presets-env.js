'use strict';

var _powerAssertVisitorKeys = "{\"ArrayExpression\":[\"elements\"],\"AssignmentExpression\":[\"left\",\"right\"],\"BinaryExpression\":[\"left\",\"right\"],\"InterpreterDirective\":[],\"Directive\":[\"value\"],\"DirectiveLiteral\":[],\"BlockStatement\":[\"directives\",\"body\"],\"BreakStatement\":[\"label\"],\"CallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"CatchClause\":[\"param\",\"body\"],\"ConditionalExpression\":[\"test\",\"consequent\",\"alternate\"],\"ContinueStatement\":[\"label\"],\"DebuggerStatement\":[],\"DoWhileStatement\":[\"test\",\"body\"],\"EmptyStatement\":[],\"ExpressionStatement\":[\"expression\"],\"File\":[\"program\"],\"ForInStatement\":[\"left\",\"right\",\"body\"],\"ForStatement\":[\"init\",\"test\",\"update\",\"body\"],\"FunctionDeclaration\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"FunctionExpression\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"Identifier\":[\"typeAnnotation\"],\"IfStatement\":[\"test\",\"consequent\",\"alternate\"],\"LabeledStatement\":[\"label\",\"body\"],\"StringLiteral\":[],\"NumericLiteral\":[],\"NullLiteral\":[],\"BooleanLiteral\":[],\"RegExpLiteral\":[],\"LogicalExpression\":[\"left\",\"right\"],\"MemberExpression\":[\"object\",\"property\"],\"NewExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"Program\":[\"directives\",\"body\"],\"ObjectExpression\":[\"properties\"],\"ObjectMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectProperty\":[\"key\",\"value\",\"decorators\"],\"RestElement\":[\"argument\",\"typeAnnotation\"],\"ReturnStatement\":[\"argument\"],\"SequenceExpression\":[\"expressions\"],\"SwitchCase\":[\"test\",\"consequent\"],\"SwitchStatement\":[\"discriminant\",\"cases\"],\"ThisExpression\":[],\"ThrowStatement\":[\"argument\"],\"TryStatement\":[\"block\",\"handler\",\"finalizer\"],\"UnaryExpression\":[\"argument\"],\"UpdateExpression\":[\"argument\"],\"VariableDeclaration\":[\"declarations\"],\"VariableDeclarator\":[\"id\",\"init\"],\"WhileStatement\":[\"test\",\"body\"],\"WithStatement\":[\"object\",\"body\"],\"AssignmentPattern\":[\"left\",\"right\"],\"ArrayPattern\":[\"elements\",\"typeAnnotation\"],\"ArrowFunctionExpression\":[\"params\",\"body\",\"returnType\",\"typeParameters\"],\"ClassBody\":[\"body\"],\"ClassDeclaration\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ClassExpression\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ExportAllDeclaration\":[\"source\"],\"ExportDefaultDeclaration\":[\"declaration\"],\"ExportNamedDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"ExportSpecifier\":[\"local\",\"exported\"],\"ForOfStatement\":[\"left\",\"right\",\"body\"],\"ImportDeclaration\":[\"specifiers\",\"source\"],\"ImportDefaultSpecifier\":[\"local\"],\"ImportNamespaceSpecifier\":[\"local\"],\"ImportSpecifier\":[\"local\",\"imported\"],\"MetaProperty\":[\"meta\",\"property\"],\"ClassMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectPattern\":[\"properties\",\"typeAnnotation\"],\"SpreadElement\":[\"argument\"],\"Super\":[],\"TaggedTemplateExpression\":[\"tag\",\"quasi\"],\"TemplateElement\":[],\"TemplateLiteral\":[\"quasis\",\"expressions\"],\"YieldExpression\":[\"argument\"],\"AnyTypeAnnotation\":[],\"ArrayTypeAnnotation\":[\"elementType\"],\"BooleanTypeAnnotation\":[],\"BooleanLiteralTypeAnnotation\":[],\"NullLiteralTypeAnnotation\":[],\"ClassImplements\":[\"id\",\"typeParameters\"],\"DeclareClass\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareFunction\":[\"id\"],\"DeclareInterface\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareModule\":[\"id\",\"body\"],\"DeclareModuleExports\":[\"typeAnnotation\"],\"DeclareTypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"DeclareOpaqueType\":[\"id\",\"typeParameters\",\"supertype\"],\"DeclareVariable\":[\"id\"],\"DeclareExportDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"DeclareExportAllDeclaration\":[\"source\"],\"DeclaredPredicate\":[\"value\"],\"ExistsTypeAnnotation\":[],\"FunctionTypeAnnotation\":[\"typeParameters\",\"params\",\"rest\",\"returnType\"],\"FunctionTypeParam\":[\"name\",\"typeAnnotation\"],\"GenericTypeAnnotation\":[\"id\",\"typeParameters\"],\"InferredPredicate\":[],\"InterfaceExtends\":[\"id\",\"typeParameters\"],\"InterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"InterfaceTypeAnnotation\":[\"extends\",\"body\"],\"IntersectionTypeAnnotation\":[\"types\"],\"MixedTypeAnnotation\":[],\"EmptyTypeAnnotation\":[],\"NullableTypeAnnotation\":[\"typeAnnotation\"],\"NumberLiteralTypeAnnotation\":[],\"NumberTypeAnnotation\":[],\"ObjectTypeAnnotation\":[\"properties\",\"indexers\",\"callProperties\",\"internalSlots\"],\"ObjectTypeInternalSlot\":[\"id\",\"value\",\"optional\",\"static\",\"method\"],\"ObjectTypeCallProperty\":[\"value\"],\"ObjectTypeIndexer\":[\"id\",\"key\",\"value\",\"variance\"],\"ObjectTypeProperty\":[\"key\",\"value\",\"variance\"],\"ObjectTypeSpreadProperty\":[\"argument\"],\"OpaqueType\":[\"id\",\"typeParameters\",\"supertype\",\"impltype\"],\"QualifiedTypeIdentifier\":[\"id\",\"qualification\"],\"StringLiteralTypeAnnotation\":[],\"StringTypeAnnotation\":[],\"ThisTypeAnnotation\":[],\"TupleTypeAnnotation\":[\"types\"],\"TypeofTypeAnnotation\":[\"argument\"],\"TypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"TypeAnnotation\":[\"typeAnnotation\"],\"TypeCastExpression\":[\"expression\",\"typeAnnotation\"],\"TypeParameter\":[\"bound\",\"default\",\"variance\"],\"TypeParameterDeclaration\":[\"params\"],\"TypeParameterInstantiation\":[\"params\"],\"UnionTypeAnnotation\":[\"types\"],\"Variance\":[],\"VoidTypeAnnotation\":[],\"JSXAttribute\":[\"name\",\"value\"],\"JSXClosingElement\":[\"name\"],\"JSXElement\":[\"openingElement\",\"children\",\"closingElement\"],\"JSXEmptyExpression\":[],\"JSXExpressionContainer\":[\"expression\"],\"JSXSpreadChild\":[\"expression\"],\"JSXIdentifier\":[],\"JSXMemberExpression\":[\"object\",\"property\"],\"JSXNamespacedName\":[\"namespace\",\"name\"],\"JSXOpeningElement\":[\"name\",\"attributes\"],\"JSXSpreadAttribute\":[\"argument\"],\"JSXText\":[],\"JSXFragment\":[\"openingFragment\",\"children\",\"closingFragment\"],\"JSXOpeningFragment\":[],\"JSXClosingFragment\":[],\"Noop\":[],\"ParenthesizedExpression\":[\"expression\"],\"AwaitExpression\":[\"argument\"],\"BindExpression\":[\"object\",\"callee\"],\"ClassProperty\":[\"key\",\"value\",\"typeAnnotation\",\"decorators\"],\"OptionalMemberExpression\":[\"object\",\"property\"],\"PipelineTopicExpression\":[\"expression\"],\"PipelineBareFunction\":[\"callee\"],\"PipelinePrimaryTopicReference\":[],\"OptionalCallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"ClassPrivateProperty\":[\"key\",\"value\"],\"ClassPrivateMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"Import\":[],\"Decorator\":[\"expression\"],\"DoExpression\":[\"body\"],\"ExportDefaultSpecifier\":[\"exported\"],\"ExportNamespaceSpecifier\":[\"exported\"],\"PrivateName\":[\"id\"],\"BigIntLiteral\":[],\"TSParameterProperty\":[\"parameter\"],\"TSDeclareFunction\":[\"id\",\"typeParameters\",\"params\",\"returnType\"],\"TSDeclareMethod\":[\"decorators\",\"key\",\"typeParameters\",\"params\",\"returnType\"],\"TSQualifiedName\":[\"left\",\"right\"],\"TSCallSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSConstructSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSPropertySignature\":[\"key\",\"typeAnnotation\",\"initializer\"],\"TSMethodSignature\":[\"key\",\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSIndexSignature\":[\"parameters\",\"typeAnnotation\"],\"TSAnyKeyword\":[],\"TSUnknownKeyword\":[],\"TSNumberKeyword\":[],\"TSObjectKeyword\":[],\"TSBooleanKeyword\":[],\"TSStringKeyword\":[],\"TSSymbolKeyword\":[],\"TSVoidKeyword\":[],\"TSUndefinedKeyword\":[],\"TSNullKeyword\":[],\"TSNeverKeyword\":[],\"TSThisType\":[],\"TSFunctionType\":[\"typeParameters\",\"typeAnnotation\"],\"TSConstructorType\":[\"typeParameters\",\"typeAnnotation\"],\"TSTypeReference\":[\"typeName\",\"typeParameters\"],\"TSTypePredicate\":[\"parameterName\",\"typeAnnotation\"],\"TSTypeQuery\":[\"exprName\"],\"TSTypeLiteral\":[\"members\"],\"TSArrayType\":[\"elementType\"],\"TSTupleType\":[\"elementTypes\"],\"TSOptionalType\":[\"typeAnnotation\"],\"TSRestType\":[\"typeAnnotation\"],\"TSUnionType\":[\"types\"],\"TSIntersectionType\":[\"types\"],\"TSConditionalType\":[\"checkType\",\"extendsType\",\"trueType\",\"falseType\"],\"TSInferType\":[\"typeParameter\"],\"TSParenthesizedType\":[\"typeAnnotation\"],\"TSTypeOperator\":[\"typeAnnotation\"],\"TSIndexedAccessType\":[\"objectType\",\"indexType\"],\"TSMappedType\":[\"typeParameter\",\"typeAnnotation\"],\"TSLiteralType\":[\"literal\"],\"TSExpressionWithTypeArguments\":[\"expression\",\"typeParameters\"],\"TSInterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"body\"],\"TSInterfaceBody\":[\"body\"],\"TSTypeAliasDeclaration\":[\"id\",\"typeParameters\",\"typeAnnotation\"],\"TSAsExpression\":[\"expression\",\"typeAnnotation\"],\"TSTypeAssertion\":[\"typeAnnotation\",\"expression\"],\"TSEnumDeclaration\":[\"id\",\"members\"],\"TSEnumMember\":[\"id\",\"initializer\"],\"TSModuleDeclaration\":[\"id\",\"body\"],\"TSModuleBlock\":[\"body\"],\"TSImportEqualsDeclaration\":[\"id\",\"moduleReference\"],\"TSExternalModuleReference\":[\"expression\"],\"TSNonNullExpression\":[\"expression\"],\"TSExportAssignment\":[\"expression\"],\"TSNamespaceExportDeclaration\":[\"id\"],\"TSTypeAnnotation\":[\"typeAnnotation\"],\"TSTypeParameterInstantiation\":[\"params\"],\"TSTypeParameterDeclaration\":[\"params\"],\"TSTypeParameter\":[\"constraint\",\"default\"]}",
    _powerAssertConfig = ["assert(value, [message])", "assert.ok(value, [message])", "assert.equal(actual, expected, [message])", "assert.notEqual(actual, expected, [message])", "assert.strictEqual(actual, expected, [message])", "assert.notStrictEqual(actual, expected, [message])", { pattern: "assert.deepEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.notDeepEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.deepStrictEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.notDeepStrictEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.throws(fn, [error], [message])", args: [{ name: "fn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.doesNotThrow(fn, [error], [message])", args: [{ name: "fn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.rejects(asyncFn, [error], [message])", args: [{ name: "asyncFn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.doesNotReject(asyncFn, [error], [message])", args: [{ name: "asyncFn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }],
    _am = {
  content: "assert(func())",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 3,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"func\",\"range\":[7,11]},\"arguments\":[],\"range\":[7,13]}],\"range\":[0,14]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"func\",\"range\":[7,11]},{\"type\":{\"label\":\"(\"},\"range\":[11,12]},{\"type\":{\"label\":\")\"},\"range\":[12,13]},{\"type\":{\"label\":\")\"},\"range\":[13,14]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ArgumentRecorder = function () { function ArgumentRecorder(callee, am, ag) { this._callee = callee; this._metadata = am; this._argDef = ag; this._logs = []; this._recorded = null; this._value = null; this._isBlock = false; if (am.config) { this.pattern = am.config.pattern; var argconf = am.config.args[ag.index]; this._isBlock = !!argconf.block; } } ArgumentRecorder.prototype.metadata = function metadata() { return this._metadata; }; ArgumentRecorder.prototype.code = function code() { return this._argDef.code; }; ArgumentRecorder.prototype.value = function value() { return this._value; }; ArgumentRecorder.prototype._tap = function _tap(value, espath) { this._logs.push({ value: wrap(value), espath: espath }); return value; }; ArgumentRecorder.prototype._rec = function _rec(value, espath) { var empowered = this._callee && this._callee._empowered; try { if (!empowered) return value; var log = { value: wrap(value), espath: espath }; this._logs.push(log); if (this._isBlock && empowered && typeof value === 'function') { value = new Proxy(value, { apply: function apply(target, thisArg, argumentsList) { var ret; try { ret = target.apply(thisArg, argumentsList); log.value = wrap(ret); } catch (e) { log.value = e; throw e; } return ret; } }); } this._recorded = { value: value, logs: [].concat(this._logs) }; return this; } finally { this._value = value; this._logs = []; } }; ArgumentRecorder.prototype.eject = function eject() { var result = this._recorded; this._recorded = null; this._value = null; return result; }; function isPromiseLike(o) { return o !== null && _typeof(o) === 'object' && typeof o.then === 'function' && typeof o.catch === 'function'; } function $Promise$(prms) { this.status = 'pending'; prms.then(mark(this, 'resolved'), mark(this, 'rejected')); } function mark(_this, s) { return function () { var args = Array.prototype.slice.apply(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; } function wrap(v) { return isPromiseLike(v) ? new $Promise$(v) : v; } return ArgumentRecorder; }(),
    _ag = new _ArgumentRecorder(assert, _am, {
  espath: "arguments/0",
  code: "func()",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _AssertionMessage = function () { function AssertionMessage(argRecs, metadata, message) { this._argRecs = argRecs; this._metadata = metadata; this._message = message; } AssertionMessage.prototype.value = function value() { if (this._message && typeof this._message.value === 'function') { return this._message.value(); } else { return this._message; } }; AssertionMessage.prototype.eject = function eject() { if (this._message && typeof this._message.eject === 'function') { return this._message.eject(); } else { return { value: this.value(), logs: [] }; } }; AssertionMessage.prototype.toString = function toString() { var message = this._message ? this._message : ''; message += '\n----------'; message += '\n  code: ' + this._metadata.content; message += '\n  line: ' + this._metadata.filepath + ':' + this._metadata.line; var argRec; for (var i = 0; i < this._argRecs.length; i += 1) { argRec = this._argRecs[i]; message += '\n  arg' + i + ': '; message += '\n    code: ' + argRec.code(); message += '\n    value: ' + argRec.value(); message += '\n    type: ' + _typeof(argRec.value()); } message += '\n'; message += '[NOTICE] configure power-assert for more verbose report. see: https://github.com/power-assert-js/power-assert'; message += '\n----------'; return message; }; return AssertionMessage; }(),
    _am2 = {
  content: "assert(obj.age())",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 5,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"obj\",\"range\":[7,10]},\"property\":{\"type\":\"Identifier\",\"name\":\"age\",\"range\":[11,14]},\"computed\":false,\"range\":[7,14]},\"arguments\":[],\"range\":[7,16]}],\"range\":[0,17]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"obj\",\"range\":[7,10]},{\"type\":{\"label\":\".\"},\"range\":[10,11]},{\"type\":{\"label\":\"name\"},\"value\":\"age\",\"range\":[11,14]},{\"type\":{\"label\":\"(\"},\"range\":[14,15]},{\"type\":{\"label\":\")\"},\"range\":[15,16]},{\"type\":{\"label\":\")\"},\"range\":[16,17]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ag2 = new _ArgumentRecorder(assert, _am2, {
  espath: "arguments/0",
  code: "obj.age()",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am3 = {
  content: "assert(isFalsy(positiveInt))",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 7,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"isFalsy\",\"range\":[7,14]},\"arguments\":[{\"type\":\"Identifier\",\"name\":\"positiveInt\",\"range\":[15,26]}],\"range\":[7,27]}],\"range\":[0,28]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"isFalsy\",\"range\":[7,14]},{\"type\":{\"label\":\"(\"},\"range\":[14,15]},{\"type\":{\"label\":\"name\"},\"value\":\"positiveInt\",\"range\":[15,26]},{\"type\":{\"label\":\")\"},\"range\":[26,27]},{\"type\":{\"label\":\")\"},\"range\":[27,28]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ag3 = new _ArgumentRecorder(assert, _am3, {
  espath: "arguments/0",
  code: "isFalsy(positiveInt)",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am4 = {
  content: "assert(foo[propName]())",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 9,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[7,10]},\"property\":{\"type\":\"Identifier\",\"name\":\"propName\",\"range\":[11,19]},\"computed\":true,\"range\":[7,20]},\"arguments\":[],\"range\":[7,22]}],\"range\":[0,23]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[7,10]},{\"type\":{\"label\":\"[\"},\"range\":[10,11]},{\"type\":{\"label\":\"name\"},\"value\":\"propName\",\"range\":[11,19]},{\"type\":{\"label\":\"]\"},\"range\":[19,20]},{\"type\":{\"label\":\"(\"},\"range\":[20,21]},{\"type\":{\"label\":\")\"},\"range\":[21,22]},{\"type\":{\"label\":\")\"},\"range\":[22,23]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ag4 = new _ArgumentRecorder(assert, _am4, {
  espath: "arguments/0",
  code: "foo[propName]()",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am5 = {
  content: "assert(foo[hoge[fuga[piyo]]]())",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 11,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[7,10]},\"property\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"hoge\",\"range\":[11,15]},\"property\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"fuga\",\"range\":[16,20]},\"property\":{\"type\":\"Identifier\",\"name\":\"piyo\",\"range\":[21,25]},\"computed\":true,\"range\":[16,26]},\"computed\":true,\"range\":[11,27]},\"computed\":true,\"range\":[7,28]},\"arguments\":[],\"range\":[7,30]}],\"range\":[0,31]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[7,10]},{\"type\":{\"label\":\"[\"},\"range\":[10,11]},{\"type\":{\"label\":\"name\"},\"value\":\"hoge\",\"range\":[11,15]},{\"type\":{\"label\":\"[\"},\"range\":[15,16]},{\"type\":{\"label\":\"name\"},\"value\":\"fuga\",\"range\":[16,20]},{\"type\":{\"label\":\"[\"},\"range\":[20,21]},{\"type\":{\"label\":\"name\"},\"value\":\"piyo\",\"range\":[21,25]},{\"type\":{\"label\":\"]\"},\"range\":[25,26]},{\"type\":{\"label\":\"]\"},\"range\":[26,27]},{\"type\":{\"label\":\"]\"},\"range\":[27,28]},{\"type\":{\"label\":\"(\"},\"range\":[28,29]},{\"type\":{\"label\":\")\"},\"range\":[29,30]},{\"type\":{\"label\":\")\"},\"range\":[30,31]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ag5 = new _ArgumentRecorder(assert, _am5, {
  espath: "arguments/0",
  code: "foo[hoge[fuga[piyo]]]()",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am6 = {
  content: "assert(sum(one, two, three) === seven)",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 13,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"===\",\"left\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"sum\",\"range\":[7,10]},\"arguments\":[{\"type\":\"Identifier\",\"name\":\"one\",\"range\":[11,14]},{\"type\":\"Identifier\",\"name\":\"two\",\"range\":[16,19]},{\"type\":\"Identifier\",\"name\":\"three\",\"range\":[21,26]}],\"range\":[7,27]},\"right\":{\"type\":\"Identifier\",\"name\":\"seven\",\"range\":[32,37]},\"range\":[7,37]}],\"range\":[0,38]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"sum\",\"range\":[7,10]},{\"type\":{\"label\":\"(\"},\"range\":[10,11]},{\"type\":{\"label\":\"name\"},\"value\":\"one\",\"range\":[11,14]},{\"type\":{\"label\":\",\"},\"range\":[14,15]},{\"type\":{\"label\":\"name\"},\"value\":\"two\",\"range\":[16,19]},{\"type\":{\"label\":\",\"},\"range\":[19,20]},{\"type\":{\"label\":\"name\"},\"value\":\"three\",\"range\":[21,26]},{\"type\":{\"label\":\")\"},\"range\":[26,27]},{\"type\":{\"label\":\"==/!=\"},\"value\":\"===\",\"range\":[28,31]},{\"type\":{\"label\":\"name\"},\"value\":\"seven\",\"range\":[32,37]},{\"type\":{\"label\":\")\"},\"range\":[37,38]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ag6 = new _ArgumentRecorder(assert, _am6, {
  espath: "arguments/0",
  code: "sum(one, two, three) === seven",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am7 = {
  content: "assert(sum(sum(one, two), three) === sum(sum(two, three), seven))",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 15,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"===\",\"left\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"sum\",\"range\":[7,10]},\"arguments\":[{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"sum\",\"range\":[11,14]},\"arguments\":[{\"type\":\"Identifier\",\"name\":\"one\",\"range\":[15,18]},{\"type\":\"Identifier\",\"name\":\"two\",\"range\":[20,23]}],\"range\":[11,24]},{\"type\":\"Identifier\",\"name\":\"three\",\"range\":[26,31]}],\"range\":[7,32]},\"right\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"sum\",\"range\":[37,40]},\"arguments\":[{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"sum\",\"range\":[41,44]},\"arguments\":[{\"type\":\"Identifier\",\"name\":\"two\",\"range\":[45,48]},{\"type\":\"Identifier\",\"name\":\"three\",\"range\":[50,55]}],\"range\":[41,56]},{\"type\":\"Identifier\",\"name\":\"seven\",\"range\":[58,63]}],\"range\":[37,64]},\"range\":[7,64]}],\"range\":[0,65]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"sum\",\"range\":[7,10]},{\"type\":{\"label\":\"(\"},\"range\":[10,11]},{\"type\":{\"label\":\"name\"},\"value\":\"sum\",\"range\":[11,14]},{\"type\":{\"label\":\"(\"},\"range\":[14,15]},{\"type\":{\"label\":\"name\"},\"value\":\"one\",\"range\":[15,18]},{\"type\":{\"label\":\",\"},\"range\":[18,19]},{\"type\":{\"label\":\"name\"},\"value\":\"two\",\"range\":[20,23]},{\"type\":{\"label\":\")\"},\"range\":[23,24]},{\"type\":{\"label\":\",\"},\"range\":[24,25]},{\"type\":{\"label\":\"name\"},\"value\":\"three\",\"range\":[26,31]},{\"type\":{\"label\":\")\"},\"range\":[31,32]},{\"type\":{\"label\":\"==/!=\"},\"value\":\"===\",\"range\":[33,36]},{\"type\":{\"label\":\"name\"},\"value\":\"sum\",\"range\":[37,40]},{\"type\":{\"label\":\"(\"},\"range\":[40,41]},{\"type\":{\"label\":\"name\"},\"value\":\"sum\",\"range\":[41,44]},{\"type\":{\"label\":\"(\"},\"range\":[44,45]},{\"type\":{\"label\":\"name\"},\"value\":\"two\",\"range\":[45,48]},{\"type\":{\"label\":\",\"},\"range\":[48,49]},{\"type\":{\"label\":\"name\"},\"value\":\"three\",\"range\":[50,55]},{\"type\":{\"label\":\")\"},\"range\":[55,56]},{\"type\":{\"label\":\",\"},\"range\":[56,57]},{\"type\":{\"label\":\"name\"},\"value\":\"seven\",\"range\":[58,63]},{\"type\":{\"label\":\")\"},\"range\":[63,64]},{\"type\":{\"label\":\")\"},\"range\":[64,65]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ag7 = new _ArgumentRecorder(assert, _am7, {
  espath: "arguments/0",
  code: "sum(sum(one, two), three) === sum(sum(two, three), seven)",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am8 = {
  content: "assert(math.calc.sum(one, two, three) === seven)",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 17,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"===\",\"left\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"math\",\"range\":[7,11]},\"property\":{\"type\":\"Identifier\",\"name\":\"calc\",\"range\":[12,16]},\"computed\":false,\"range\":[7,16]},\"property\":{\"type\":\"Identifier\",\"name\":\"sum\",\"range\":[17,20]},\"computed\":false,\"range\":[7,20]},\"arguments\":[{\"type\":\"Identifier\",\"name\":\"one\",\"range\":[21,24]},{\"type\":\"Identifier\",\"name\":\"two\",\"range\":[26,29]},{\"type\":\"Identifier\",\"name\":\"three\",\"range\":[31,36]}],\"range\":[7,37]},\"right\":{\"type\":\"Identifier\",\"name\":\"seven\",\"range\":[42,47]},\"range\":[7,47]}],\"range\":[0,48]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"math\",\"range\":[7,11]},{\"type\":{\"label\":\".\"},\"range\":[11,12]},{\"type\":{\"label\":\"name\"},\"value\":\"calc\",\"range\":[12,16]},{\"type\":{\"label\":\".\"},\"range\":[16,17]},{\"type\":{\"label\":\"name\"},\"value\":\"sum\",\"range\":[17,20]},{\"type\":{\"label\":\"(\"},\"range\":[20,21]},{\"type\":{\"label\":\"name\"},\"value\":\"one\",\"range\":[21,24]},{\"type\":{\"label\":\",\"},\"range\":[24,25]},{\"type\":{\"label\":\"name\"},\"value\":\"two\",\"range\":[26,29]},{\"type\":{\"label\":\",\"},\"range\":[29,30]},{\"type\":{\"label\":\"name\"},\"value\":\"three\",\"range\":[31,36]},{\"type\":{\"label\":\")\"},\"range\":[36,37]},{\"type\":{\"label\":\"==/!=\"},\"value\":\"===\",\"range\":[38,41]},{\"type\":{\"label\":\"name\"},\"value\":\"seven\",\"range\":[42,47]},{\"type\":{\"label\":\")\"},\"range\":[47,48]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ag8 = new _ArgumentRecorder(assert, _am8, {
  espath: "arguments/0",
  code: "math.calc.sum(one, two, three) === seven",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am9 = {
  content: "assert(three * (seven * ten) === three)",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 19,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"===\",\"left\":{\"type\":\"BinaryExpression\",\"operator\":\"*\",\"left\":{\"type\":\"Identifier\",\"name\":\"three\",\"range\":[7,12]},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\"*\",\"left\":{\"type\":\"Identifier\",\"name\":\"seven\",\"range\":[16,21]},\"right\":{\"type\":\"Identifier\",\"name\":\"ten\",\"range\":[24,27]},\"range\":[16,27]},\"range\":[7,28]},\"right\":{\"type\":\"Identifier\",\"name\":\"three\",\"range\":[33,38]},\"range\":[7,38]}],\"range\":[0,39]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"three\",\"range\":[7,12]},{\"type\":{\"label\":\"*\"},\"value\":\"*\",\"range\":[13,14]},{\"type\":{\"label\":\"(\"},\"range\":[15,16]},{\"type\":{\"label\":\"name\"},\"value\":\"seven\",\"range\":[16,21]},{\"type\":{\"label\":\"*\"},\"value\":\"*\",\"range\":[22,23]},{\"type\":{\"label\":\"name\"},\"value\":\"ten\",\"range\":[24,27]},{\"type\":{\"label\":\")\"},\"range\":[27,28]},{\"type\":{\"label\":\"==/!=\"},\"value\":\"===\",\"range\":[29,32]},{\"type\":{\"label\":\"name\"},\"value\":\"three\",\"range\":[33,38]},{\"type\":{\"label\":\")\"},\"range\":[38,39]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ag9 = new _ArgumentRecorder(assert, _am9, {
  espath: "arguments/0",
  code: "three * (seven * ten) === three",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am10 = {
  content: "assert(!concat(fuga, piyo))",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 21,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"UnaryExpression\",\"operator\":\"!\",\"argument\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"concat\",\"range\":[8,14]},\"arguments\":[{\"type\":\"Identifier\",\"name\":\"fuga\",\"range\":[15,19]},{\"type\":\"Identifier\",\"name\":\"piyo\",\"range\":[21,25]}],\"range\":[8,26]},\"prefix\":true,\"range\":[7,26]}],\"range\":[0,27]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"!\"},\"value\":\"!\",\"range\":[7,8]},{\"type\":{\"label\":\"name\"},\"value\":\"concat\",\"range\":[8,14]},{\"type\":{\"label\":\"(\"},\"range\":[14,15]},{\"type\":{\"label\":\"name\"},\"value\":\"fuga\",\"range\":[15,19]},{\"type\":{\"label\":\",\"},\"range\":[19,20]},{\"type\":{\"label\":\"name\"},\"value\":\"piyo\",\"range\":[21,25]},{\"type\":{\"label\":\")\"},\"range\":[25,26]},{\"type\":{\"label\":\")\"},\"range\":[26,27]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ag10 = new _ArgumentRecorder(assert, _am10, {
  espath: "arguments/0",
  code: "!concat(fuga, piyo)",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am11 = {
  content: "assert.strictEqual(three * (seven * ten), math.calc.sum(one, two, three))",
  filepath: "test/fixtures/CallExpression/fixture.js",
  line: 23,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"property\":{\"type\":\"Identifier\",\"name\":\"strictEqual\",\"range\":[7,18]},\"computed\":false,\"range\":[0,18]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"*\",\"left\":{\"type\":\"Identifier\",\"name\":\"three\",\"range\":[19,24]},\"right\":{\"type\":\"BinaryExpression\",\"operator\":\"*\",\"left\":{\"type\":\"Identifier\",\"name\":\"seven\",\"range\":[28,33]},\"right\":{\"type\":\"Identifier\",\"name\":\"ten\",\"range\":[36,39]},\"range\":[28,39]},\"range\":[19,40]},{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"math\",\"range\":[42,46]},\"property\":{\"type\":\"Identifier\",\"name\":\"calc\",\"range\":[47,51]},\"computed\":false,\"range\":[42,51]},\"property\":{\"type\":\"Identifier\",\"name\":\"sum\",\"range\":[52,55]},\"computed\":false,\"range\":[42,55]},\"arguments\":[{\"type\":\"Identifier\",\"name\":\"one\",\"range\":[56,59]},{\"type\":\"Identifier\",\"name\":\"two\",\"range\":[61,64]},{\"type\":\"Identifier\",\"name\":\"three\",\"range\":[66,71]}],\"range\":[42,72]}],\"range\":[0,73]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\".\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"strictEqual\",\"range\":[7,18]},{\"type\":{\"label\":\"(\"},\"range\":[18,19]},{\"type\":{\"label\":\"name\"},\"value\":\"three\",\"range\":[19,24]},{\"type\":{\"label\":\"*\"},\"value\":\"*\",\"range\":[25,26]},{\"type\":{\"label\":\"(\"},\"range\":[27,28]},{\"type\":{\"label\":\"name\"},\"value\":\"seven\",\"range\":[28,33]},{\"type\":{\"label\":\"*\"},\"value\":\"*\",\"range\":[34,35]},{\"type\":{\"label\":\"name\"},\"value\":\"ten\",\"range\":[36,39]},{\"type\":{\"label\":\")\"},\"range\":[39,40]},{\"type\":{\"label\":\",\"},\"range\":[40,41]},{\"type\":{\"label\":\"name\"},\"value\":\"math\",\"range\":[42,46]},{\"type\":{\"label\":\".\"},\"range\":[46,47]},{\"type\":{\"label\":\"name\"},\"value\":\"calc\",\"range\":[47,51]},{\"type\":{\"label\":\".\"},\"range\":[51,52]},{\"type\":{\"label\":\"name\"},\"value\":\"sum\",\"range\":[52,55]},{\"type\":{\"label\":\"(\"},\"range\":[55,56]},{\"type\":{\"label\":\"name\"},\"value\":\"one\",\"range\":[56,59]},{\"type\":{\"label\":\",\"},\"range\":[59,60]},{\"type\":{\"label\":\"name\"},\"value\":\"two\",\"range\":[61,64]},{\"type\":{\"label\":\",\"},\"range\":[64,65]},{\"type\":{\"label\":\"name\"},\"value\":\"three\",\"range\":[66,71]},{\"type\":{\"label\":\")\"},\"range\":[71,72]},{\"type\":{\"label\":\")\"},\"range\":[72,73]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[4]
},
    _ag11 = new _ArgumentRecorder(assert.strictEqual, _am11, {
  espath: "arguments/0",
  code: "three * (seven * ten)",
  index: 0,
  name: "actual",
  kind: "mandatory"
}),
    _ag12 = new _ArgumentRecorder(assert.strictEqual, _am11, {
  espath: "arguments/1",
  code: "math.calc.sum(one, two, three)",
  index: 1,
  name: "expected",
  kind: "mandatory"
});

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

assert(_ag._rec(func(), "arguments/0"), new _AssertionMessage([_ag], _am));
assert(_ag2._rec(_ag2._tap(obj, "arguments/0/callee/object").age(), "arguments/0"), new _AssertionMessage([_ag2], _am2));
assert(_ag3._rec(isFalsy(_ag3._tap(positiveInt, "arguments/0/arguments/0")), "arguments/0"), new _AssertionMessage([_ag3], _am3));
assert(_ag4._rec(_ag4._tap(foo, "arguments/0/callee/object")[_ag4._tap(propName, "arguments/0/callee/property")](), "arguments/0"), new _AssertionMessage([_ag4], _am4));
assert(_ag5._rec(_ag5._tap(foo, "arguments/0/callee/object")[_ag5._tap(_ag5._tap(hoge, "arguments/0/callee/property/object")[_ag5._tap(_ag5._tap(fuga, "arguments/0/callee/property/property/object")[_ag5._tap(piyo, "arguments/0/callee/property/property/property")], "arguments/0/callee/property/property")], "arguments/0/callee/property")](), "arguments/0"), new _AssertionMessage([_ag5], _am5));
assert(_ag6._rec(_ag6._tap(sum(_ag6._tap(one, "arguments/0/left/arguments/0"), _ag6._tap(two, "arguments/0/left/arguments/1"), _ag6._tap(three, "arguments/0/left/arguments/2")), "arguments/0/left") === _ag6._tap(seven, "arguments/0/right"), "arguments/0"), new _AssertionMessage([_ag6], _am6));
assert(_ag7._rec(_ag7._tap(sum(_ag7._tap(sum(_ag7._tap(one, "arguments/0/left/arguments/0/arguments/0"), _ag7._tap(two, "arguments/0/left/arguments/0/arguments/1")), "arguments/0/left/arguments/0"), _ag7._tap(three, "arguments/0/left/arguments/1")), "arguments/0/left") === _ag7._tap(sum(_ag7._tap(sum(_ag7._tap(two, "arguments/0/right/arguments/0/arguments/0"), _ag7._tap(three, "arguments/0/right/arguments/0/arguments/1")), "arguments/0/right/arguments/0"), _ag7._tap(seven, "arguments/0/right/arguments/1")), "arguments/0/right"), "arguments/0"), new _AssertionMessage([_ag7], _am7));
assert(_ag8._rec(_ag8._tap(_ag8._tap(_ag8._tap(math, "arguments/0/left/callee/object/object").calc, "arguments/0/left/callee/object").sum(_ag8._tap(one, "arguments/0/left/arguments/0"), _ag8._tap(two, "arguments/0/left/arguments/1"), _ag8._tap(three, "arguments/0/left/arguments/2")), "arguments/0/left") === _ag8._tap(seven, "arguments/0/right"), "arguments/0"), new _AssertionMessage([_ag8], _am8));
assert(_ag9._rec(_ag9._tap(_ag9._tap(three, "arguments/0/left/left") * _ag9._tap(_ag9._tap(seven, "arguments/0/left/right/left") * _ag9._tap(ten, "arguments/0/left/right/right"), "arguments/0/left/right"), "arguments/0/left") === _ag9._tap(three, "arguments/0/right"), "arguments/0"), new _AssertionMessage([_ag9], _am9));
assert(_ag10._rec(!_ag10._tap(concat(_ag10._tap(fuga, "arguments/0/argument/arguments/0"), _ag10._tap(piyo, "arguments/0/argument/arguments/1")), "arguments/0/argument"), "arguments/0"), new _AssertionMessage([_ag10], _am10));
assert.strictEqual(_ag11._rec(_ag11._tap(three, "arguments/0/left") * _ag11._tap(_ag11._tap(seven, "arguments/0/right/left") * _ag11._tap(ten, "arguments/0/right/right"), "arguments/0/right"), "arguments/0"), _ag12._rec(_ag12._tap(_ag12._tap(math, "arguments/1/callee/object/object").calc, "arguments/1/callee/object").sum(_ag12._tap(one, "arguments/1/arguments/0"), _ag12._tap(two, "arguments/1/arguments/1"), _ag12._tap(three, "arguments/1/arguments/2")), "arguments/1"), new _AssertionMessage([_ag11, _ag12], _am11));
