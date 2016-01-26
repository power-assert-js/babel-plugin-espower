'use strict';

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, args) { return { powerAssertContext: { value: value, events: this.captured }, source: { content: args.content, filepath: args.filepath, line: args.line, generator: !!args.generator, async: !!args.async } }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder();

assert(_rec._expr(_rec._capt(++foo, 'arguments/0'), {
  content: 'assert(++foo)',
  filepath: 'test/fixtures/UpdateExpression/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt(bar--, 'arguments/0'), {
  content: 'assert(bar--)',
  filepath: 'test/fixtures/UpdateExpression/fixture.js',
  line: 5
}));

assert.strictEqual(_rec3._expr(_rec3._capt(++foo, 'arguments/0'), {
  content: 'assert.strictEqual(++foo, bar--)',
  filepath: 'test/fixtures/UpdateExpression/fixture.js',
  line: 7
}), _rec4._expr(_rec4._capt(bar--, 'arguments/1'), {
  content: 'assert.strictEqual(++foo, bar--)',
  filepath: 'test/fixtures/UpdateExpression/fixture.js',
  line: 7
}));
