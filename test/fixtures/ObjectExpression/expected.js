'use strict';

var _powerAssertRecorder = function () { var events = []; function _capt(value, espath) { events.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var captured = events; events = []; var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
    _rec = _powerAssertRecorder(),
    _rec2 = _powerAssertRecorder(),
    _rec3 = _powerAssertRecorder(),
    _rec4 = _powerAssertRecorder();

assert(_rec._expr(_rec._capt({ foo: _rec._capt(bar, 'arguments/0/properties/0/value'), hoge: _rec._capt(fuga, 'arguments/0/properties/1/value') }, 'arguments/0'), {
  content: 'assert({ foo: bar, hoge: fuga })',
  filepath: 'test/fixtures/ObjectExpression/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt(!_rec2._capt({ foo: _rec2._capt(_rec2._capt(bar, 'arguments/0/argument/properties/0/value/object').baz, 'arguments/0/argument/properties/0/value'), name: _rec2._capt(nameOf(_rec2._capt({ firstName: _rec2._capt(first, 'arguments/0/argument/properties/1/value/arguments/0/properties/0/value'), lastName: _rec2._capt(last, 'arguments/0/argument/properties/1/value/arguments/0/properties/1/value') }, 'arguments/0/argument/properties/1/value/arguments/0')), 'arguments/0/argument/properties/1/value') }, 'arguments/0/argument'), 'arguments/0'), {
  content: 'assert(!{ foo: bar.baz, name: nameOf({ firstName: first, lastName: last }) })',
  filepath: 'test/fixtures/ObjectExpression/fixture.js',
  line: 5
}));

assert.deepEqual(_rec3._expr(_rec3._capt({ foo: _rec3._capt(bar, 'arguments/0/properties/0/value'), hoge: _rec3._capt(fuga, 'arguments/0/properties/1/value') }, 'arguments/0'), {
  content: 'assert.deepEqual({ foo: bar, hoge: fuga }, { hoge: fuga, foo: bar })',
  filepath: 'test/fixtures/ObjectExpression/fixture.js',
  line: 7
}), _rec4._expr(_rec4._capt({ hoge: _rec4._capt(fuga, 'arguments/1/properties/0/value'), foo: _rec4._capt(bar, 'arguments/1/properties/1/value') }, 'arguments/1'), {
  content: 'assert.deepEqual({ foo: bar, hoge: fuga }, { hoge: fuga, foo: bar })',
  filepath: 'test/fixtures/ObjectExpression/fixture.js',
  line: 7
}));
