'use strict';

var _powerAssertVisitorKeys = "{\"ArrayExpression\":[\"elements\"],\"AssignmentExpression\":[\"left\",\"right\"],\"BinaryExpression\":[\"left\",\"right\"],\"InterpreterDirective\":[],\"Directive\":[\"value\"],\"DirectiveLiteral\":[],\"BlockStatement\":[\"directives\",\"body\"],\"BreakStatement\":[\"label\"],\"CallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"CatchClause\":[\"param\",\"body\"],\"ConditionalExpression\":[\"test\",\"consequent\",\"alternate\"],\"ContinueStatement\":[\"label\"],\"DebuggerStatement\":[],\"DoWhileStatement\":[\"test\",\"body\"],\"EmptyStatement\":[],\"ExpressionStatement\":[\"expression\"],\"File\":[\"program\"],\"ForInStatement\":[\"left\",\"right\",\"body\"],\"ForStatement\":[\"init\",\"test\",\"update\",\"body\"],\"FunctionDeclaration\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"FunctionExpression\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"Identifier\":[\"typeAnnotation\",\"decorators\"],\"IfStatement\":[\"test\",\"consequent\",\"alternate\"],\"LabeledStatement\":[\"label\",\"body\"],\"StringLiteral\":[],\"NumericLiteral\":[],\"NullLiteral\":[],\"BooleanLiteral\":[],\"RegExpLiteral\":[],\"LogicalExpression\":[\"left\",\"right\"],\"MemberExpression\":[\"object\",\"property\"],\"NewExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"Program\":[\"directives\",\"body\"],\"ObjectExpression\":[\"properties\"],\"ObjectMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectProperty\":[\"key\",\"value\",\"decorators\"],\"RestElement\":[\"argument\",\"typeAnnotation\"],\"ReturnStatement\":[\"argument\"],\"SequenceExpression\":[\"expressions\"],\"ParenthesizedExpression\":[\"expression\"],\"SwitchCase\":[\"test\",\"consequent\"],\"SwitchStatement\":[\"discriminant\",\"cases\"],\"ThisExpression\":[],\"ThrowStatement\":[\"argument\"],\"TryStatement\":[\"block\",\"handler\",\"finalizer\"],\"UnaryExpression\":[\"argument\"],\"UpdateExpression\":[\"argument\"],\"VariableDeclaration\":[\"declarations\"],\"VariableDeclarator\":[\"id\",\"init\"],\"WhileStatement\":[\"test\",\"body\"],\"WithStatement\":[\"object\",\"body\"],\"AssignmentPattern\":[\"left\",\"right\",\"decorators\"],\"ArrayPattern\":[\"elements\",\"typeAnnotation\"],\"ArrowFunctionExpression\":[\"params\",\"body\",\"returnType\",\"typeParameters\"],\"ClassBody\":[\"body\"],\"ClassDeclaration\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ClassExpression\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ExportAllDeclaration\":[\"source\"],\"ExportDefaultDeclaration\":[\"declaration\"],\"ExportNamedDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"ExportSpecifier\":[\"local\",\"exported\"],\"ForOfStatement\":[\"left\",\"right\",\"body\"],\"ImportDeclaration\":[\"specifiers\",\"source\"],\"ImportDefaultSpecifier\":[\"local\"],\"ImportNamespaceSpecifier\":[\"local\"],\"ImportSpecifier\":[\"local\",\"imported\"],\"MetaProperty\":[\"meta\",\"property\"],\"ClassMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectPattern\":[\"properties\",\"typeAnnotation\",\"decorators\"],\"SpreadElement\":[\"argument\"],\"Super\":[],\"TaggedTemplateExpression\":[\"tag\",\"quasi\"],\"TemplateElement\":[],\"TemplateLiteral\":[\"quasis\",\"expressions\"],\"YieldExpression\":[\"argument\"],\"AnyTypeAnnotation\":[],\"ArrayTypeAnnotation\":[\"elementType\"],\"BooleanTypeAnnotation\":[],\"BooleanLiteralTypeAnnotation\":[],\"NullLiteralTypeAnnotation\":[],\"ClassImplements\":[\"id\",\"typeParameters\"],\"DeclareClass\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareFunction\":[\"id\"],\"DeclareInterface\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareModule\":[\"id\",\"body\"],\"DeclareModuleExports\":[\"typeAnnotation\"],\"DeclareTypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"DeclareOpaqueType\":[\"id\",\"typeParameters\",\"supertype\"],\"DeclareVariable\":[\"id\"],\"DeclareExportDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"DeclareExportAllDeclaration\":[\"source\"],\"DeclaredPredicate\":[\"value\"],\"ExistsTypeAnnotation\":[],\"FunctionTypeAnnotation\":[\"typeParameters\",\"params\",\"rest\",\"returnType\"],\"FunctionTypeParam\":[\"name\",\"typeAnnotation\"],\"GenericTypeAnnotation\":[\"id\",\"typeParameters\"],\"InferredPredicate\":[],\"InterfaceExtends\":[\"id\",\"typeParameters\"],\"InterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"InterfaceTypeAnnotation\":[\"extends\",\"body\"],\"IntersectionTypeAnnotation\":[\"types\"],\"MixedTypeAnnotation\":[],\"EmptyTypeAnnotation\":[],\"NullableTypeAnnotation\":[\"typeAnnotation\"],\"NumberLiteralTypeAnnotation\":[],\"NumberTypeAnnotation\":[],\"ObjectTypeAnnotation\":[\"properties\",\"indexers\",\"callProperties\",\"internalSlots\"],\"ObjectTypeInternalSlot\":[\"id\",\"value\",\"optional\",\"static\",\"method\"],\"ObjectTypeCallProperty\":[\"value\"],\"ObjectTypeIndexer\":[\"id\",\"key\",\"value\",\"variance\"],\"ObjectTypeProperty\":[\"key\",\"value\",\"variance\"],\"ObjectTypeSpreadProperty\":[\"argument\"],\"OpaqueType\":[\"id\",\"typeParameters\",\"supertype\",\"impltype\"],\"QualifiedTypeIdentifier\":[\"id\",\"qualification\"],\"StringLiteralTypeAnnotation\":[],\"StringTypeAnnotation\":[],\"ThisTypeAnnotation\":[],\"TupleTypeAnnotation\":[\"types\"],\"TypeofTypeAnnotation\":[\"argument\"],\"TypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"TypeAnnotation\":[\"typeAnnotation\"],\"TypeCastExpression\":[\"expression\",\"typeAnnotation\"],\"TypeParameter\":[\"bound\",\"default\",\"variance\"],\"TypeParameterDeclaration\":[\"params\"],\"TypeParameterInstantiation\":[\"params\"],\"UnionTypeAnnotation\":[\"types\"],\"Variance\":[],\"VoidTypeAnnotation\":[],\"JSXAttribute\":[\"name\",\"value\"],\"JSXClosingElement\":[\"name\"],\"JSXElement\":[\"openingElement\",\"children\",\"closingElement\"],\"JSXEmptyExpression\":[],\"JSXExpressionContainer\":[\"expression\"],\"JSXSpreadChild\":[\"expression\"],\"JSXIdentifier\":[],\"JSXMemberExpression\":[\"object\",\"property\"],\"JSXNamespacedName\":[\"namespace\",\"name\"],\"JSXOpeningElement\":[\"name\",\"attributes\"],\"JSXSpreadAttribute\":[\"argument\"],\"JSXText\":[],\"JSXFragment\":[\"openingFragment\",\"children\",\"closingFragment\"],\"JSXOpeningFragment\":[],\"JSXClosingFragment\":[],\"Noop\":[],\"Placeholder\":[],\"ArgumentPlaceholder\":[],\"AwaitExpression\":[\"argument\"],\"BindExpression\":[\"object\",\"callee\"],\"ClassProperty\":[\"key\",\"value\",\"typeAnnotation\",\"decorators\"],\"OptionalMemberExpression\":[\"object\",\"property\"],\"PipelineTopicExpression\":[\"expression\"],\"PipelineBareFunction\":[\"callee\"],\"PipelinePrimaryTopicReference\":[],\"OptionalCallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"ClassPrivateProperty\":[\"key\",\"value\"],\"ClassPrivateMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"Import\":[],\"Decorator\":[\"expression\"],\"DoExpression\":[\"body\"],\"ExportDefaultSpecifier\":[\"exported\"],\"ExportNamespaceSpecifier\":[\"exported\"],\"PrivateName\":[\"id\"],\"BigIntLiteral\":[],\"TSParameterProperty\":[\"parameter\"],\"TSDeclareFunction\":[\"id\",\"typeParameters\",\"params\",\"returnType\"],\"TSDeclareMethod\":[\"decorators\",\"key\",\"typeParameters\",\"params\",\"returnType\"],\"TSQualifiedName\":[\"left\",\"right\"],\"TSCallSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSConstructSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSPropertySignature\":[\"key\",\"typeAnnotation\",\"initializer\"],\"TSMethodSignature\":[\"key\",\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSIndexSignature\":[\"parameters\",\"typeAnnotation\"],\"TSAnyKeyword\":[],\"TSUnknownKeyword\":[],\"TSNumberKeyword\":[],\"TSObjectKeyword\":[],\"TSBooleanKeyword\":[],\"TSStringKeyword\":[],\"TSSymbolKeyword\":[],\"TSVoidKeyword\":[],\"TSUndefinedKeyword\":[],\"TSNullKeyword\":[],\"TSNeverKeyword\":[],\"TSThisType\":[],\"TSFunctionType\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSConstructorType\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSTypeReference\":[\"typeName\",\"typeParameters\"],\"TSTypePredicate\":[\"parameterName\",\"typeAnnotation\"],\"TSTypeQuery\":[\"exprName\"],\"TSTypeLiteral\":[\"members\"],\"TSArrayType\":[\"elementType\"],\"TSTupleType\":[\"elementTypes\"],\"TSOptionalType\":[\"typeAnnotation\"],\"TSRestType\":[\"typeAnnotation\"],\"TSUnionType\":[\"types\"],\"TSIntersectionType\":[\"types\"],\"TSConditionalType\":[\"checkType\",\"extendsType\",\"trueType\",\"falseType\"],\"TSInferType\":[\"typeParameter\"],\"TSParenthesizedType\":[\"typeAnnotation\"],\"TSTypeOperator\":[\"typeAnnotation\"],\"TSIndexedAccessType\":[\"objectType\",\"indexType\"],\"TSMappedType\":[\"typeParameter\",\"typeAnnotation\"],\"TSLiteralType\":[\"literal\"],\"TSExpressionWithTypeArguments\":[\"expression\",\"typeParameters\"],\"TSInterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"body\"],\"TSInterfaceBody\":[\"body\"],\"TSTypeAliasDeclaration\":[\"id\",\"typeParameters\",\"typeAnnotation\"],\"TSAsExpression\":[\"expression\",\"typeAnnotation\"],\"TSTypeAssertion\":[\"typeAnnotation\",\"expression\"],\"TSEnumDeclaration\":[\"id\",\"members\"],\"TSEnumMember\":[\"id\",\"initializer\"],\"TSModuleDeclaration\":[\"id\",\"body\"],\"TSModuleBlock\":[\"body\"],\"TSImportType\":[\"argument\",\"qualifier\",\"typeParameters\"],\"TSImportEqualsDeclaration\":[\"id\",\"moduleReference\"],\"TSExternalModuleReference\":[\"expression\"],\"TSNonNullExpression\":[\"expression\"],\"TSExportAssignment\":[\"expression\"],\"TSNamespaceExportDeclaration\":[\"id\"],\"TSTypeAnnotation\":[\"typeAnnotation\"],\"TSTypeParameterInstantiation\":[\"params\"],\"TSTypeParameterDeclaration\":[\"params\"],\"TSTypeParameter\":[\"constraint\",\"default\"]}",
    _pwmeta = function _pwmeta(ptnidx, content, filepath, line, extra) { var version = 2, patterns = [{ pattern: "assert(value, [message])", params: [{ index: 0, name: "value", kind: "mandatory" }, { index: 1, name: "message", kind: "optional", message: true }] }, { pattern: "assert.ok(value, [message])", params: [{ index: 0, name: "value", kind: "mandatory" }, { index: 1, name: "message", kind: "optional", message: true }] }, { pattern: "assert.equal(actual, expected, [message])", params: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notEqual(actual, expected, [message])", params: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.strictEqual(actual, expected, [message])", params: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notStrictEqual(actual, expected, [message])", params: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.deepEqual(actual, expected, [message])", params: [{ index: 0, name: "actual", kind: "mandatory", options: { maxDepth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { maxDepth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notDeepEqual(actual, expected, [message])", params: [{ index: 0, name: "actual", kind: "mandatory", options: { maxDepth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { maxDepth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.deepStrictEqual(actual, expected, [message])", params: [{ index: 0, name: "actual", kind: "mandatory", options: { maxDepth: 3 } }, { index: 1, name: "expected", kind: "mandatory", options: { maxDepth: 3 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notDeepStrictEqual(actual, expected, [message])", params: [{ index: 0, name: "actual", kind: "mandatory", options: { maxDepth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { maxDepth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.throws(fn, [error], [message])", params: [{ index: 0, name: "fn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.doesNotThrow(fn, [error], [message])", params: [{ index: 0, name: "fn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.rejects(asyncFn, [error], [message])", params: [{ index: 0, name: "asyncFn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.doesNotReject(asyncFn, [error], [message])", params: [{ index: 0, name: "asyncFn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }]; return Object.assign({ version: version, content: content, filepath: filepath, line: line }, extra, patterns[ptnidx]); },
    _am = _pwmeta(0, "assert(v => v + 1)", "test/fixtures/ArrowFunctionExpression/fixture.js", 3, {
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"ArrowFunctionExpression\",\"params\":[{\"type\":\"Identifier\",\"name\":\"v\",\"range\":[7,8]}],\"body\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"Identifier\",\"name\":\"v\",\"range\":[12,13]},\"right\":{\"type\":\"NumericLiteral\",\"value\":1,\"range\":[16,17]},\"range\":[12,17]},\"async\":false,\"range\":[7,17]}],\"range\":[0,18]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"v\",\"range\":[7,8]},{\"type\":{\"label\":\"=>\"},\"range\":[9,11]},{\"type\":{\"label\":\"name\"},\"value\":\"v\",\"range\":[12,13]},{\"type\":{\"label\":\"+/-\"},\"value\":\"+\",\"range\":[14,15]},{\"type\":{\"label\":\"num\"},\"value\":1,\"range\":[16,17]},{\"type\":{\"label\":\")\"},\"range\":[17,18]}]",
  visitorKeys: _powerAssertVisitorKeys
}),
    _am2 = _pwmeta(0, "assert((v, i) => v + i)", "test/fixtures/ArrowFunctionExpression/fixture.js", 5, {
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"ArrowFunctionExpression\",\"params\":[{\"type\":\"Identifier\",\"name\":\"v\",\"range\":[8,9]},{\"type\":\"Identifier\",\"name\":\"i\",\"range\":[11,12]}],\"body\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"Identifier\",\"name\":\"v\",\"range\":[17,18]},\"right\":{\"type\":\"Identifier\",\"name\":\"i\",\"range\":[21,22]},\"range\":[17,22]},\"async\":false,\"range\":[7,22]}],\"range\":[0,23]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"(\"},\"range\":[7,8]},{\"type\":{\"label\":\"name\"},\"value\":\"v\",\"range\":[8,9]},{\"type\":{\"label\":\",\"},\"range\":[9,10]},{\"type\":{\"label\":\"name\"},\"value\":\"i\",\"range\":[11,12]},{\"type\":{\"label\":\")\"},\"range\":[12,13]},{\"type\":{\"label\":\"=>\"},\"range\":[14,16]},{\"type\":{\"label\":\"name\"},\"value\":\"v\",\"range\":[17,18]},{\"type\":{\"label\":\"+/-\"},\"value\":\"+\",\"range\":[19,20]},{\"type\":{\"label\":\"name\"},\"value\":\"i\",\"range\":[21,22]},{\"type\":{\"label\":\")\"},\"range\":[22,23]}]",
  visitorKeys: _powerAssertVisitorKeys
}),
    _am3 = _pwmeta(0, "assert(v => ({ even: v, odd: v + 1 }))", "test/fixtures/ArrowFunctionExpression/fixture.js", 7, {
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"ArrowFunctionExpression\",\"params\":[{\"type\":\"Identifier\",\"name\":\"v\",\"range\":[7,8]}],\"body\":{\"type\":\"ObjectExpression\",\"properties\":[{\"type\":\"ObjectProperty\",\"key\":{\"type\":\"Identifier\",\"name\":\"even\",\"range\":[15,19]},\"value\":{\"type\":\"Identifier\",\"name\":\"v\",\"range\":[21,22]},\"computed\":false,\"shorthand\":false,\"range\":[15,22]},{\"type\":\"ObjectProperty\",\"key\":{\"type\":\"Identifier\",\"name\":\"odd\",\"range\":[24,27]},\"value\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"Identifier\",\"name\":\"v\",\"range\":[29,30]},\"right\":{\"type\":\"NumericLiteral\",\"value\":1,\"range\":[33,34]},\"range\":[29,34]},\"computed\":false,\"shorthand\":false,\"range\":[24,34]}],\"range\":[13,36]},\"async\":false,\"range\":[7,37]}],\"range\":[0,38]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"v\",\"range\":[7,8]},{\"type\":{\"label\":\"=>\"},\"range\":[9,11]},{\"type\":{\"label\":\"(\"},\"range\":[12,13]},{\"type\":{\"label\":\"{\"},\"range\":[13,14]},{\"type\":{\"label\":\"name\"},\"value\":\"even\",\"range\":[15,19]},{\"type\":{\"label\":\":\"},\"range\":[19,20]},{\"type\":{\"label\":\"name\"},\"value\":\"v\",\"range\":[21,22]},{\"type\":{\"label\":\",\"},\"range\":[22,23]},{\"type\":{\"label\":\"name\"},\"value\":\"odd\",\"range\":[24,27]},{\"type\":{\"label\":\":\"},\"range\":[27,28]},{\"type\":{\"label\":\"name\"},\"value\":\"v\",\"range\":[29,30]},{\"type\":{\"label\":\"+/-\"},\"value\":\"+\",\"range\":[31,32]},{\"type\":{\"label\":\"num\"},\"value\":1,\"range\":[33,34]},{\"type\":{\"label\":\"}\"},\"range\":[35,36]},{\"type\":{\"label\":\")\"},\"range\":[36,37]},{\"type\":{\"label\":\")\"},\"range\":[37,38]}]",
  visitorKeys: _powerAssertVisitorKeys
}),
    _am4 = _pwmeta(0, "assert(seven === ((v, i) => v + i)(four, five))", "test/fixtures/ArrowFunctionExpression/fixture.js", 9, {
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"===\",\"left\":{\"type\":\"Identifier\",\"name\":\"seven\",\"range\":[7,12]},\"right\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"ArrowFunctionExpression\",\"params\":[{\"type\":\"Identifier\",\"name\":\"v\",\"range\":[19,20]},{\"type\":\"Identifier\",\"name\":\"i\",\"range\":[22,23]}],\"body\":{\"type\":\"BinaryExpression\",\"operator\":\"+\",\"left\":{\"type\":\"Identifier\",\"name\":\"v\",\"range\":[28,29]},\"right\":{\"type\":\"Identifier\",\"name\":\"i\",\"range\":[32,33]},\"range\":[28,33]},\"async\":false,\"range\":[18,33]},\"arguments\":[{\"type\":\"Identifier\",\"name\":\"four\",\"range\":[35,39]},{\"type\":\"Identifier\",\"name\":\"five\",\"range\":[41,45]}],\"range\":[17,46]},\"range\":[7,46]}],\"range\":[0,47]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"seven\",\"range\":[7,12]},{\"type\":{\"label\":\"==/!=/===/!==\"},\"value\":\"===\",\"range\":[13,16]},{\"type\":{\"label\":\"(\"},\"range\":[17,18]},{\"type\":{\"label\":\"(\"},\"range\":[18,19]},{\"type\":{\"label\":\"name\"},\"value\":\"v\",\"range\":[19,20]},{\"type\":{\"label\":\",\"},\"range\":[20,21]},{\"type\":{\"label\":\"name\"},\"value\":\"i\",\"range\":[22,23]},{\"type\":{\"label\":\")\"},\"range\":[23,24]},{\"type\":{\"label\":\"=>\"},\"range\":[25,27]},{\"type\":{\"label\":\"name\"},\"value\":\"v\",\"range\":[28,29]},{\"type\":{\"label\":\"+/-\"},\"value\":\"+\",\"range\":[30,31]},{\"type\":{\"label\":\"name\"},\"value\":\"i\",\"range\":[32,33]},{\"type\":{\"label\":\")\"},\"range\":[33,34]},{\"type\":{\"label\":\"(\"},\"range\":[34,35]},{\"type\":{\"label\":\"name\"},\"value\":\"four\",\"range\":[35,39]},{\"type\":{\"label\":\",\"},\"range\":[39,40]},{\"type\":{\"label\":\"name\"},\"value\":\"five\",\"range\":[41,45]},{\"type\":{\"label\":\")\"},\"range\":[45,46]},{\"type\":{\"label\":\")\"},\"range\":[46,47]}]",
  visitorKeys: _powerAssertVisitorKeys
}),
    _ArgumentRecorder = function () { var isPromiseLike = function isPromiseLike(o) { return o !== null && _typeof(o) === "object" && typeof o.then === "function" && typeof o["catch"] === "function"; }; var mark = function mark(_this, s) { return function () { var args = Array.from(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; }; var $Promise$ = function $Promise$(prms) { _classCallCheck(this, $Promise$); this.status = "pending"; prms.then(mark(this, "resolved"), mark(this, "rejected")); }; var wrap = function wrap(v) { return isPromiseLike(v) ? new $Promise$(v) : v; }; var ArgumentRecorder = /*#__PURE__*/ function () { function ArgumentRecorder(callee, am, matchIndex) { _classCallCheck(this, ArgumentRecorder); this._callee = callee; this._am = am; this._logs = []; this._recorded = null; this._val = null; this._idx = matchIndex; var conf = am.params[matchIndex]; this._isBlock = !!conf.block; } _createClass(ArgumentRecorder, [{ key: "metadata", value: function metadata() { return this._am; } }, { key: "matchIndex", value: function matchIndex() { return this._idx; } }, { key: "val", value: function val() { return this._val; } }, { key: "_tap", value: function _tap(value, espath) { this._logs.push({ value: wrap(value), espath: espath }); return value; } }, { key: "_rec", value: function _rec(value, espath) { var empowered = this._callee && this._callee._empowered; try { if (!empowered) return value; var log = { value: wrap(value), espath: espath }; this._logs.push(log); if (this._isBlock && empowered && typeof value === "function") { value = new Proxy(value, { apply: function apply(target, thisArg, args) { try { var ret = target.apply(thisArg, args); log.value = wrap(ret); return ret; } catch (e) { log.value = e; throw e; } } }); } this._recorded = { value: value, logs: [].concat(this._logs) }; return this; } finally { this._val = value; this._logs = []; } } }, { key: "eject", value: function eject() { var ret = this._recorded; this._recorded = null; this._val = null; return ret; } }]); return ArgumentRecorder; }(); return ArgumentRecorder; }(),
    _ag = new _ArgumentRecorder(assert, _am4, 0),
    _AssertionMessage = function () { var _s = "\n\n      "; var AssertionMessage = /*#__PURE__*/ function () { function AssertionMessage(am, matchIndex, msgOrRec) { _classCallCheck(this, AssertionMessage); this._am = am; this._idx = matchIndex; this._msgOrRec = msgOrRec; } _createClass(AssertionMessage, [{ key: "metadata", value: function metadata() { return this._am; } }, { key: "matchIndex", value: function matchIndex() { return this._idx; } }, { key: "val", value: function val() { if (this._msgOrRec && typeof this._msgOrRec.val === "function") { return this._msgOrRec.val(); } else { return this._msgOrRec; } } }, { key: "eject", value: function eject() { if (this._msgOrRec && typeof this._msgOrRec.eject === "function") { return this._msgOrRec.eject(); } else { return { value: this.val(), logs: [] }; } } }, { key: "toString", value: function toString() { var msg = typeof this._msgOrRec === "string" ? this._msgOrRec : ""; msg += "".concat(_s, "# ").concat(this._am.filepath, ":").concat(this._am.line); msg += "".concat(_s).concat(this._am.content); msg += "".concat(_s, "[WARNING] power-assert is not configured. see: https://github.com/power-assert-js/power-assert"); msg += "\n"; return msg; } }]); return AssertionMessage; }(); return AssertionMessage; }();

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

assert(function (v) {
  return v + 1;
});
assert(function (v, i) {
  return v + i;
});
assert(function (v) {
  return {
    even: v,
    odd: v + 1
  };
});
assert(_ag._rec(_ag._tap(seven, "arguments/0/left") === _ag._tap(function (v, i) {
  return v + i;
}(_ag._tap(four, "arguments/0/right/arguments/0"), _ag._tap(five, "arguments/0/right/arguments/1")), "arguments/0/right"), "arguments/0"), new _AssertionMessage(_am4, -1));
