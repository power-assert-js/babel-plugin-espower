'use strict';

var _powerAssertVisitorKeys = "{\"ArrayExpression\":[\"elements\"],\"AssignmentExpression\":[\"left\",\"right\"],\"BinaryExpression\":[\"left\",\"right\"],\"InterpreterDirective\":[],\"Directive\":[\"value\"],\"DirectiveLiteral\":[],\"BlockStatement\":[\"directives\",\"body\"],\"BreakStatement\":[\"label\"],\"CallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"CatchClause\":[\"param\",\"body\"],\"ConditionalExpression\":[\"test\",\"consequent\",\"alternate\"],\"ContinueStatement\":[\"label\"],\"DebuggerStatement\":[],\"DoWhileStatement\":[\"test\",\"body\"],\"EmptyStatement\":[],\"ExpressionStatement\":[\"expression\"],\"File\":[\"program\"],\"ForInStatement\":[\"left\",\"right\",\"body\"],\"ForStatement\":[\"init\",\"test\",\"update\",\"body\"],\"FunctionDeclaration\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"FunctionExpression\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"Identifier\":[\"typeAnnotation\",\"decorators\"],\"IfStatement\":[\"test\",\"consequent\",\"alternate\"],\"LabeledStatement\":[\"label\",\"body\"],\"StringLiteral\":[],\"NumericLiteral\":[],\"NullLiteral\":[],\"BooleanLiteral\":[],\"RegExpLiteral\":[],\"LogicalExpression\":[\"left\",\"right\"],\"MemberExpression\":[\"object\",\"property\"],\"NewExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"Program\":[\"directives\",\"body\"],\"ObjectExpression\":[\"properties\"],\"ObjectMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectProperty\":[\"key\",\"value\",\"decorators\"],\"RestElement\":[\"argument\",\"typeAnnotation\"],\"ReturnStatement\":[\"argument\"],\"SequenceExpression\":[\"expressions\"],\"ParenthesizedExpression\":[\"expression\"],\"SwitchCase\":[\"test\",\"consequent\"],\"SwitchStatement\":[\"discriminant\",\"cases\"],\"ThisExpression\":[],\"ThrowStatement\":[\"argument\"],\"TryStatement\":[\"block\",\"handler\",\"finalizer\"],\"UnaryExpression\":[\"argument\"],\"UpdateExpression\":[\"argument\"],\"VariableDeclaration\":[\"declarations\"],\"VariableDeclarator\":[\"id\",\"init\"],\"WhileStatement\":[\"test\",\"body\"],\"WithStatement\":[\"object\",\"body\"],\"AssignmentPattern\":[\"left\",\"right\",\"decorators\"],\"ArrayPattern\":[\"elements\",\"typeAnnotation\"],\"ArrowFunctionExpression\":[\"params\",\"body\",\"returnType\",\"typeParameters\"],\"ClassBody\":[\"body\"],\"ClassDeclaration\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ClassExpression\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ExportAllDeclaration\":[\"source\"],\"ExportDefaultDeclaration\":[\"declaration\"],\"ExportNamedDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"ExportSpecifier\":[\"local\",\"exported\"],\"ForOfStatement\":[\"left\",\"right\",\"body\"],\"ImportDeclaration\":[\"specifiers\",\"source\"],\"ImportDefaultSpecifier\":[\"local\"],\"ImportNamespaceSpecifier\":[\"local\"],\"ImportSpecifier\":[\"local\",\"imported\"],\"MetaProperty\":[\"meta\",\"property\"],\"ClassMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectPattern\":[\"properties\",\"typeAnnotation\",\"decorators\"],\"SpreadElement\":[\"argument\"],\"Super\":[],\"TaggedTemplateExpression\":[\"tag\",\"quasi\"],\"TemplateElement\":[],\"TemplateLiteral\":[\"quasis\",\"expressions\"],\"YieldExpression\":[\"argument\"],\"AnyTypeAnnotation\":[],\"ArrayTypeAnnotation\":[\"elementType\"],\"BooleanTypeAnnotation\":[],\"BooleanLiteralTypeAnnotation\":[],\"NullLiteralTypeAnnotation\":[],\"ClassImplements\":[\"id\",\"typeParameters\"],\"DeclareClass\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareFunction\":[\"id\"],\"DeclareInterface\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareModule\":[\"id\",\"body\"],\"DeclareModuleExports\":[\"typeAnnotation\"],\"DeclareTypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"DeclareOpaqueType\":[\"id\",\"typeParameters\",\"supertype\"],\"DeclareVariable\":[\"id\"],\"DeclareExportDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"DeclareExportAllDeclaration\":[\"source\"],\"DeclaredPredicate\":[\"value\"],\"ExistsTypeAnnotation\":[],\"FunctionTypeAnnotation\":[\"typeParameters\",\"params\",\"rest\",\"returnType\"],\"FunctionTypeParam\":[\"name\",\"typeAnnotation\"],\"GenericTypeAnnotation\":[\"id\",\"typeParameters\"],\"InferredPredicate\":[],\"InterfaceExtends\":[\"id\",\"typeParameters\"],\"InterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"InterfaceTypeAnnotation\":[\"extends\",\"body\"],\"IntersectionTypeAnnotation\":[\"types\"],\"MixedTypeAnnotation\":[],\"EmptyTypeAnnotation\":[],\"NullableTypeAnnotation\":[\"typeAnnotation\"],\"NumberLiteralTypeAnnotation\":[],\"NumberTypeAnnotation\":[],\"ObjectTypeAnnotation\":[\"properties\",\"indexers\",\"callProperties\",\"internalSlots\"],\"ObjectTypeInternalSlot\":[\"id\",\"value\",\"optional\",\"static\",\"method\"],\"ObjectTypeCallProperty\":[\"value\"],\"ObjectTypeIndexer\":[\"id\",\"key\",\"value\",\"variance\"],\"ObjectTypeProperty\":[\"key\",\"value\",\"variance\"],\"ObjectTypeSpreadProperty\":[\"argument\"],\"OpaqueType\":[\"id\",\"typeParameters\",\"supertype\",\"impltype\"],\"QualifiedTypeIdentifier\":[\"id\",\"qualification\"],\"StringLiteralTypeAnnotation\":[],\"StringTypeAnnotation\":[],\"ThisTypeAnnotation\":[],\"TupleTypeAnnotation\":[\"types\"],\"TypeofTypeAnnotation\":[\"argument\"],\"TypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"TypeAnnotation\":[\"typeAnnotation\"],\"TypeCastExpression\":[\"expression\",\"typeAnnotation\"],\"TypeParameter\":[\"bound\",\"default\",\"variance\"],\"TypeParameterDeclaration\":[\"params\"],\"TypeParameterInstantiation\":[\"params\"],\"UnionTypeAnnotation\":[\"types\"],\"Variance\":[],\"VoidTypeAnnotation\":[],\"JSXAttribute\":[\"name\",\"value\"],\"JSXClosingElement\":[\"name\"],\"JSXElement\":[\"openingElement\",\"children\",\"closingElement\"],\"JSXEmptyExpression\":[],\"JSXExpressionContainer\":[\"expression\"],\"JSXSpreadChild\":[\"expression\"],\"JSXIdentifier\":[],\"JSXMemberExpression\":[\"object\",\"property\"],\"JSXNamespacedName\":[\"namespace\",\"name\"],\"JSXOpeningElement\":[\"name\",\"attributes\"],\"JSXSpreadAttribute\":[\"argument\"],\"JSXText\":[],\"JSXFragment\":[\"openingFragment\",\"children\",\"closingFragment\"],\"JSXOpeningFragment\":[],\"JSXClosingFragment\":[],\"Noop\":[],\"Placeholder\":[],\"ArgumentPlaceholder\":[],\"AwaitExpression\":[\"argument\"],\"BindExpression\":[\"object\",\"callee\"],\"ClassProperty\":[\"key\",\"value\",\"typeAnnotation\",\"decorators\"],\"OptionalMemberExpression\":[\"object\",\"property\"],\"PipelineTopicExpression\":[\"expression\"],\"PipelineBareFunction\":[\"callee\"],\"PipelinePrimaryTopicReference\":[],\"OptionalCallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"ClassPrivateProperty\":[\"key\",\"value\"],\"ClassPrivateMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"Import\":[],\"Decorator\":[\"expression\"],\"DoExpression\":[\"body\"],\"ExportDefaultSpecifier\":[\"exported\"],\"ExportNamespaceSpecifier\":[\"exported\"],\"PrivateName\":[\"id\"],\"BigIntLiteral\":[],\"TSParameterProperty\":[\"parameter\"],\"TSDeclareFunction\":[\"id\",\"typeParameters\",\"params\",\"returnType\"],\"TSDeclareMethod\":[\"decorators\",\"key\",\"typeParameters\",\"params\",\"returnType\"],\"TSQualifiedName\":[\"left\",\"right\"],\"TSCallSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSConstructSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSPropertySignature\":[\"key\",\"typeAnnotation\",\"initializer\"],\"TSMethodSignature\":[\"key\",\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSIndexSignature\":[\"parameters\",\"typeAnnotation\"],\"TSAnyKeyword\":[],\"TSUnknownKeyword\":[],\"TSNumberKeyword\":[],\"TSObjectKeyword\":[],\"TSBooleanKeyword\":[],\"TSStringKeyword\":[],\"TSSymbolKeyword\":[],\"TSVoidKeyword\":[],\"TSUndefinedKeyword\":[],\"TSNullKeyword\":[],\"TSNeverKeyword\":[],\"TSThisType\":[],\"TSFunctionType\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSConstructorType\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSTypeReference\":[\"typeName\",\"typeParameters\"],\"TSTypePredicate\":[\"parameterName\",\"typeAnnotation\"],\"TSTypeQuery\":[\"exprName\"],\"TSTypeLiteral\":[\"members\"],\"TSArrayType\":[\"elementType\"],\"TSTupleType\":[\"elementTypes\"],\"TSOptionalType\":[\"typeAnnotation\"],\"TSRestType\":[\"typeAnnotation\"],\"TSUnionType\":[\"types\"],\"TSIntersectionType\":[\"types\"],\"TSConditionalType\":[\"checkType\",\"extendsType\",\"trueType\",\"falseType\"],\"TSInferType\":[\"typeParameter\"],\"TSParenthesizedType\":[\"typeAnnotation\"],\"TSTypeOperator\":[\"typeAnnotation\"],\"TSIndexedAccessType\":[\"objectType\",\"indexType\"],\"TSMappedType\":[\"typeParameter\",\"typeAnnotation\"],\"TSLiteralType\":[\"literal\"],\"TSExpressionWithTypeArguments\":[\"expression\",\"typeParameters\"],\"TSInterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"body\"],\"TSInterfaceBody\":[\"body\"],\"TSTypeAliasDeclaration\":[\"id\",\"typeParameters\",\"typeAnnotation\"],\"TSAsExpression\":[\"expression\",\"typeAnnotation\"],\"TSTypeAssertion\":[\"typeAnnotation\",\"expression\"],\"TSEnumDeclaration\":[\"id\",\"members\"],\"TSEnumMember\":[\"id\",\"initializer\"],\"TSModuleDeclaration\":[\"id\",\"body\"],\"TSModuleBlock\":[\"body\"],\"TSImportType\":[\"argument\",\"qualifier\",\"typeParameters\"],\"TSImportEqualsDeclaration\":[\"id\",\"moduleReference\"],\"TSExternalModuleReference\":[\"expression\"],\"TSNonNullExpression\":[\"expression\"],\"TSExportAssignment\":[\"expression\"],\"TSNamespaceExportDeclaration\":[\"id\"],\"TSTypeAnnotation\":[\"typeAnnotation\"],\"TSTypeParameterInstantiation\":[\"params\"],\"TSTypeParameterDeclaration\":[\"params\"],\"TSTypeParameter\":[\"constraint\",\"default\"]}",
    _pwptn = JSON.parse("[{\"pattern\":\"assert(value, [message])\",\"params\":[{\"index\":0,\"name\":\"value\",\"kind\":\"mandatory\"},{\"index\":1,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.ok(value, [message])\",\"params\":[{\"index\":0,\"name\":\"value\",\"kind\":\"mandatory\"},{\"index\":1,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.equal(actual, expected, [message])\",\"params\":[{\"index\":0,\"name\":\"actual\",\"kind\":\"mandatory\"},{\"index\":1,\"name\":\"expected\",\"kind\":\"mandatory\"},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.notEqual(actual, expected, [message])\",\"params\":[{\"index\":0,\"name\":\"actual\",\"kind\":\"mandatory\"},{\"index\":1,\"name\":\"expected\",\"kind\":\"mandatory\"},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.strictEqual(actual, expected, [message])\",\"params\":[{\"index\":0,\"name\":\"actual\",\"kind\":\"mandatory\"},{\"index\":1,\"name\":\"expected\",\"kind\":\"mandatory\"},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.notStrictEqual(actual, expected, [message])\",\"params\":[{\"index\":0,\"name\":\"actual\",\"kind\":\"mandatory\"},{\"index\":1,\"name\":\"expected\",\"kind\":\"mandatory\"},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.deepEqual(actual, expected, [message])\",\"params\":[{\"index\":0,\"name\":\"actual\",\"kind\":\"mandatory\",\"options\":{\"maxDepth\":2}},{\"index\":1,\"name\":\"expected\",\"kind\":\"mandatory\",\"options\":{\"maxDepth\":2}},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.notDeepEqual(actual, expected, [message])\",\"params\":[{\"index\":0,\"name\":\"actual\",\"kind\":\"mandatory\",\"options\":{\"maxDepth\":2}},{\"index\":1,\"name\":\"expected\",\"kind\":\"mandatory\",\"options\":{\"maxDepth\":2}},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.deepStrictEqual(actual, expected, [message])\",\"params\":[{\"index\":0,\"name\":\"actual\",\"kind\":\"mandatory\",\"options\":{\"maxDepth\":3}},{\"index\":1,\"name\":\"expected\",\"kind\":\"mandatory\",\"options\":{\"maxDepth\":3}},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.notDeepStrictEqual(actual, expected, [message])\",\"params\":[{\"index\":0,\"name\":\"actual\",\"kind\":\"mandatory\",\"options\":{\"maxDepth\":2}},{\"index\":1,\"name\":\"expected\",\"kind\":\"mandatory\",\"options\":{\"maxDepth\":2}},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.throws(fn, [error], [message])\",\"params\":[{\"index\":0,\"name\":\"fn\",\"kind\":\"mandatory\",\"block\":true},{\"index\":1,\"name\":\"error\",\"kind\":\"optional\",\"block\":true},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.doesNotThrow(fn, [error], [message])\",\"params\":[{\"index\":0,\"name\":\"fn\",\"kind\":\"mandatory\",\"block\":true},{\"index\":1,\"name\":\"error\",\"kind\":\"optional\",\"block\":true},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.rejects(asyncFn, [error], [message])\",\"params\":[{\"index\":0,\"name\":\"asyncFn\",\"kind\":\"mandatory\",\"block\":true},{\"index\":1,\"name\":\"error\",\"kind\":\"optional\",\"block\":true},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]},{\"pattern\":\"assert.doesNotReject(asyncFn, [error], [message])\",\"params\":[{\"index\":0,\"name\":\"asyncFn\",\"kind\":\"mandatory\",\"block\":true},{\"index\":1,\"name\":\"error\",\"kind\":\"optional\",\"block\":true},{\"index\":2,\"name\":\"message\",\"kind\":\"optional\",\"message\":true}]}]"),
    _pwmeta = function _pwmeta(ptnidx, content, filepath, line, extra) { return Object.assign({ transpiler: "babel-plugin-espower", version: "3.0.1", content: content, filepath: filepath, line: line }, extra, _pwptn[ptnidx]); },
    _ArgumentRecorder = function () { var isPromiseLike = function isPromiseLike(o) { return o !== null && _typeof(o) === "object" && typeof o.then === "function" && typeof o["catch"] === "function"; }; var mark = function mark(_this, s) { return function () { var args = Array.from(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; }; var $Promise$ = function $Promise$(prms) { _classCallCheck(this, $Promise$); this.status = "pending"; prms.then(mark(this, "resolved"), mark(this, "rejected")); }; var wrap = function wrap(v) { return isPromiseLike(v) ? new $Promise$(v) : v; }; var ArgumentRecorder = /*#__PURE__*/ function () { function ArgumentRecorder(callee, am, matchIndex) { _classCallCheck(this, ArgumentRecorder); this._callee = callee; this._am = am; this._logs = []; this._recorded = null; this._val = null; this._idx = matchIndex; var conf = am.params[matchIndex]; this._isBlock = !!conf.block; } _createClass(ArgumentRecorder, [{ key: "metadata", value: function metadata() { return this._am; } }, { key: "matchIndex", value: function matchIndex() { return this._idx; } }, { key: "val", value: function val() { return this._val; } }, { key: "_tap", value: function _tap(value, espath) { this._logs.push({ value: wrap(value), espath: espath }); return value; } }, { key: "_rec", value: function _rec(value, espath) { var empowered = this._callee && this._callee._empowered; try { if (!empowered) return value; if (!espath) return this; var log = { value: wrap(value), espath: espath }; this._logs.push(log); if (this._isBlock && empowered && typeof value === "function") { value = new Proxy(value, { apply: function apply(target, thisArg, args) { try { var ret = target.apply(thisArg, args); log.value = wrap(ret); return ret; } catch (e) { log.value = e; throw e; } } }); } return this; } finally { if (empowered) { this._recorded = { value: value, logs: [].concat(this._logs) }; } this._val = value; this._logs = []; } } }, { key: "eject", value: function eject() { var ret = this._recorded; this._recorded = null; this._val = null; return ret; } }]); return ArgumentRecorder; }(); return ArgumentRecorder; }(),
    _AssertionMessage = function () { var _s = "\n\n      "; var AssertionMessage = /*#__PURE__*/ function () { function AssertionMessage(am, matchIndex, msgOrRec) { _classCallCheck(this, AssertionMessage); this._am = am; this._idx = matchIndex; this._msgOrRec = msgOrRec; } _createClass(AssertionMessage, [{ key: "metadata", value: function metadata() { return this._am; } }, { key: "matchIndex", value: function matchIndex() { return this._idx; } }, { key: "val", value: function val() { if (this._msgOrRec && typeof this._msgOrRec.val === "function") { return this._msgOrRec.val(); } else { return this._msgOrRec; } } }, { key: "eject", value: function eject() { if (this._msgOrRec && typeof this._msgOrRec.eject === "function") { return this._msgOrRec.eject(); } else { return { value: this.val(), logs: [] }; } } }, { key: "toString", value: function toString() { var msg = typeof this._msgOrRec === "string" ? this._msgOrRec : ""; msg += "".concat(_s, "# ").concat(this._am.filepath, ":").concat(this._am.line); msg += "".concat(_s).concat(this._am.content); msg += "".concat(_s, "[WARNING] power-assert is not configured. see: https://github.com/power-assert-js/power-assert"); msg += "\n"; return msg; } }]); return AssertionMessage; }(); return AssertionMessage; }();

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var assert = require('power-assert');

describe('Array#indexOf()', function () {
  beforeEach(function () {
    this.ary = [1, 2, 3];
  });
  it('should return index when the value is present', function () {
    var _am = _pwmeta(0, "assert(this.ary.indexOf(who) === two)", "test/fixtures/Mocha/fixture.js", 11, {
      ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"===\",\"left\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"ThisExpression\",\"range\":[7,11]},\"property\":{\"type\":\"Identifier\",\"name\":\"ary\",\"range\":[12,15]},\"computed\":false,\"range\":[7,15]},\"property\":{\"type\":\"Identifier\",\"name\":\"indexOf\",\"range\":[16,23]},\"computed\":false,\"range\":[7,23]},\"arguments\":[{\"type\":\"Identifier\",\"name\":\"who\",\"range\":[24,27]}],\"range\":[7,28]},\"right\":{\"type\":\"Identifier\",\"name\":\"two\",\"range\":[33,36]},\"range\":[7,36]}],\"range\":[0,37]}",
      tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"this\"},\"value\":\"this\",\"range\":[7,11]},{\"type\":{\"label\":\".\"},\"range\":[11,12]},{\"type\":{\"label\":\"name\"},\"value\":\"ary\",\"range\":[12,15]},{\"type\":{\"label\":\".\"},\"range\":[15,16]},{\"type\":{\"label\":\"name\"},\"value\":\"indexOf\",\"range\":[16,23]},{\"type\":{\"label\":\"(\"},\"range\":[23,24]},{\"type\":{\"label\":\"name\"},\"value\":\"who\",\"range\":[24,27]},{\"type\":{\"label\":\")\"},\"range\":[27,28]},{\"type\":{\"label\":\"==/!=/===/!==\"},\"value\":\"===\",\"range\":[29,32]},{\"type\":{\"label\":\"name\"},\"value\":\"two\",\"range\":[33,36]},{\"type\":{\"label\":\")\"},\"range\":[36,37]}]",
      visitorKeys: _powerAssertVisitorKeys
    }),
        _ag = new _ArgumentRecorder(assert, _am, 0);

    var who = 'ariya',
        two = 2;
    assert(_ag._rec(_ag._tap(_ag._tap(this.ary, "arguments/0/left/callee/object").indexOf(_ag._tap(who, "arguments/0/left/arguments/0")), "arguments/0/left") === _ag._tap(two, "arguments/0/right"), "arguments/0"), new _AssertionMessage(_am, -1));
  });
  it('should return -1 when the value is not present', function () {
    var _am2 = _pwmeta(1, "assert.ok(this.ary.indexOf(two) === minusOne, 'THIS IS AN ASSERTION MESSAGE')", "test/fixtures/Mocha/fixture.js", 15, {
      ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"property\":{\"type\":\"Identifier\",\"name\":\"ok\",\"range\":[7,9]},\"computed\":false,\"range\":[0,9]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"===\",\"left\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"ThisExpression\",\"range\":[10,14]},\"property\":{\"type\":\"Identifier\",\"name\":\"ary\",\"range\":[15,18]},\"computed\":false,\"range\":[10,18]},\"property\":{\"type\":\"Identifier\",\"name\":\"indexOf\",\"range\":[19,26]},\"computed\":false,\"range\":[10,26]},\"arguments\":[{\"type\":\"Identifier\",\"name\":\"two\",\"range\":[27,30]}],\"range\":[10,31]},\"right\":{\"type\":\"Identifier\",\"name\":\"minusOne\",\"range\":[36,44]},\"range\":[10,44]},{\"type\":\"StringLiteral\",\"value\":\"THIS IS AN ASSERTION MESSAGE\",\"range\":[46,76]}],\"range\":[0,77]}",
      tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\".\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"ok\",\"range\":[7,9]},{\"type\":{\"label\":\"(\"},\"range\":[9,10]},{\"type\":{\"label\":\"this\"},\"value\":\"this\",\"range\":[10,14]},{\"type\":{\"label\":\".\"},\"range\":[14,15]},{\"type\":{\"label\":\"name\"},\"value\":\"ary\",\"range\":[15,18]},{\"type\":{\"label\":\".\"},\"range\":[18,19]},{\"type\":{\"label\":\"name\"},\"value\":\"indexOf\",\"range\":[19,26]},{\"type\":{\"label\":\"(\"},\"range\":[26,27]},{\"type\":{\"label\":\"name\"},\"value\":\"two\",\"range\":[27,30]},{\"type\":{\"label\":\")\"},\"range\":[30,31]},{\"type\":{\"label\":\"==/!=/===/!==\"},\"value\":\"===\",\"range\":[32,35]},{\"type\":{\"label\":\"name\"},\"value\":\"minusOne\",\"range\":[36,44]},{\"type\":{\"label\":\",\"},\"range\":[44,45]},{\"type\":{\"label\":\"string\"},\"value\":\"THIS IS AN ASSERTION MESSAGE\",\"range\":[46,76]},{\"type\":{\"label\":\")\"},\"range\":[76,77]}]",
      visitorKeys: _powerAssertVisitorKeys
    }),
        _ag2 = new _ArgumentRecorder(assert.ok, _am2, 0);

    var minusOne = -1,
        two = 2;
    assert.ok(_ag2._rec(_ag2._tap(_ag2._tap(this.ary, "arguments/0/left/callee/object").indexOf(_ag2._tap(two, "arguments/0/left/arguments/0")), "arguments/0/left") === _ag2._tap(minusOne, "arguments/0/right"), "arguments/0"), new _AssertionMessage(_am2, 1, 'THIS IS AN ASSERTION MESSAGE'));
  });
});
