'use strict';

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }();

function* gen(a) {
  var _rec = new _powerAssertRecorder();

  assert(_rec._expr(_rec._capt(_rec._capt((yield a), 'arguments/0/left') === 3, 'arguments/0'), {
    content: 'assert((yield a) === 3)',
    filepath: 'test/fixtures/YieldExpression/fixture.js',
    line: 4,
    generator: true
  }));
}

// function notGen(a){
//   assert((yield (a)) === 3);
// }
