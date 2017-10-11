'use strict';

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder(),
    _rec5 = new _powerAssertRecorder(),
    _rec6 = new _powerAssertRecorder(),
    _rec7 = new _powerAssertRecorder(),
    _rec8 = new _powerAssertRecorder(),
    _rec9 = new _powerAssertRecorder(),
    _rec10 = new _powerAssertRecorder(),
    _rec11 = new _powerAssertRecorder(),
    _rec12 = new _powerAssertRecorder();

assert(_rec._expr(_rec._capt(falsyStr, "arguments/0"), {
  content: "assert(falsyStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 3
}));
assert(_rec2._expr(_rec2._capt(falsyStr, "arguments/0"), {
  content: "assert(falsyStr, messageStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 5
}), messageStr);
assert.equal(_rec3._expr(_rec3._capt(str, "arguments/0"), {
  content: "assert.equal(str, anotherStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 7
}), _rec4._expr(_rec4._capt(anotherStr, "arguments/1"), {
  content: "assert.equal(str, anotherStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 7
}));
assert.equal(_rec5._expr(_rec5._capt(str, "arguments/0"), {
  content: "assert.equal(str, anotherStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 9
}), _rec6._expr(_rec6._capt(anotherStr, "arguments/1"), {
  content: "assert.equal(str, anotherStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 9
}));
assert.equal(_rec7._expr(_rec7._capt(str, "arguments/0"), {
  content: "assert.equal(str, anotherStr, messageStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 14
}), _rec8._expr(_rec8._capt(anotherStr, "arguments/1"), {
  content: "assert.equal(str, anotherStr, messageStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 14
}), messageStr);
assert.equal(_rec9._expr(_rec9._capt(str, "arguments/0"), {
  content: "assert.equal(str, anotherStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 16
}), _rec10._expr(_rec10._capt(anotherStr, "arguments/1"), {
  content: "assert.equal(str, anotherStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 16
}));
assert.equal(_rec11._expr(_rec11._capt(str, "arguments/0"), {
  content: "assert.equal(str, yetAnotherStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 21
}), _rec12._expr(_rec12._capt(yetAnotherStr, "arguments/1"), {
  content: "assert.equal(str, yetAnotherStr)",
  filepath: "test/fixtures/Identifier/fixture.js",
  line: 21
}));
