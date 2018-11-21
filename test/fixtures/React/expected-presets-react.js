"use strict";

var _react = _interopRequireDefault(require("react"));

var _powerAssert = _interopRequireDefault(require("power-assert"));

var _enzyme = require("enzyme");

var sinon = _interopRequireWildcard(require("sinon"));

var _Foo = _interopRequireDefault(require("../src/Foo"));

var _powerAssertVisitorKeys = "{\"ArrayExpression\":[\"elements\"],\"AssignmentExpression\":[\"left\",\"right\"],\"BinaryExpression\":[\"left\",\"right\"],\"InterpreterDirective\":[],\"Directive\":[\"value\"],\"DirectiveLiteral\":[],\"BlockStatement\":[\"directives\",\"body\"],\"BreakStatement\":[\"label\"],\"CallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"CatchClause\":[\"param\",\"body\"],\"ConditionalExpression\":[\"test\",\"consequent\",\"alternate\"],\"ContinueStatement\":[\"label\"],\"DebuggerStatement\":[],\"DoWhileStatement\":[\"test\",\"body\"],\"EmptyStatement\":[],\"ExpressionStatement\":[\"expression\"],\"File\":[\"program\"],\"ForInStatement\":[\"left\",\"right\",\"body\"],\"ForStatement\":[\"init\",\"test\",\"update\",\"body\"],\"FunctionDeclaration\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"FunctionExpression\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"Identifier\":[\"typeAnnotation\"],\"IfStatement\":[\"test\",\"consequent\",\"alternate\"],\"LabeledStatement\":[\"label\",\"body\"],\"StringLiteral\":[],\"NumericLiteral\":[],\"NullLiteral\":[],\"BooleanLiteral\":[],\"RegExpLiteral\":[],\"LogicalExpression\":[\"left\",\"right\"],\"MemberExpression\":[\"object\",\"property\"],\"NewExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"Program\":[\"directives\",\"body\"],\"ObjectExpression\":[\"properties\"],\"ObjectMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectProperty\":[\"key\",\"value\",\"decorators\"],\"RestElement\":[\"argument\",\"typeAnnotation\"],\"ReturnStatement\":[\"argument\"],\"SequenceExpression\":[\"expressions\"],\"SwitchCase\":[\"test\",\"consequent\"],\"SwitchStatement\":[\"discriminant\",\"cases\"],\"ThisExpression\":[],\"ThrowStatement\":[\"argument\"],\"TryStatement\":[\"block\",\"handler\",\"finalizer\"],\"UnaryExpression\":[\"argument\"],\"UpdateExpression\":[\"argument\"],\"VariableDeclaration\":[\"declarations\"],\"VariableDeclarator\":[\"id\",\"init\"],\"WhileStatement\":[\"test\",\"body\"],\"WithStatement\":[\"object\",\"body\"],\"AssignmentPattern\":[\"left\",\"right\"],\"ArrayPattern\":[\"elements\",\"typeAnnotation\"],\"ArrowFunctionExpression\":[\"params\",\"body\",\"returnType\",\"typeParameters\"],\"ClassBody\":[\"body\"],\"ClassDeclaration\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ClassExpression\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ExportAllDeclaration\":[\"source\"],\"ExportDefaultDeclaration\":[\"declaration\"],\"ExportNamedDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"ExportSpecifier\":[\"local\",\"exported\"],\"ForOfStatement\":[\"left\",\"right\",\"body\"],\"ImportDeclaration\":[\"specifiers\",\"source\"],\"ImportDefaultSpecifier\":[\"local\"],\"ImportNamespaceSpecifier\":[\"local\"],\"ImportSpecifier\":[\"local\",\"imported\"],\"MetaProperty\":[\"meta\",\"property\"],\"ClassMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectPattern\":[\"properties\",\"typeAnnotation\"],\"SpreadElement\":[\"argument\"],\"Super\":[],\"TaggedTemplateExpression\":[\"tag\",\"quasi\"],\"TemplateElement\":[],\"TemplateLiteral\":[\"quasis\",\"expressions\"],\"YieldExpression\":[\"argument\"],\"AnyTypeAnnotation\":[],\"ArrayTypeAnnotation\":[\"elementType\"],\"BooleanTypeAnnotation\":[],\"BooleanLiteralTypeAnnotation\":[],\"NullLiteralTypeAnnotation\":[],\"ClassImplements\":[\"id\",\"typeParameters\"],\"DeclareClass\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareFunction\":[\"id\"],\"DeclareInterface\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareModule\":[\"id\",\"body\"],\"DeclareModuleExports\":[\"typeAnnotation\"],\"DeclareTypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"DeclareOpaqueType\":[\"id\",\"typeParameters\",\"supertype\"],\"DeclareVariable\":[\"id\"],\"DeclareExportDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"DeclareExportAllDeclaration\":[\"source\"],\"DeclaredPredicate\":[\"value\"],\"ExistsTypeAnnotation\":[],\"FunctionTypeAnnotation\":[\"typeParameters\",\"params\",\"rest\",\"returnType\"],\"FunctionTypeParam\":[\"name\",\"typeAnnotation\"],\"GenericTypeAnnotation\":[\"id\",\"typeParameters\"],\"InferredPredicate\":[],\"InterfaceExtends\":[\"id\",\"typeParameters\"],\"InterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"InterfaceTypeAnnotation\":[\"extends\",\"body\"],\"IntersectionTypeAnnotation\":[\"types\"],\"MixedTypeAnnotation\":[],\"EmptyTypeAnnotation\":[],\"NullableTypeAnnotation\":[\"typeAnnotation\"],\"NumberLiteralTypeAnnotation\":[],\"NumberTypeAnnotation\":[],\"ObjectTypeAnnotation\":[\"properties\",\"indexers\",\"callProperties\",\"internalSlots\"],\"ObjectTypeInternalSlot\":[\"id\",\"value\",\"optional\",\"static\",\"method\"],\"ObjectTypeCallProperty\":[\"value\"],\"ObjectTypeIndexer\":[\"id\",\"key\",\"value\",\"variance\"],\"ObjectTypeProperty\":[\"key\",\"value\",\"variance\"],\"ObjectTypeSpreadProperty\":[\"argument\"],\"OpaqueType\":[\"id\",\"typeParameters\",\"supertype\",\"impltype\"],\"QualifiedTypeIdentifier\":[\"id\",\"qualification\"],\"StringLiteralTypeAnnotation\":[],\"StringTypeAnnotation\":[],\"ThisTypeAnnotation\":[],\"TupleTypeAnnotation\":[\"types\"],\"TypeofTypeAnnotation\":[\"argument\"],\"TypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"TypeAnnotation\":[\"typeAnnotation\"],\"TypeCastExpression\":[\"expression\",\"typeAnnotation\"],\"TypeParameter\":[\"bound\",\"default\",\"variance\"],\"TypeParameterDeclaration\":[\"params\"],\"TypeParameterInstantiation\":[\"params\"],\"UnionTypeAnnotation\":[\"types\"],\"Variance\":[],\"VoidTypeAnnotation\":[],\"JSXAttribute\":[\"name\",\"value\"],\"JSXClosingElement\":[\"name\"],\"JSXElement\":[\"openingElement\",\"children\",\"closingElement\"],\"JSXEmptyExpression\":[],\"JSXExpressionContainer\":[\"expression\"],\"JSXSpreadChild\":[\"expression\"],\"JSXIdentifier\":[],\"JSXMemberExpression\":[\"object\",\"property\"],\"JSXNamespacedName\":[\"namespace\",\"name\"],\"JSXOpeningElement\":[\"name\",\"attributes\"],\"JSXSpreadAttribute\":[\"argument\"],\"JSXText\":[],\"JSXFragment\":[\"openingFragment\",\"children\",\"closingFragment\"],\"JSXOpeningFragment\":[],\"JSXClosingFragment\":[],\"Noop\":[],\"ParenthesizedExpression\":[\"expression\"],\"AwaitExpression\":[\"argument\"],\"BindExpression\":[\"object\",\"callee\"],\"ClassProperty\":[\"key\",\"value\",\"typeAnnotation\",\"decorators\"],\"OptionalMemberExpression\":[\"object\",\"property\"],\"OptionalCallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"ClassPrivateProperty\":[\"key\",\"value\"],\"Import\":[],\"Decorator\":[\"expression\"],\"DoExpression\":[\"body\"],\"ExportDefaultSpecifier\":[\"exported\"],\"ExportNamespaceSpecifier\":[\"exported\"],\"PrivateName\":[\"id\"],\"BigIntLiteral\":[],\"TSParameterProperty\":[\"parameter\"],\"TSDeclareFunction\":[\"id\",\"typeParameters\",\"params\",\"returnType\"],\"TSDeclareMethod\":[\"decorators\",\"key\",\"typeParameters\",\"params\",\"returnType\"],\"TSQualifiedName\":[\"left\",\"right\"],\"TSCallSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSConstructSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSPropertySignature\":[\"key\",\"typeAnnotation\",\"initializer\"],\"TSMethodSignature\":[\"key\",\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSIndexSignature\":[\"parameters\",\"typeAnnotation\"],\"TSAnyKeyword\":[],\"TSUnknownKeyword\":[],\"TSNumberKeyword\":[],\"TSObjectKeyword\":[],\"TSBooleanKeyword\":[],\"TSStringKeyword\":[],\"TSSymbolKeyword\":[],\"TSVoidKeyword\":[],\"TSUndefinedKeyword\":[],\"TSNullKeyword\":[],\"TSNeverKeyword\":[],\"TSThisType\":[],\"TSFunctionType\":[\"typeParameters\",\"typeAnnotation\"],\"TSConstructorType\":[\"typeParameters\",\"typeAnnotation\"],\"TSTypeReference\":[\"typeName\",\"typeParameters\"],\"TSTypePredicate\":[\"parameterName\",\"typeAnnotation\"],\"TSTypeQuery\":[\"exprName\"],\"TSTypeLiteral\":[\"members\"],\"TSArrayType\":[\"elementType\"],\"TSTupleType\":[\"elementTypes\"],\"TSOptionalType\":[\"typeAnnotation\"],\"TSRestType\":[\"typeAnnotation\"],\"TSUnionType\":[\"types\"],\"TSIntersectionType\":[\"types\"],\"TSConditionalType\":[\"checkType\",\"extendsType\",\"trueType\",\"falseType\"],\"TSInferType\":[\"typeParameter\"],\"TSParenthesizedType\":[\"typeAnnotation\"],\"TSTypeOperator\":[\"typeAnnotation\"],\"TSIndexedAccessType\":[\"objectType\",\"indexType\"],\"TSMappedType\":[\"typeParameter\",\"typeAnnotation\"],\"TSLiteralType\":[\"literal\"],\"TSExpressionWithTypeArguments\":[\"expression\",\"typeParameters\"],\"TSInterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"body\"],\"TSInterfaceBody\":[\"body\"],\"TSTypeAliasDeclaration\":[\"id\",\"typeParameters\",\"typeAnnotation\"],\"TSAsExpression\":[\"expression\",\"typeAnnotation\"],\"TSTypeAssertion\":[\"typeAnnotation\",\"expression\"],\"TSEnumDeclaration\":[\"id\",\"members\"],\"TSEnumMember\":[\"id\",\"initializer\"],\"TSModuleDeclaration\":[\"id\",\"body\"],\"TSModuleBlock\":[\"body\"],\"TSImportEqualsDeclaration\":[\"id\",\"moduleReference\"],\"TSExternalModuleReference\":[\"expression\"],\"TSNonNullExpression\":[\"expression\"],\"TSExportAssignment\":[\"expression\"],\"TSNamespaceExportDeclaration\":[\"id\"],\"TSTypeAnnotation\":[\"typeAnnotation\"],\"TSTypeParameterInstantiation\":[\"params\"],\"TSTypeParameterDeclaration\":[\"params\"],\"TSTypeParameter\":[\"constraint\",\"default\"]}",
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ToDoItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ToDoItem, _React$Component);

  function ToDoItem() {
    _classCallCheck(this, ToDoItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToDoItem).apply(this, arguments));
  }

  _createClass(ToDoItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          item = _this$props.item,
          onCompleteChange = _this$props.onCompleteChange;
      return _react.default.createElement("div", {
        className: "item"
      }, _react.default.createElement("span", {
        className: "item-mark"
      }, item.complete ? '✓' : '•'), _react.default.createElement("span", {
        className: "item-title"
      }, item.title), _react.default.createElement("a", {
        className: "item-button",
        onClick: function onClick() {
          return onCompleteChange(item, !item.complete);
        }
      }, "Mark as ", item.complete ? 'Pending' : 'Complete'));
    }
  }]);

  return ToDoItem;
}(_react.default.Component);

function mockItem(overrides) {// … create mock ToDo Item
}

describe('<ToDoItem />', function () {
  it('renders the title', function () {
    var _rec = new _powerAssertRecorder();

    var item = mockItem();
    (0, _powerAssert.default)(_rec._expr(_rec._capt(_rec._capt(_rec._capt(_rec._capt((0, _enzyme.shallow)(_react.default.createElement(ToDoItem, {
      item: item
    })), "arguments/0/left/callee/object/callee/object").text(), "arguments/0/left/callee/object").indexOf(_rec._capt(_rec._capt(item, "arguments/0/left/arguments/0/object").title, "arguments/0/left/arguments/0")), "arguments/0/left") !== _rec._capt(-1, "arguments/0/right"), "arguments/0"), {
      content: "assert(shallow(<ToDoItem item={item} />).text().indexOf(item.title) !== -1)",
      filepath: "test/fixtures/React/fixture.js",
      line: 29,
      ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"!==\",\"left\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"shallow\",\"range\":[7,14]},\"arguments\":[{\"type\":\"JSXElement\",\"openingElement\":{\"type\":\"JSXOpeningElement\",\"name\":{\"type\":\"JSXIdentifier\",\"name\":\"ToDoItem\",\"range\":[16,24]},\"attributes\":[{\"type\":\"JSXAttribute\",\"name\":{\"type\":\"JSXIdentifier\",\"name\":\"item\",\"range\":[25,29]},\"value\":{\"type\":\"JSXExpressionContainer\",\"expression\":{\"type\":\"Identifier\",\"name\":\"item\",\"range\":[31,35]},\"range\":[30,36]},\"range\":[25,36]}],\"selfClosing\":true,\"range\":[15,39]},\"closingElement\":null,\"children\":[],\"range\":[15,39]}],\"range\":[7,40]},\"property\":{\"type\":\"Identifier\",\"name\":\"text\",\"range\":[41,45]},\"computed\":false,\"range\":[7,45]},\"arguments\":[],\"range\":[7,47]},\"property\":{\"type\":\"Identifier\",\"name\":\"indexOf\",\"range\":[48,55]},\"computed\":false,\"range\":[7,55]},\"arguments\":[{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"item\",\"range\":[56,60]},\"property\":{\"type\":\"Identifier\",\"name\":\"title\",\"range\":[61,66]},\"computed\":false,\"range\":[56,66]}],\"range\":[7,67]},\"right\":{\"type\":\"UnaryExpression\",\"operator\":\"-\",\"argument\":{\"type\":\"NumericLiteral\",\"value\":1,\"range\":[73,74]},\"prefix\":true,\"range\":[72,74]},\"range\":[7,74]}],\"range\":[0,75]}",
      tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"shallow\",\"range\":[7,14]},{\"type\":{\"label\":\"(\"},\"range\":[14,15]},{\"type\":{\"label\":\"jsxTagStart\"},\"range\":[15,16]},{\"type\":{\"label\":\"jsxName\"},\"value\":\"ToDoItem\",\"range\":[16,24]},{\"type\":{\"label\":\"jsxName\"},\"value\":\"item\",\"range\":[25,29]},{\"type\":{\"label\":\"=\"},\"value\":\"=\",\"range\":[29,30]},{\"type\":{\"label\":\"{\"},\"range\":[30,31]},{\"type\":{\"label\":\"name\"},\"value\":\"item\",\"range\":[31,35]},{\"type\":{\"label\":\"}\"},\"range\":[35,36]},{\"type\":{\"label\":\"/\"},\"value\":\"/\",\"range\":[37,38]},{\"type\":{\"label\":\"jsxTagEnd\"},\"range\":[38,39]},{\"type\":{\"label\":\")\"},\"range\":[39,40]},{\"type\":{\"label\":\".\"},\"range\":[40,41]},{\"type\":{\"label\":\"name\"},\"value\":\"text\",\"range\":[41,45]},{\"type\":{\"label\":\"(\"},\"range\":[45,46]},{\"type\":{\"label\":\")\"},\"range\":[46,47]},{\"type\":{\"label\":\".\"},\"range\":[47,48]},{\"type\":{\"label\":\"name\"},\"value\":\"indexOf\",\"range\":[48,55]},{\"type\":{\"label\":\"(\"},\"range\":[55,56]},{\"type\":{\"label\":\"name\"},\"value\":\"item\",\"range\":[56,60]},{\"type\":{\"label\":\".\"},\"range\":[60,61]},{\"type\":{\"label\":\"name\"},\"value\":\"title\",\"range\":[61,66]},{\"type\":{\"label\":\")\"},\"range\":[66,67]},{\"type\":{\"label\":\"==/!=\"},\"value\":\"!==\",\"range\":[68,71]},{\"type\":{\"label\":\"+/-\"},\"value\":\"-\",\"range\":[72,73]},{\"type\":{\"label\":\"num\"},\"value\":1,\"range\":[73,74]},{\"type\":{\"label\":\")\"},\"range\":[74,75]}]",
      visitorKeys: _powerAssertVisitorKeys
    }));
  });
  it('renders a check mark when complete', function () {
    var _rec2 = new _powerAssertRecorder();

    var item = mockItem({
      complete: true
    });
    (0, _powerAssert.default)(_rec2._expr(_rec2._capt(_rec2._capt(_rec2._capt(_rec2._capt((0, _enzyme.shallow)(_react.default.createElement(ToDoItem, {
      item: item
    })), "arguments/0/left/callee/object/callee/object").find('.item-mark'), "arguments/0/left/callee/object").text(), "arguments/0/left") === '✓', "arguments/0"), {
      content: "assert(shallow(<ToDoItem item={item} />).find('.item-mark').text() === '\u2713')",
      filepath: "test/fixtures/React/fixture.js",
      line: 33,
      ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"===\",\"left\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"shallow\",\"range\":[7,14]},\"arguments\":[{\"type\":\"JSXElement\",\"openingElement\":{\"type\":\"JSXOpeningElement\",\"name\":{\"type\":\"JSXIdentifier\",\"name\":\"ToDoItem\",\"range\":[16,24]},\"attributes\":[{\"type\":\"JSXAttribute\",\"name\":{\"type\":\"JSXIdentifier\",\"name\":\"item\",\"range\":[25,29]},\"value\":{\"type\":\"JSXExpressionContainer\",\"expression\":{\"type\":\"Identifier\",\"name\":\"item\",\"range\":[31,35]},\"range\":[30,36]},\"range\":[25,36]}],\"selfClosing\":true,\"range\":[15,39]},\"closingElement\":null,\"children\":[],\"range\":[15,39]}],\"range\":[7,40]},\"property\":{\"type\":\"Identifier\",\"name\":\"find\",\"range\":[41,45]},\"computed\":false,\"range\":[7,45]},\"arguments\":[{\"type\":\"StringLiteral\",\"value\":\".item-mark\",\"range\":[46,58]}],\"range\":[7,59]},\"property\":{\"type\":\"Identifier\",\"name\":\"text\",\"range\":[60,64]},\"computed\":false,\"range\":[7,64]},\"arguments\":[],\"range\":[7,66]},\"right\":{\"type\":\"StringLiteral\",\"value\":\"\u2713\",\"range\":[71,74]},\"range\":[7,74]}],\"range\":[0,75]}",
      tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"shallow\",\"range\":[7,14]},{\"type\":{\"label\":\"(\"},\"range\":[14,15]},{\"type\":{\"label\":\"jsxTagStart\"},\"range\":[15,16]},{\"type\":{\"label\":\"jsxName\"},\"value\":\"ToDoItem\",\"range\":[16,24]},{\"type\":{\"label\":\"jsxName\"},\"value\":\"item\",\"range\":[25,29]},{\"type\":{\"label\":\"=\"},\"value\":\"=\",\"range\":[29,30]},{\"type\":{\"label\":\"{\"},\"range\":[30,31]},{\"type\":{\"label\":\"name\"},\"value\":\"item\",\"range\":[31,35]},{\"type\":{\"label\":\"}\"},\"range\":[35,36]},{\"type\":{\"label\":\"/\"},\"value\":\"/\",\"range\":[37,38]},{\"type\":{\"label\":\"jsxTagEnd\"},\"range\":[38,39]},{\"type\":{\"label\":\")\"},\"range\":[39,40]},{\"type\":{\"label\":\".\"},\"range\":[40,41]},{\"type\":{\"label\":\"name\"},\"value\":\"find\",\"range\":[41,45]},{\"type\":{\"label\":\"(\"},\"range\":[45,46]},{\"type\":{\"label\":\"string\"},\"value\":\".item-mark\",\"range\":[46,58]},{\"type\":{\"label\":\")\"},\"range\":[58,59]},{\"type\":{\"label\":\".\"},\"range\":[59,60]},{\"type\":{\"label\":\"name\"},\"value\":\"text\",\"range\":[60,64]},{\"type\":{\"label\":\"(\"},\"range\":[64,65]},{\"type\":{\"label\":\")\"},\"range\":[65,66]},{\"type\":{\"label\":\"==/!=\"},\"value\":\"===\",\"range\":[67,70]},{\"type\":{\"label\":\"string\"},\"value\":\"\u2713\",\"range\":[71,74]},{\"type\":{\"label\":\")\"},\"range\":[74,75]}]",
      visitorKeys: _powerAssertVisitorKeys
    }));
  });
  it('renders a bullet when not complete', function () {
    var _rec3 = new _powerAssertRecorder();

    var item = mockItem({
      complete: false
    });
    (0, _powerAssert.default)(_rec3._expr(_rec3._capt(_rec3._capt(_rec3._capt(_rec3._capt((0, _enzyme.shallow)(_react.default.createElement(ToDoItem, {
      item: item
    })), "arguments/0/left/callee/object/callee/object").find('.item-mark'), "arguments/0/left/callee/object").text(), "arguments/0/left") === '•', "arguments/0"), {
      content: "assert(shallow(<ToDoItem item={item} />).find('.item-mark').text() === '\u2022')",
      filepath: "test/fixtures/React/fixture.js",
      line: 37,
      ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"===\",\"left\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"shallow\",\"range\":[7,14]},\"arguments\":[{\"type\":\"JSXElement\",\"openingElement\":{\"type\":\"JSXOpeningElement\",\"name\":{\"type\":\"JSXIdentifier\",\"name\":\"ToDoItem\",\"range\":[16,24]},\"attributes\":[{\"type\":\"JSXAttribute\",\"name\":{\"type\":\"JSXIdentifier\",\"name\":\"item\",\"range\":[25,29]},\"value\":{\"type\":\"JSXExpressionContainer\",\"expression\":{\"type\":\"Identifier\",\"name\":\"item\",\"range\":[31,35]},\"range\":[30,36]},\"range\":[25,36]}],\"selfClosing\":true,\"range\":[15,39]},\"closingElement\":null,\"children\":[],\"range\":[15,39]}],\"range\":[7,40]},\"property\":{\"type\":\"Identifier\",\"name\":\"find\",\"range\":[41,45]},\"computed\":false,\"range\":[7,45]},\"arguments\":[{\"type\":\"StringLiteral\",\"value\":\".item-mark\",\"range\":[46,58]}],\"range\":[7,59]},\"property\":{\"type\":\"Identifier\",\"name\":\"text\",\"range\":[60,64]},\"computed\":false,\"range\":[7,64]},\"arguments\":[],\"range\":[7,66]},\"right\":{\"type\":\"StringLiteral\",\"value\":\"\u2022\",\"range\":[71,74]},\"range\":[7,74]}],\"range\":[0,75]}",
      tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"shallow\",\"range\":[7,14]},{\"type\":{\"label\":\"(\"},\"range\":[14,15]},{\"type\":{\"label\":\"jsxTagStart\"},\"range\":[15,16]},{\"type\":{\"label\":\"jsxName\"},\"value\":\"ToDoItem\",\"range\":[16,24]},{\"type\":{\"label\":\"jsxName\"},\"value\":\"item\",\"range\":[25,29]},{\"type\":{\"label\":\"=\"},\"value\":\"=\",\"range\":[29,30]},{\"type\":{\"label\":\"{\"},\"range\":[30,31]},{\"type\":{\"label\":\"name\"},\"value\":\"item\",\"range\":[31,35]},{\"type\":{\"label\":\"}\"},\"range\":[35,36]},{\"type\":{\"label\":\"/\"},\"value\":\"/\",\"range\":[37,38]},{\"type\":{\"label\":\"jsxTagEnd\"},\"range\":[38,39]},{\"type\":{\"label\":\")\"},\"range\":[39,40]},{\"type\":{\"label\":\".\"},\"range\":[40,41]},{\"type\":{\"label\":\"name\"},\"value\":\"find\",\"range\":[41,45]},{\"type\":{\"label\":\"(\"},\"range\":[45,46]},{\"type\":{\"label\":\"string\"},\"value\":\".item-mark\",\"range\":[46,58]},{\"type\":{\"label\":\")\"},\"range\":[58,59]},{\"type\":{\"label\":\".\"},\"range\":[59,60]},{\"type\":{\"label\":\"name\"},\"value\":\"text\",\"range\":[60,64]},{\"type\":{\"label\":\"(\"},\"range\":[64,65]},{\"type\":{\"label\":\")\"},\"range\":[65,66]},{\"type\":{\"label\":\"==/!=\"},\"value\":\"===\",\"range\":[67,70]},{\"type\":{\"label\":\"string\"},\"value\":\"\u2022\",\"range\":[71,74]},{\"type\":{\"label\":\")\"},\"range\":[74,75]}]",
      visitorKeys: _powerAssertVisitorKeys
    }));
  });
  it('calls onCompleteChange handler with the right arguments when clicked', function () {
    var _rec4 = new _powerAssertRecorder(),
        _rec5 = new _powerAssertRecorder();

    var spy = sinon.spy();
    var item = mockItem();
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(ToDoItem, {
      item: item,
      onCompleteChange: spy
    }));
    wrapper.find('.item-button').simulate('click');
    (0, _powerAssert.default)(_rec4._expr(_rec4._capt(_rec4._capt(_rec4._capt(spy, "arguments/0/left/object").calledOnce, "arguments/0/left") === true, "arguments/0"), {
      content: "assert(spy.calledOnce === true)",
      filepath: "test/fixtures/React/fixture.js",
      line: 44,
      ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"===\",\"left\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"spy\",\"range\":[7,10]},\"property\":{\"type\":\"Identifier\",\"name\":\"calledOnce\",\"range\":[11,21]},\"computed\":false,\"range\":[7,21]},\"right\":{\"type\":\"BooleanLiteral\",\"value\":true,\"range\":[26,30]},\"range\":[7,30]}],\"range\":[0,31]}",
      tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"spy\",\"range\":[7,10]},{\"type\":{\"label\":\".\"},\"range\":[10,11]},{\"type\":{\"label\":\"name\"},\"value\":\"calledOnce\",\"range\":[11,21]},{\"type\":{\"label\":\"==/!=\"},\"value\":\"===\",\"range\":[22,25]},{\"type\":{\"label\":\"true\"},\"value\":\"true\",\"range\":[26,30]},{\"type\":{\"label\":\")\"},\"range\":[30,31]}]",
      visitorKeys: _powerAssertVisitorKeys
    }));
    (0, _powerAssert.default)(_rec5._expr(_rec5._capt(_rec5._capt(_rec5._capt(spy, "arguments/0/left/callee/object").calledWith(_rec5._capt(item, "arguments/0/left/arguments/0"), false), "arguments/0/left") === true, "arguments/0"), {
      content: "assert(spy.calledWith(item, false) === true)",
      filepath: "test/fixtures/React/fixture.js",
      line: 45,
      ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"===\",\"left\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"spy\",\"range\":[7,10]},\"property\":{\"type\":\"Identifier\",\"name\":\"calledWith\",\"range\":[11,21]},\"computed\":false,\"range\":[7,21]},\"arguments\":[{\"type\":\"Identifier\",\"name\":\"item\",\"range\":[22,26]},{\"type\":\"BooleanLiteral\",\"value\":false,\"range\":[28,33]}],\"range\":[7,34]},\"right\":{\"type\":\"BooleanLiteral\",\"value\":true,\"range\":[39,43]},\"range\":[7,43]}],\"range\":[0,44]}",
      tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"spy\",\"range\":[7,10]},{\"type\":{\"label\":\".\"},\"range\":[10,11]},{\"type\":{\"label\":\"name\"},\"value\":\"calledWith\",\"range\":[11,21]},{\"type\":{\"label\":\"(\"},\"range\":[21,22]},{\"type\":{\"label\":\"name\"},\"value\":\"item\",\"range\":[22,26]},{\"type\":{\"label\":\",\"},\"range\":[26,27]},{\"type\":{\"label\":\"false\"},\"value\":\"false\",\"range\":[28,33]},{\"type\":{\"label\":\")\"},\"range\":[33,34]},{\"type\":{\"label\":\"==/!=\"},\"value\":\"===\",\"range\":[35,38]},{\"type\":{\"label\":\"true\"},\"value\":\"true\",\"range\":[39,43]},{\"type\":{\"label\":\")\"},\"range\":[43,44]}]",
      visitorKeys: _powerAssertVisitorKeys
    }));
  });
});
describe('<Foo />', function () {
  describe('#shallow', function () {
    it('#contains', function () {
      var _rec6 = new _powerAssertRecorder();

      (0, _powerAssert.default)(_rec6._expr(_rec6._capt(_rec6._capt((0, _enzyme.shallow)(_react.default.createElement(_Foo.default, null)), "arguments/0/callee/object").contains(_react.default.createElement("div", {
        className: "foo"
      })), "arguments/0"), {
        content: "assert(shallow(<Foo />).contains(<div className='foo' />))",
        filepath: "test/fixtures/React/fixture.js",
        line: 52,
        ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"shallow\",\"range\":[7,14]},\"arguments\":[{\"type\":\"JSXElement\",\"openingElement\":{\"type\":\"JSXOpeningElement\",\"name\":{\"type\":\"JSXIdentifier\",\"name\":\"Foo\",\"range\":[16,19]},\"attributes\":[],\"selfClosing\":true,\"range\":[15,22]},\"closingElement\":null,\"children\":[],\"range\":[15,22]}],\"range\":[7,23]},\"property\":{\"type\":\"Identifier\",\"name\":\"contains\",\"range\":[24,32]},\"computed\":false,\"range\":[7,32]},\"arguments\":[{\"type\":\"JSXElement\",\"openingElement\":{\"type\":\"JSXOpeningElement\",\"name\":{\"type\":\"JSXIdentifier\",\"name\":\"div\",\"range\":[34,37]},\"attributes\":[{\"type\":\"JSXAttribute\",\"name\":{\"type\":\"JSXIdentifier\",\"name\":\"className\",\"range\":[38,47]},\"value\":{\"type\":\"StringLiteral\",\"value\":\"foo\",\"range\":[48,53]},\"range\":[38,53]}],\"selfClosing\":true,\"range\":[33,56]},\"closingElement\":null,\"children\":[],\"range\":[33,56]}],\"range\":[7,57]}],\"range\":[0,58]}",
        tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"shallow\",\"range\":[7,14]},{\"type\":{\"label\":\"(\"},\"range\":[14,15]},{\"type\":{\"label\":\"jsxTagStart\"},\"range\":[15,16]},{\"type\":{\"label\":\"jsxName\"},\"value\":\"Foo\",\"range\":[16,19]},{\"type\":{\"label\":\"/\"},\"value\":\"/\",\"range\":[20,21]},{\"type\":{\"label\":\"jsxTagEnd\"},\"range\":[21,22]},{\"type\":{\"label\":\")\"},\"range\":[22,23]},{\"type\":{\"label\":\".\"},\"range\":[23,24]},{\"type\":{\"label\":\"name\"},\"value\":\"contains\",\"range\":[24,32]},{\"type\":{\"label\":\"(\"},\"range\":[32,33]},{\"type\":{\"label\":\"jsxTagStart\"},\"range\":[33,34]},{\"type\":{\"label\":\"jsxName\"},\"value\":\"div\",\"range\":[34,37]},{\"type\":{\"label\":\"jsxName\"},\"value\":\"className\",\"range\":[38,47]},{\"type\":{\"label\":\"=\"},\"value\":\"=\",\"range\":[47,48]},{\"type\":{\"label\":\"string\"},\"value\":\"foo\",\"range\":[48,53]},{\"type\":{\"label\":\"/\"},\"value\":\"/\",\"range\":[54,55]},{\"type\":{\"label\":\"jsxTagEnd\"},\"range\":[55,56]},{\"type\":{\"label\":\")\"},\"range\":[56,57]},{\"type\":{\"label\":\")\"},\"range\":[57,58]}]",
        visitorKeys: _powerAssertVisitorKeys
      }));
    });
    it('#is', function () {
      var _rec7 = new _powerAssertRecorder();

      (0, _powerAssert.default)(_rec7._expr(_rec7._capt(_rec7._capt((0, _enzyme.shallow)(_react.default.createElement(_Foo.default, null)), "arguments/0/callee/object").is('.foo'), "arguments/0"), {
        content: "assert(shallow(<Foo />).is('.foo'))",
        filepath: "test/fixtures/React/fixture.js",
        line: 55,
        ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"shallow\",\"range\":[7,14]},\"arguments\":[{\"type\":\"JSXElement\",\"openingElement\":{\"type\":\"JSXOpeningElement\",\"name\":{\"type\":\"JSXIdentifier\",\"name\":\"Foo\",\"range\":[16,19]},\"attributes\":[],\"selfClosing\":true,\"range\":[15,22]},\"closingElement\":null,\"children\":[],\"range\":[15,22]}],\"range\":[7,23]},\"property\":{\"type\":\"Identifier\",\"name\":\"is\",\"range\":[24,26]},\"computed\":false,\"range\":[7,26]},\"arguments\":[{\"type\":\"StringLiteral\",\"value\":\".foo\",\"range\":[27,33]}],\"range\":[7,34]}],\"range\":[0,35]}",
        tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"shallow\",\"range\":[7,14]},{\"type\":{\"label\":\"(\"},\"range\":[14,15]},{\"type\":{\"label\":\"jsxTagStart\"},\"range\":[15,16]},{\"type\":{\"label\":\"jsxName\"},\"value\":\"Foo\",\"range\":[16,19]},{\"type\":{\"label\":\"/\"},\"value\":\"/\",\"range\":[20,21]},{\"type\":{\"label\":\"jsxTagEnd\"},\"range\":[21,22]},{\"type\":{\"label\":\")\"},\"range\":[22,23]},{\"type\":{\"label\":\".\"},\"range\":[23,24]},{\"type\":{\"label\":\"name\"},\"value\":\"is\",\"range\":[24,26]},{\"type\":{\"label\":\"(\"},\"range\":[26,27]},{\"type\":{\"label\":\"string\"},\"value\":\".foo\",\"range\":[27,33]},{\"type\":{\"label\":\")\"},\"range\":[33,34]},{\"type\":{\"label\":\")\"},\"range\":[34,35]}]",
        visitorKeys: _powerAssertVisitorKeys
      }));
    });
  });
  describe('#mount', function () {
    it('#find', function () {
      var _rec8 = new _powerAssertRecorder();

      (0, _powerAssert.default)(_rec8._expr(_rec8._capt(_rec8._capt(_rec8._capt(_rec8._capt((0, _enzyme.mount)(_react.default.createElement(_Foo.default, null)), "arguments/0/left/object/callee/object").find('.foo'), "arguments/0/left/object").length, "arguments/0/left") === 1, "arguments/0"), {
        content: "assert(mount(<Foo />).find('.foo').length === 1)",
        filepath: "test/fixtures/React/fixture.js",
        line: 60,
        ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"===\",\"left\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"mount\",\"range\":[7,12]},\"arguments\":[{\"type\":\"JSXElement\",\"openingElement\":{\"type\":\"JSXOpeningElement\",\"name\":{\"type\":\"JSXIdentifier\",\"name\":\"Foo\",\"range\":[14,17]},\"attributes\":[],\"selfClosing\":true,\"range\":[13,20]},\"closingElement\":null,\"children\":[],\"range\":[13,20]}],\"range\":[7,21]},\"property\":{\"type\":\"Identifier\",\"name\":\"find\",\"range\":[22,26]},\"computed\":false,\"range\":[7,26]},\"arguments\":[{\"type\":\"StringLiteral\",\"value\":\".foo\",\"range\":[27,33]}],\"range\":[7,34]},\"property\":{\"type\":\"Identifier\",\"name\":\"length\",\"range\":[35,41]},\"computed\":false,\"range\":[7,41]},\"right\":{\"type\":\"NumericLiteral\",\"value\":1,\"range\":[46,47]},\"range\":[7,47]}],\"range\":[0,48]}",
        tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"mount\",\"range\":[7,12]},{\"type\":{\"label\":\"(\"},\"range\":[12,13]},{\"type\":{\"label\":\"jsxTagStart\"},\"range\":[13,14]},{\"type\":{\"label\":\"jsxName\"},\"value\":\"Foo\",\"range\":[14,17]},{\"type\":{\"label\":\"/\"},\"value\":\"/\",\"range\":[18,19]},{\"type\":{\"label\":\"jsxTagEnd\"},\"range\":[19,20]},{\"type\":{\"label\":\")\"},\"range\":[20,21]},{\"type\":{\"label\":\".\"},\"range\":[21,22]},{\"type\":{\"label\":\"name\"},\"value\":\"find\",\"range\":[22,26]},{\"type\":{\"label\":\"(\"},\"range\":[26,27]},{\"type\":{\"label\":\"string\"},\"value\":\".foo\",\"range\":[27,33]},{\"type\":{\"label\":\")\"},\"range\":[33,34]},{\"type\":{\"label\":\".\"},\"range\":[34,35]},{\"type\":{\"label\":\"name\"},\"value\":\"length\",\"range\":[35,41]},{\"type\":{\"label\":\"==/!=\"},\"value\":\"===\",\"range\":[42,45]},{\"type\":{\"label\":\"num\"},\"value\":1,\"range\":[46,47]},{\"type\":{\"label\":\")\"},\"range\":[47,48]}]",
        visitorKeys: _powerAssertVisitorKeys
      }));
    });
  });
});
