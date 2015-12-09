'use strict';

var _powerAssertRecorder = function () { var events = []; function _capt(value, espath) { events.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var captured = events; events = []; var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
    _rec = _powerAssertRecorder(),
    _rec2 = _powerAssertRecorder(),
    _rec3 = _powerAssertRecorder(),
    _rec4 = _powerAssertRecorder(),
    _rec5 = _powerAssertRecorder(),
    _rec6 = _powerAssertRecorder(),
    _rec7 = _powerAssertRecorder(),
    _rec8 = _powerAssertRecorder();

assert(_rec._expr(_rec._capt(4 !== 4, 'arguments/0'), {
  content: 'assert(4 !== 4)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt(_rec2._capt(fuga, 'arguments/0/left') !== 4, 'arguments/0'), {
  content: 'assert(fuga !== 4)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 5
}));

assert(_rec3._expr(_rec3._capt(_rec3._capt(fuga, 'arguments/0/left') === _rec3._capt(piyo, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(fuga === piyo)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 7
}));

assert(_rec4._expr(_rec4._capt(_rec4._capt(fuga, 'arguments/0/left') === _rec4._capt(piyo, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(fuga === piyo)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 9
}));

assert(_rec5._expr(_rec5._capt(_rec5._capt(fuga, 'arguments/0/left') === _rec5._capt(piyo, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(fuga === piyo)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 13
}));

assert(_rec6._expr(_rec6._capt(_rec6._capt(fuga, 'arguments/0/left') !== _rec6._capt(piyo, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(fuga !== piyo)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 15
}));

assert.ok(_rec7._expr(_rec7._capt(_rec7._capt(hoge, 'arguments/0/left') === _rec7._capt(fuga, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert.ok(hoge === fuga, \'comment\')',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 17
}), 'comment');

assert(_rec8._expr(_rec8._capt(_rec8._capt(_rec8._capt(ary1, 'arguments/0/left/object').length, 'arguments/0/left') === _rec8._capt(_rec8._capt(ary2, 'arguments/0/right/object').length, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(ary1.length === ary2.length)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 19
}));
