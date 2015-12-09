'use strict';

var _powerAssertRecorder = function _powerAssertRecorder() { var events = []; function _capt(value, espath) { events.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var captured = events; events = []; var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
    _rec = _powerAssertRecorder(),
    _rec2 = _powerAssertRecorder(),
    _rec3 = _powerAssertRecorder(),
    _rec4 = _powerAssertRecorder();

assert(false);

assert(0);

assert.equal(1, 0);

assert(false, 'message');

assert(false, messageStr);

assert.equal(_rec._expr(_rec._capt(foo, 'arguments/0'), {
  content: 'assert.equal(foo, \'bar\', \'msg\')',
  filepath: 'test/fixtures/Literal/fixture.js',
  line: 13
}), 'bar', 'msg');

assert(_rec2._expr(_rec2._capt(/^not/.exec(_rec2._capt(str, 'arguments/0/arguments/0')), 'arguments/0'), {
  content: 'assert(/^not/.exec(str))',
  filepath: 'test/fixtures/Literal/fixture.js',
  line: 15
}));

assert(_rec3._expr(_rec3._capt(_rec3._capt(fuga, 'arguments/0/left') !== 'ふが', 'arguments/0'), {
  content: 'assert(fuga !== \'ふが\')',
  filepath: 'test/fixtures/Literal/fixture.js',
  line: 17
}));

assert(_rec4._expr(_rec4._capt('ほげ' !== 'ふが', 'arguments/0'), {
  content: 'assert(\'ほげ\' !== \'ふが\')',
  filepath: 'test/fixtures/Literal/fixture.js',
  line: 19
}));

assert(503);

assert(503);
