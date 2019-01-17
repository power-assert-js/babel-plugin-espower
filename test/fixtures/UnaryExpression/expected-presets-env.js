'use strict';

var _powerAssertVisitorKeys = "{\"ArrayExpression\":[\"elements\"],\"AssignmentExpression\":[\"left\",\"right\"],\"BinaryExpression\":[\"left\",\"right\"],\"InterpreterDirective\":[],\"Directive\":[\"value\"],\"DirectiveLiteral\":[],\"BlockStatement\":[\"directives\",\"body\"],\"BreakStatement\":[\"label\"],\"CallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"CatchClause\":[\"param\",\"body\"],\"ConditionalExpression\":[\"test\",\"consequent\",\"alternate\"],\"ContinueStatement\":[\"label\"],\"DebuggerStatement\":[],\"DoWhileStatement\":[\"test\",\"body\"],\"EmptyStatement\":[],\"ExpressionStatement\":[\"expression\"],\"File\":[\"program\"],\"ForInStatement\":[\"left\",\"right\",\"body\"],\"ForStatement\":[\"init\",\"test\",\"update\",\"body\"],\"FunctionDeclaration\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"FunctionExpression\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"Identifier\":[\"typeAnnotation\"],\"IfStatement\":[\"test\",\"consequent\",\"alternate\"],\"LabeledStatement\":[\"label\",\"body\"],\"StringLiteral\":[],\"NumericLiteral\":[],\"NullLiteral\":[],\"BooleanLiteral\":[],\"RegExpLiteral\":[],\"LogicalExpression\":[\"left\",\"right\"],\"MemberExpression\":[\"object\",\"property\"],\"NewExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"Program\":[\"directives\",\"body\"],\"ObjectExpression\":[\"properties\"],\"ObjectMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectProperty\":[\"key\",\"value\",\"decorators\"],\"RestElement\":[\"argument\",\"typeAnnotation\"],\"ReturnStatement\":[\"argument\"],\"SequenceExpression\":[\"expressions\"],\"SwitchCase\":[\"test\",\"consequent\"],\"SwitchStatement\":[\"discriminant\",\"cases\"],\"ThisExpression\":[],\"ThrowStatement\":[\"argument\"],\"TryStatement\":[\"block\",\"handler\",\"finalizer\"],\"UnaryExpression\":[\"argument\"],\"UpdateExpression\":[\"argument\"],\"VariableDeclaration\":[\"declarations\"],\"VariableDeclarator\":[\"id\",\"init\"],\"WhileStatement\":[\"test\",\"body\"],\"WithStatement\":[\"object\",\"body\"],\"AssignmentPattern\":[\"left\",\"right\"],\"ArrayPattern\":[\"elements\",\"typeAnnotation\"],\"ArrowFunctionExpression\":[\"params\",\"body\",\"returnType\",\"typeParameters\"],\"ClassBody\":[\"body\"],\"ClassDeclaration\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ClassExpression\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ExportAllDeclaration\":[\"source\"],\"ExportDefaultDeclaration\":[\"declaration\"],\"ExportNamedDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"ExportSpecifier\":[\"local\",\"exported\"],\"ForOfStatement\":[\"left\",\"right\",\"body\"],\"ImportDeclaration\":[\"specifiers\",\"source\"],\"ImportDefaultSpecifier\":[\"local\"],\"ImportNamespaceSpecifier\":[\"local\"],\"ImportSpecifier\":[\"local\",\"imported\"],\"MetaProperty\":[\"meta\",\"property\"],\"ClassMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectPattern\":[\"properties\",\"typeAnnotation\"],\"SpreadElement\":[\"argument\"],\"Super\":[],\"TaggedTemplateExpression\":[\"tag\",\"quasi\"],\"TemplateElement\":[],\"TemplateLiteral\":[\"quasis\",\"expressions\"],\"YieldExpression\":[\"argument\"],\"AnyTypeAnnotation\":[],\"ArrayTypeAnnotation\":[\"elementType\"],\"BooleanTypeAnnotation\":[],\"BooleanLiteralTypeAnnotation\":[],\"NullLiteralTypeAnnotation\":[],\"ClassImplements\":[\"id\",\"typeParameters\"],\"DeclareClass\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareFunction\":[\"id\"],\"DeclareInterface\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareModule\":[\"id\",\"body\"],\"DeclareModuleExports\":[\"typeAnnotation\"],\"DeclareTypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"DeclareOpaqueType\":[\"id\",\"typeParameters\",\"supertype\"],\"DeclareVariable\":[\"id\"],\"DeclareExportDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"DeclareExportAllDeclaration\":[\"source\"],\"DeclaredPredicate\":[\"value\"],\"ExistsTypeAnnotation\":[],\"FunctionTypeAnnotation\":[\"typeParameters\",\"params\",\"rest\",\"returnType\"],\"FunctionTypeParam\":[\"name\",\"typeAnnotation\"],\"GenericTypeAnnotation\":[\"id\",\"typeParameters\"],\"InferredPredicate\":[],\"InterfaceExtends\":[\"id\",\"typeParameters\"],\"InterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"InterfaceTypeAnnotation\":[\"extends\",\"body\"],\"IntersectionTypeAnnotation\":[\"types\"],\"MixedTypeAnnotation\":[],\"EmptyTypeAnnotation\":[],\"NullableTypeAnnotation\":[\"typeAnnotation\"],\"NumberLiteralTypeAnnotation\":[],\"NumberTypeAnnotation\":[],\"ObjectTypeAnnotation\":[\"properties\",\"indexers\",\"callProperties\",\"internalSlots\"],\"ObjectTypeInternalSlot\":[\"id\",\"value\",\"optional\",\"static\",\"method\"],\"ObjectTypeCallProperty\":[\"value\"],\"ObjectTypeIndexer\":[\"id\",\"key\",\"value\",\"variance\"],\"ObjectTypeProperty\":[\"key\",\"value\",\"variance\"],\"ObjectTypeSpreadProperty\":[\"argument\"],\"OpaqueType\":[\"id\",\"typeParameters\",\"supertype\",\"impltype\"],\"QualifiedTypeIdentifier\":[\"id\",\"qualification\"],\"StringLiteralTypeAnnotation\":[],\"StringTypeAnnotation\":[],\"ThisTypeAnnotation\":[],\"TupleTypeAnnotation\":[\"types\"],\"TypeofTypeAnnotation\":[\"argument\"],\"TypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"TypeAnnotation\":[\"typeAnnotation\"],\"TypeCastExpression\":[\"expression\",\"typeAnnotation\"],\"TypeParameter\":[\"bound\",\"default\",\"variance\"],\"TypeParameterDeclaration\":[\"params\"],\"TypeParameterInstantiation\":[\"params\"],\"UnionTypeAnnotation\":[\"types\"],\"Variance\":[],\"VoidTypeAnnotation\":[],\"JSXAttribute\":[\"name\",\"value\"],\"JSXClosingElement\":[\"name\"],\"JSXElement\":[\"openingElement\",\"children\",\"closingElement\"],\"JSXEmptyExpression\":[],\"JSXExpressionContainer\":[\"expression\"],\"JSXSpreadChild\":[\"expression\"],\"JSXIdentifier\":[],\"JSXMemberExpression\":[\"object\",\"property\"],\"JSXNamespacedName\":[\"namespace\",\"name\"],\"JSXOpeningElement\":[\"name\",\"attributes\"],\"JSXSpreadAttribute\":[\"argument\"],\"JSXText\":[],\"JSXFragment\":[\"openingFragment\",\"children\",\"closingFragment\"],\"JSXOpeningFragment\":[],\"JSXClosingFragment\":[],\"Noop\":[],\"ParenthesizedExpression\":[\"expression\"],\"AwaitExpression\":[\"argument\"],\"BindExpression\":[\"object\",\"callee\"],\"ClassProperty\":[\"key\",\"value\",\"typeAnnotation\",\"decorators\"],\"OptionalMemberExpression\":[\"object\",\"property\"],\"PipelineTopicExpression\":[\"expression\"],\"PipelineBareFunction\":[\"callee\"],\"PipelinePrimaryTopicReference\":[],\"OptionalCallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"ClassPrivateProperty\":[\"key\",\"value\"],\"ClassPrivateMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"Import\":[],\"Decorator\":[\"expression\"],\"DoExpression\":[\"body\"],\"ExportDefaultSpecifier\":[\"exported\"],\"ExportNamespaceSpecifier\":[\"exported\"],\"PrivateName\":[\"id\"],\"BigIntLiteral\":[],\"TSParameterProperty\":[\"parameter\"],\"TSDeclareFunction\":[\"id\",\"typeParameters\",\"params\",\"returnType\"],\"TSDeclareMethod\":[\"decorators\",\"key\",\"typeParameters\",\"params\",\"returnType\"],\"TSQualifiedName\":[\"left\",\"right\"],\"TSCallSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSConstructSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSPropertySignature\":[\"key\",\"typeAnnotation\",\"initializer\"],\"TSMethodSignature\":[\"key\",\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSIndexSignature\":[\"parameters\",\"typeAnnotation\"],\"TSAnyKeyword\":[],\"TSUnknownKeyword\":[],\"TSNumberKeyword\":[],\"TSObjectKeyword\":[],\"TSBooleanKeyword\":[],\"TSStringKeyword\":[],\"TSSymbolKeyword\":[],\"TSVoidKeyword\":[],\"TSUndefinedKeyword\":[],\"TSNullKeyword\":[],\"TSNeverKeyword\":[],\"TSThisType\":[],\"TSFunctionType\":[\"typeParameters\",\"typeAnnotation\"],\"TSConstructorType\":[\"typeParameters\",\"typeAnnotation\"],\"TSTypeReference\":[\"typeName\",\"typeParameters\"],\"TSTypePredicate\":[\"parameterName\",\"typeAnnotation\"],\"TSTypeQuery\":[\"exprName\"],\"TSTypeLiteral\":[\"members\"],\"TSArrayType\":[\"elementType\"],\"TSTupleType\":[\"elementTypes\"],\"TSOptionalType\":[\"typeAnnotation\"],\"TSRestType\":[\"typeAnnotation\"],\"TSUnionType\":[\"types\"],\"TSIntersectionType\":[\"types\"],\"TSConditionalType\":[\"checkType\",\"extendsType\",\"trueType\",\"falseType\"],\"TSInferType\":[\"typeParameter\"],\"TSParenthesizedType\":[\"typeAnnotation\"],\"TSTypeOperator\":[\"typeAnnotation\"],\"TSIndexedAccessType\":[\"objectType\",\"indexType\"],\"TSMappedType\":[\"typeParameter\",\"typeAnnotation\"],\"TSLiteralType\":[\"literal\"],\"TSExpressionWithTypeArguments\":[\"expression\",\"typeParameters\"],\"TSInterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"body\"],\"TSInterfaceBody\":[\"body\"],\"TSTypeAliasDeclaration\":[\"id\",\"typeParameters\",\"typeAnnotation\"],\"TSAsExpression\":[\"expression\",\"typeAnnotation\"],\"TSTypeAssertion\":[\"typeAnnotation\",\"expression\"],\"TSEnumDeclaration\":[\"id\",\"members\"],\"TSEnumMember\":[\"id\",\"initializer\"],\"TSModuleDeclaration\":[\"id\",\"body\"],\"TSModuleBlock\":[\"body\"],\"TSImportEqualsDeclaration\":[\"id\",\"moduleReference\"],\"TSExternalModuleReference\":[\"expression\"],\"TSNonNullExpression\":[\"expression\"],\"TSExportAssignment\":[\"expression\"],\"TSNamespaceExportDeclaration\":[\"id\"],\"TSTypeAnnotation\":[\"typeAnnotation\"],\"TSTypeParameterInstantiation\":[\"params\"],\"TSTypeParameterDeclaration\":[\"params\"],\"TSTypeParameter\":[\"constraint\",\"default\"]}",
    _powerAssertConfig = ["assert(value, [message])", "assert.ok(value, [message])", "assert.equal(actual, expected, [message])", "assert.notEqual(actual, expected, [message])", "assert.strictEqual(actual, expected, [message])", "assert.notStrictEqual(actual, expected, [message])", { pattern: "assert.deepEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.notDeepEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.deepStrictEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.notDeepStrictEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.throws(fn, [error], [message])", args: [{ name: "fn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.doesNotThrow(fn, [error], [message])", args: [{ name: "fn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.rejects(asyncFn, [error], [message])", args: [{ name: "asyncFn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.doesNotReject(asyncFn, [error], [message])", args: [{ name: "asyncFn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }],
    _am = {
  content: "assert(!truth)",
  filepath: "test/fixtures/UnaryExpression/fixture.js",
  line: 3,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"UnaryExpression\",\"operator\":\"!\",\"argument\":{\"type\":\"Identifier\",\"name\":\"truth\",\"range\":[8,13]},\"prefix\":true,\"range\":[7,13]}],\"range\":[0,14]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"!\"},\"value\":\"!\",\"range\":[7,8]},{\"type\":{\"label\":\"name\"},\"value\":\"truth\",\"range\":[8,13]},{\"type\":{\"label\":\")\"},\"range\":[13,14]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ArgumentRecorder = function () { function ArgumentRecorder(callee, am, ag) { this._callee = callee; this._metadata = am; this._argDef = ag; this._logs = []; this._recorded = null; this._value = null; this._isBlock = false; if (am.config) { this.pattern = am.config.pattern; var argconf = am.config.args[ag.index]; this._isBlock = !!argconf.block; } } ArgumentRecorder.prototype.metadata = function metadata() { return this._metadata; }; ArgumentRecorder.prototype.code = function code() { return this._argDef.code; }; ArgumentRecorder.prototype.value = function value() { return this._value; }; ArgumentRecorder.prototype._tap = function _tap(value, espath) { this._logs.push({ value: wrap(value), espath: espath }); return value; }; ArgumentRecorder.prototype._rec = function _rec(value, espath) { var empowered = this._callee && this._callee._empowered; try { if (!empowered) return value; var log = { value: wrap(value), espath: espath }; this._logs.push(log); if (this._isBlock && empowered && typeof value === 'function') { value = new Proxy(value, { apply: function apply(target, thisArg, argumentsList) { var ret; try { ret = target.apply(thisArg, argumentsList); log.value = wrap(ret); } catch (e) { log.value = e; throw e; } return ret; } }); } this._recorded = { value: value, logs: [].concat(this._logs) }; return this; } finally { this._value = value; this._logs = []; } }; ArgumentRecorder.prototype.eject = function eject() { var result = this._recorded; this._recorded = null; this._value = null; return result; }; function isPromiseLike(o) { return o !== null && _typeof(o) === 'object' && typeof o.then === 'function' && typeof o.catch === 'function'; } function $Promise$(prms) { this.status = 'pending'; prms.then(mark(this, 'resolved'), mark(this, 'rejected')); } function mark(_this, s) { return function () { var args = Array.prototype.slice.apply(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; } function wrap(v) { return isPromiseLike(v) ? new $Promise$(v) : v; } return ArgumentRecorder; }(),
    _ag = new _ArgumentRecorder(assert, _am, {
  espath: "arguments/0",
  code: "!truth",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _AssertionMessage = function () { function AssertionMessage(argRecs, metadata, message) { this._argRecs = argRecs; this._metadata = metadata; this._message = message; } AssertionMessage.prototype.value = function value() { if (this._message && typeof this._message.value === 'function') { return this._message.value(); } else { return this._message; } }; AssertionMessage.prototype.eject = function eject() { if (this._message && typeof this._message.eject === 'function') { return this._message.eject(); } else { return { value: this.value(), logs: [] }; } }; AssertionMessage.prototype.toString = function toString() { var message = this._message ? this._message : ''; message += '\n----------'; message += '\n  code: ' + this._metadata.content; message += '\n  line: ' + this._metadata.filepath + ':' + this._metadata.line; var argRec; for (var i = 0; i < this._argRecs.length; i += 1) { argRec = this._argRecs[i]; message += '\n  arg' + i + ': '; message += '\n    code: ' + argRec.code(); message += '\n    value: ' + argRec.value(); message += '\n    type: ' + _typeof(argRec.value()); } message += '\n'; message += '[NOTICE] configure power-assert for more verbose report. see: https://github.com/power-assert-js/power-assert'; message += '\n----------'; return message; }; return AssertionMessage; }(),
    _am2 = {
  content: "assert(!!some)",
  filepath: "test/fixtures/UnaryExpression/fixture.js",
  line: 5,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"UnaryExpression\",\"operator\":\"!\",\"argument\":{\"type\":\"UnaryExpression\",\"operator\":\"!\",\"argument\":{\"type\":\"Identifier\",\"name\":\"some\",\"range\":[9,13]},\"prefix\":true,\"range\":[8,13]},\"prefix\":true,\"range\":[7,13]}],\"range\":[0,14]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"!\"},\"value\":\"!\",\"range\":[7,8]},{\"type\":{\"label\":\"!\"},\"value\":\"!\",\"range\":[8,9]},{\"type\":{\"label\":\"name\"},\"value\":\"some\",\"range\":[9,13]},{\"type\":{\"label\":\")\"},\"range\":[13,14]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ag2 = new _ArgumentRecorder(assert, _am2, {
  espath: "arguments/0",
  code: "!!some",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am3 = {
  content: "assert(!!foo.bar)",
  filepath: "test/fixtures/UnaryExpression/fixture.js",
  line: 7,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"UnaryExpression\",\"operator\":\"!\",\"argument\":{\"type\":\"UnaryExpression\",\"operator\":\"!\",\"argument\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[9,12]},\"property\":{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[13,16]},\"computed\":false,\"range\":[9,16]},\"prefix\":true,\"range\":[8,16]},\"prefix\":true,\"range\":[7,16]}],\"range\":[0,17]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"!\"},\"value\":\"!\",\"range\":[7,8]},{\"type\":{\"label\":\"!\"},\"value\":\"!\",\"range\":[8,9]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[9,12]},{\"type\":{\"label\":\".\"},\"range\":[12,13]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[13,16]},{\"type\":{\"label\":\")\"},\"range\":[16,17]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ag3 = new _ArgumentRecorder(assert, _am3, {
  espath: "arguments/0",
  code: "!!foo.bar",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am4 = {
  content: "assert(delete foo.bar)",
  filepath: "test/fixtures/UnaryExpression/fixture.js",
  line: 9,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"UnaryExpression\",\"operator\":\"delete\",\"argument\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[14,17]},\"property\":{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[18,21]},\"computed\":false,\"range\":[14,21]},\"prefix\":true,\"range\":[7,21]}],\"range\":[0,22]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"delete\"},\"value\":\"delete\",\"range\":[7,13]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[14,17]},{\"type\":{\"label\":\".\"},\"range\":[17,18]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[18,21]},{\"type\":{\"label\":\")\"},\"range\":[21,22]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ag4 = new _ArgumentRecorder(assert, _am4, {
  espath: "arguments/0",
  code: "delete foo.bar",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am5 = {
  content: "assert(typeof foo !== 'undefined')",
  filepath: "test/fixtures/UnaryExpression/fixture.js",
  line: 11,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"!==\",\"left\":{\"type\":\"UnaryExpression\",\"operator\":\"typeof\",\"argument\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[14,17]},\"prefix\":true,\"range\":[7,17]},\"right\":{\"type\":\"StringLiteral\",\"value\":\"undefined\",\"range\":[22,33]},\"range\":[7,33]}],\"range\":[0,34]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"typeof\"},\"value\":\"typeof\",\"range\":[7,13]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[14,17]},{\"type\":{\"label\":\"==/!=\"},\"value\":\"!==\",\"range\":[18,21]},{\"type\":{\"label\":\"string\"},\"value\":\"undefined\",\"range\":[22,33]},{\"type\":{\"label\":\")\"},\"range\":[33,34]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ag5 = new _ArgumentRecorder(assert, _am5, {
  espath: "arguments/0",
  code: "typeof foo !== 'undefined'",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am6 = {
  content: "assert(typeof foo.bar !== 'undefined')",
  filepath: "test/fixtures/UnaryExpression/fixture.js",
  line: 13,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"!==\",\"left\":{\"type\":\"UnaryExpression\",\"operator\":\"typeof\",\"argument\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[14,17]},\"property\":{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[18,21]},\"computed\":false,\"range\":[14,21]},\"prefix\":true,\"range\":[7,21]},\"right\":{\"type\":\"StringLiteral\",\"value\":\"undefined\",\"range\":[26,37]},\"range\":[7,37]}],\"range\":[0,38]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"typeof\"},\"value\":\"typeof\",\"range\":[7,13]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[14,17]},{\"type\":{\"label\":\".\"},\"range\":[17,18]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[18,21]},{\"type\":{\"label\":\"==/!=\"},\"value\":\"!==\",\"range\":[22,25]},{\"type\":{\"label\":\"string\"},\"value\":\"undefined\",\"range\":[26,37]},{\"type\":{\"label\":\")\"},\"range\":[37,38]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[0]
},
    _ag6 = new _ArgumentRecorder(assert, _am6, {
  espath: "arguments/0",
  code: "typeof foo.bar !== 'undefined'",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am7 = {
  content: "assert.strictEqual(typeof foo, typeof bar)",
  filepath: "test/fixtures/UnaryExpression/fixture.js",
  line: 15,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"property\":{\"type\":\"Identifier\",\"name\":\"strictEqual\",\"range\":[7,18]},\"computed\":false,\"range\":[0,18]},\"arguments\":[{\"type\":\"UnaryExpression\",\"operator\":\"typeof\",\"argument\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[26,29]},\"prefix\":true,\"range\":[19,29]},{\"type\":\"UnaryExpression\",\"operator\":\"typeof\",\"argument\":{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[38,41]},\"prefix\":true,\"range\":[31,41]}],\"range\":[0,42]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\".\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"strictEqual\",\"range\":[7,18]},{\"type\":{\"label\":\"(\"},\"range\":[18,19]},{\"type\":{\"label\":\"typeof\"},\"value\":\"typeof\",\"range\":[19,25]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[26,29]},{\"type\":{\"label\":\",\"},\"range\":[29,30]},{\"type\":{\"label\":\"typeof\"},\"value\":\"typeof\",\"range\":[31,37]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[38,41]},{\"type\":{\"label\":\")\"},\"range\":[41,42]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[4]
},
    _ag7 = new _ArgumentRecorder(assert.strictEqual, _am7, {
  espath: "arguments/0",
  code: "typeof foo",
  index: 0,
  name: "actual",
  kind: "mandatory"
}),
    _ag8 = new _ArgumentRecorder(assert.strictEqual, _am7, {
  espath: "arguments/1",
  code: "typeof bar",
  index: 1,
  name: "expected",
  kind: "mandatory"
});

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

assert(_ag._rec(!_ag._tap(truth, "arguments/0/argument"), "arguments/0"), new _AssertionMessage([_ag], _am));
assert(_ag2._rec(!_ag2._tap(!_ag2._tap(some, "arguments/0/argument/argument"), "arguments/0/argument"), "arguments/0"), new _AssertionMessage([_ag2], _am2));
assert(_ag3._rec(!_ag3._tap(!_ag3._tap(_ag3._tap(foo, "arguments/0/argument/argument/object").bar, "arguments/0/argument/argument"), "arguments/0/argument"), "arguments/0"), new _AssertionMessage([_ag3], _am3));
assert(_ag4._rec(delete _ag4._tap(_ag4._tap(foo, "arguments/0/argument/object").bar, "arguments/0/argument"), "arguments/0"), new _AssertionMessage([_ag4], _am4));
assert(_ag5._rec(_ag5._tap(typeof foo === "undefined" ? "undefined" : _typeof(foo), "arguments/0/left") !== 'undefined', "arguments/0"), new _AssertionMessage([_ag5], _am5));
assert(_ag6._rec(_ag6._tap(_typeof(_ag6._tap(_ag6._tap(foo, "arguments/0/left/argument/object").bar, "arguments/0/left/argument")), "arguments/0/left") !== 'undefined', "arguments/0"), new _AssertionMessage([_ag6], _am6));
assert.strictEqual(_ag7._rec(typeof foo === "undefined" ? "undefined" : _typeof(foo), "arguments/0"), _ag8._rec(typeof bar === "undefined" ? "undefined" : _typeof(bar), "arguments/1"), new _AssertionMessage([_ag7, _ag8], _am7));
