'use strict';

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder(),
    _rec5 = new _powerAssertRecorder(),
    _rec6 = new _powerAssertRecorder();

assert((2, 1, 0));

assert(_rec2._expr(_rec2._capt((_rec2._capt(foo, 'arguments/0/left/expressions/0'), _rec2._capt(bar, 'arguments/0/left/expressions/1')) === _rec2._capt(baz, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert((foo, bar) === baz)',
  filepath: 'test/fixtures/SequenceExpression/fixture.js',
  line: 5
}));

assert(_rec3._expr(_rec3._capt(toto((_rec3._capt(tata, 'arguments/0/arguments/0/expressions/0'), _rec3._capt(titi, 'arguments/0/arguments/0/expressions/1'))), 'arguments/0'), {
  content: 'assert(toto((tata, titi)))',
  filepath: 'test/fixtures/SequenceExpression/fixture.js',
  line: 7
}));

assert(_rec4._expr((_rec4._capt(foo, 'arguments/0/expressions/0'), (_rec4._capt(bar, 'arguments/0/expressions/1/expressions/0'), _rec4._capt(baz, 'arguments/0/expressions/1/expressions/1'))), {
  content: 'assert((foo, (bar, baz)))',
  filepath: 'test/fixtures/SequenceExpression/fixture.js',
  line: 9
}));

assert(_rec5._expr((((((_rec5._capt(foo, 'arguments/0/expressions/0/expressions/0/expressions/0/expressions/0/expressions/0'), _rec5._capt(bar, 'arguments/0/expressions/0/expressions/0/expressions/0/expressions/0/expressions/1')), _rec5._capt(baz, 'arguments/0/expressions/0/expressions/0/expressions/0/expressions/1')), _rec5._capt(toto, 'arguments/0/expressions/0/expressions/0/expressions/1')), _rec5._capt(tata, 'arguments/0/expressions/0/expressions/1')), _rec5._capt(titi, 'arguments/0/expressions/1')), {
  content: 'assert((((((foo, bar), baz), toto), tata), titi))',
  filepath: 'test/fixtures/SequenceExpression/fixture.js',
  line: 11
}));

assert(_rec6._expr((_rec6._capt(y = _rec6._capt(x, 'arguments/0/expressions/0/right'), 'arguments/0/expressions/0'), _rec6._capt(z, 'arguments/0/expressions/1')), {
  content: 'assert((y = x, z))',
  filepath: 'test/fixtures/SequenceExpression/fixture.js',
  line: 13
}));
