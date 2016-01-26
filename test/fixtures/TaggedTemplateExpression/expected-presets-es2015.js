'use strict';

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, args) { return { powerAssertContext: { value: value, events: this.captured }, source: { content: args.content, filepath: args.filepath, line: args.line, generator: !!args.generator, async: !!args.async } }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder();

var _templateObject = _taggedTemplateLiteral(['a', ''], ['a', '']),
    _templateObject2 = _taggedTemplateLiteral(['a', 'b', 'c', ''], ['a', 'b', 'c', '']),
    _templateObject3 = _taggedTemplateLiteral(['driver ', ', navigator ', ''], ['driver ', ', navigator ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

assert(_rec._expr(_rec._capt(fn(_templateObject, 1), 'arguments/0'), {
  content: 'assert(fn`a${ 1 }`)',
  filepath: 'test/fixtures/TaggedTemplateExpression/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt(fn(_templateObject2, _rec2._capt(foo, 'arguments/0/quasi/expressions/0'), _rec2._capt(bar, 'arguments/0/quasi/expressions/1'), _rec2._capt(baz, 'arguments/0/quasi/expressions/2')), 'arguments/0'), {
  content: 'assert(fn`a${ foo }b${ bar }c${ baz }`)',
  filepath: 'test/fixtures/TaggedTemplateExpression/fixture.js',
  line: 5
}));

assert(_rec3._expr(_rec3._capt(fn(_templateObject3, _rec3._capt(_rec3._capt(bob, 'arguments/0/quasi/expressions/0/object').name, 'arguments/0/quasi/expressions/0'), _rec3._capt(_rec3._capt(alice, 'arguments/0/quasi/expressions/1/callee/object').getName(), 'arguments/0/quasi/expressions/1')), 'arguments/0'), {
  content: 'assert(fn`driver ${ bob.name }, navigator ${ alice.getName() }`)',
  filepath: 'test/fixtures/TaggedTemplateExpression/fixture.js',
  line: 7
}));
