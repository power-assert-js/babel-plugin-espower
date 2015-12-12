'use strict';

var _powerAssertRecorder = function () { var captured = []; function _capt(value, espath) { captured.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
    _rec = _powerAssertRecorder(),
    _rec2 = _powerAssertRecorder(),
    _rec3 = _powerAssertRecorder(),
    _rec4 = _powerAssertRecorder(),
    _rec5 = _powerAssertRecorder();

assert(_rec._expr(_rec._capt({ [_rec._capt(num, 'arguments/0/properties/0/key')]: _rec._capt(foo, 'arguments/0/properties/0/value') }, 'arguments/0'), {
  content: 'assert({ [num]: foo })',
  filepath: 'test/fixtures/Property/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt({ [_rec2._capt('prop_' + _rec2._capt((() => bar())(), 'arguments/0/properties/0/key/right'), 'arguments/0/properties/0/key')]: 42 }, 'arguments/0'), {
  content: 'assert({ [\'prop_\' + (() => bar())()]: 42 })',
  filepath: 'test/fixtures/Property/fixture.js',
  line: 5
}));

assert(_rec3._expr(_rec3._capt({ [_rec3._capt(`prop_${ _rec3._capt(generate(_rec3._capt(seed, 'arguments/0/properties/0/key/expressions/0/arguments/0')), 'arguments/0/properties/0/key/expressions/0') }`, 'arguments/0/properties/0/key')]: _rec3._capt(foo, 'arguments/0/properties/0/value') }, 'arguments/0'), {
  content: 'assert({ [`prop_${ generate(seed) }`]: foo })',
  filepath: 'test/fixtures/Property/fixture.js',
  line: 7
}));

assert(_rec4._expr(_rec4._capt({ foo }, 'arguments/0'), {
  content: 'assert({ foo })',
  filepath: 'test/fixtures/Property/fixture.js',
  line: 9
}));

assert(_rec5._expr(_rec5._capt({ foo, bar: _rec5._capt(baz, 'arguments/0/properties/1/value') }, 'arguments/0'), {
  content: 'assert({ foo, bar: baz })',
  filepath: 'test/fixtures/Property/fixture.js',
  line: 11
}));
