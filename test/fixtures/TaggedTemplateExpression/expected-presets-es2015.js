'use strict';

var _powerAssertRecorder = function _powerAssertRecorder() { var events = []; function _capt(value, espath) { events.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var captured = events; events = []; var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
    _rec = _powerAssertRecorder(),
    _rec2 = _powerAssertRecorder(),
    _rec3 = _powerAssertRecorder();

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
