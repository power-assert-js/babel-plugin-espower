'use strict';

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { return { powerAssertContext: { value: value, events: this.captured }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder();

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
  content: 'assert(fuga !== \'\u3075\u304C\')',
  filepath: 'test/fixtures/Literal/fixture.js',
  line: 17
}));

assert(_rec4._expr(_rec4._capt('ほげ' !== 'ふが', 'arguments/0'), {
  content: 'assert(\'\u307B\u3052\' !== \'\u3075\u304C\')',
  filepath: 'test/fixtures/Literal/fixture.js',
  line: 19
}));

assert(0b111110111);

assert(0o767);
