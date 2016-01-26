'use strict';

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, args) { return { powerAssertContext: { value: value, events: this.captured }, source: { content: args.content, filepath: args.filepath, line: args.line, generator: !!args.generator, async: !!args.async } }; }; return PowerAssertRecorder; }();

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
