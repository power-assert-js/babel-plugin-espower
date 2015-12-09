'use strict';

var _powerAssertRecorder = function () { var events = []; function _capt(value, espath) { events.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var captured = events; events = []; var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
    _rec = _powerAssertRecorder(),
    _rec2 = _powerAssertRecorder(),
    _rec3 = _powerAssertRecorder();

assert(_rec._expr(_rec._capt(fn`a${ 1 }`, 'arguments/0'), {
  content: 'assert(fn`a${ 1 }`)',
  filepath: 'test/fixtures/TaggedTemplateExpression/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt(fn`a${ _rec2._capt(foo, 'arguments/0/quasi/expressions/0') }b${ _rec2._capt(bar, 'arguments/0/quasi/expressions/1') }c${ _rec2._capt(baz, 'arguments/0/quasi/expressions/2') }`, 'arguments/0'), {
  content: 'assert(fn`a${ foo }b${ bar }c${ baz }`)',
  filepath: 'test/fixtures/TaggedTemplateExpression/fixture.js',
  line: 5
}));

assert(_rec3._expr(_rec3._capt(fn`driver ${ _rec3._capt(_rec3._capt(bob, 'arguments/0/quasi/expressions/0/object').name, 'arguments/0/quasi/expressions/0') }, navigator ${ _rec3._capt(_rec3._capt(alice, 'arguments/0/quasi/expressions/1/callee/object').getName(), 'arguments/0/quasi/expressions/1') }`, 'arguments/0'), {
  content: 'assert(fn`driver ${ bob.name }, navigator ${ alice.getName() }`)',
  filepath: 'test/fixtures/TaggedTemplateExpression/fixture.js',
  line: 7
}));
