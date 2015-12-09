'use strict';

var _powerAssertRecorder = function () { var events = []; function _capt(value, espath) { events.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var captured = events; events = []; var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
    _rec = _powerAssertRecorder(),
    _rec2 = _powerAssertRecorder(),
    _rec3 = _powerAssertRecorder(),
    _rec4 = _powerAssertRecorder(),
    _rec5 = _powerAssertRecorder();

assert(_rec._expr(_rec._capt(new Date(), 'arguments/0'), {
  content: 'assert(new Date())',
  filepath: 'test/fixtures/NewExpression/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt(new (_rec2._capt(_rec2._capt(foo, 'arguments/0/callee/object/object').bar, 'arguments/0/callee/object').Baz)(), 'arguments/0'), {
  content: 'assert(new foo.bar.Baz())',
  filepath: 'test/fixtures/NewExpression/fixture.js',
  line: 5
}));

assert(_rec3._expr(_rec3._capt(!_rec3._capt(new Array(_rec3._capt(foo, 'arguments/0/argument/arguments/0'), _rec3._capt(bar, 'arguments/0/argument/arguments/1'), _rec3._capt(baz, 'arguments/0/argument/arguments/2')), 'arguments/0/argument'), 'arguments/0'), {
  content: 'assert(!new Array(foo, bar, baz))',
  filepath: 'test/fixtures/NewExpression/fixture.js',
  line: 7
}));

assert.notEqual(_rec4._expr(_rec4._capt(new Date(), 'arguments/0'), {
  content: 'assert.notEqual(new Date(), new Date(\'2013-01-12\'))',
  filepath: 'test/fixtures/NewExpression/fixture.js',
  line: 9
}), _rec5._expr(_rec5._capt(new Date('2013-01-12'), 'arguments/1'), {
  content: 'assert.notEqual(new Date(), new Date(\'2013-01-12\'))',
  filepath: 'test/fixtures/NewExpression/fixture.js',
  line: 9
}));
