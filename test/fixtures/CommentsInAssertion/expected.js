'use strict';

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder();

assert.equal(
// first comment
_rec._expr(_rec._capt(str, 'arguments/0'), {
    content: 'assert.equal(str, anotherStr)',
    filepath: 'test/fixtures/CommentsInAssertion/fixture.js',
    line: 3
}),
// second comment
_rec2._expr(_rec2._capt(anotherStr, 'arguments/1'), {
    content: 'assert.equal(str, anotherStr)',
    filepath: 'test/fixtures/CommentsInAssertion/fixture.js',
    line: 3
})
// last comment
);
