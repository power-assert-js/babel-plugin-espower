'use strict';

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { return { powerAssertContext: { value: value, events: this.captured }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder();

assert(function (a, b) {
  return a + b;
});

assert(_rec._expr(_rec._capt(_rec._capt(baz, 'arguments/0/left') === _rec._capt(function (a, b) {
  return a + b;
}(_rec._capt(foo, 'arguments/0/right/arguments/0'), _rec._capt(bar, 'arguments/0/right/arguments/1')), 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(baz === function (a, b) { return a + b; }(foo, bar))',
  filepath: 'test/fixtures/FunctionExpression/fixture.js',
  line: 5
}));
