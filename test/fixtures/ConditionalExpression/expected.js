'use strict';

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder(),
    _rec5 = new _powerAssertRecorder();

assert(_rec._expr(_rec._capt(foo, "arguments/0/test") ? _rec._capt(bar, "arguments/0/consequent") : _rec._capt(baz, "arguments/0/alternate"), {
  content: "assert(foo ? bar : baz)",
  filepath: "test/fixtures/ConditionalExpression/fixture.js",
  line: 3
}));
assert(_rec2._expr(_rec2._capt(falsy, "arguments/0/test") ? _rec2._capt(truthy, "arguments/0/consequent") : _rec2._capt(truthy, "arguments/0/alternate/test") ? _rec2._capt(anotherFalsy, "arguments/0/alternate/consequent") : _rec2._capt(truthy, "arguments/0/alternate/alternate"), {
  content: "assert(falsy ? truthy : truthy ? anotherFalsy : truthy)",
  filepath: "test/fixtures/ConditionalExpression/fixture.js",
  line: 5
}));
assert(_rec3._expr(_rec3._capt(foo(), "arguments/0/test") ? _rec3._capt(_rec3._capt(bar, "arguments/0/consequent/object").baz, "arguments/0/consequent") : _rec3._capt(typeof goo, "arguments/0/alternate"), {
  content: "assert(foo() ? bar.baz : typeof goo)",
  filepath: "test/fixtures/ConditionalExpression/fixture.js",
  line: 7
}));
assert.equal(_rec4._expr(_rec4._capt(foo, "arguments/0/test") ? _rec4._capt(bar, "arguments/0/consequent") : _rec4._capt(baz, "arguments/0/alternate"), {
  content: "assert.equal(foo ? bar : baz, falsy ? truthy : truthy ? anotherFalsy : truthy)",
  filepath: "test/fixtures/ConditionalExpression/fixture.js",
  line: 9
}), _rec5._expr(_rec5._capt(falsy, "arguments/1/test") ? _rec5._capt(truthy, "arguments/1/consequent") : _rec5._capt(truthy, "arguments/1/alternate/test") ? _rec5._capt(anotherFalsy, "arguments/1/alternate/consequent") : _rec5._capt(truthy, "arguments/1/alternate/alternate"), {
  content: "assert.equal(foo ? bar : baz, falsy ? truthy : truthy ? anotherFalsy : truthy)",
  filepath: "test/fixtures/ConditionalExpression/fixture.js",
  line: 9
}));
