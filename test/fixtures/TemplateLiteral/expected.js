'use strict';

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder();

assert(_rec._expr(_rec._capt(`Hello`, 'arguments/0'), {
  content: 'assert(`Hello`)',
  filepath: 'test/fixtures/TemplateLiteral/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt(`Hello, ${_rec2._capt(nickname, 'arguments/0/expressions/0')}`, 'arguments/0'), {
  content: 'assert(`Hello, ${nickname}`)',
  filepath: 'test/fixtures/TemplateLiteral/fixture.js',
  line: 5
}));

assert(_rec3._expr(_rec3._capt(`Hello, ${_rec3._capt(_rec3._capt(user, 'arguments/0/expressions/0/object').nickname, 'arguments/0/expressions/0')}`, 'arguments/0'), {
  content: 'assert(`Hello, ${user.nickname}`)',
  filepath: 'test/fixtures/TemplateLiteral/fixture.js',
  line: 7
}));
