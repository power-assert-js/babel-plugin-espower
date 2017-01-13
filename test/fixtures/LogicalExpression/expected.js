'use strict';

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder(),
    _rec5 = new _powerAssertRecorder(),
    _rec6 = new _powerAssertRecorder();

assert(_rec._expr(_rec._capt(_rec._capt(5 < _rec._capt(actual, 'arguments/0/left/right'), 'arguments/0/left') && _rec._capt(_rec._capt(actual, 'arguments/0/right/left') < 13, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(5 < actual && actual < 13)',
  filepath: 'test/fixtures/LogicalExpression/fixture.js',
  line: 3
}));

assert.ok(_rec2._expr(_rec2._capt(_rec2._capt(_rec2._capt(actual, 'arguments/0/left/left') < 5, 'arguments/0/left') || _rec2._capt(13 < _rec2._capt(actual, 'arguments/0/right/right'), 'arguments/0/right'), 'arguments/0'), {
  content: 'assert.ok(actual < 5 || 13 < actual)',
  filepath: 'test/fixtures/LogicalExpression/fixture.js',
  line: 5
}));

assert(_rec3._expr(_rec3._capt(_rec3._capt(2 > _rec3._capt(actual, 'arguments/0/left/right'), 'arguments/0/left') && _rec3._capt(_rec3._capt(actual, 'arguments/0/right/left') < 13, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(2 > actual && actual < 13)',
  filepath: 'test/fixtures/LogicalExpression/fixture.js',
  line: 7
}));

assert(_rec4._expr(_rec4._capt(_rec4._capt(2 > _rec4._capt(actual, 'arguments/0/left/right'), 'arguments/0/left') && _rec4._capt(_rec4._capt(actual, 'arguments/0/right/left') < 13, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(2 > actual && actual < 13)',
  filepath: 'test/fixtures/LogicalExpression/fixture.js',
  line: 9
}));

assert.equal(_rec5._expr(_rec5._capt(_rec5._capt(5 < _rec5._capt(actual, 'arguments/0/left/right'), 'arguments/0/left') && _rec5._capt(_rec5._capt(actual, 'arguments/0/right/left') < 13, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert.equal(5 < actual && actual < 13, falsy)',
  filepath: 'test/fixtures/LogicalExpression/fixture.js',
  line: 11
}), _rec6._expr(_rec6._capt(falsy, 'arguments/1'), {
  content: 'assert.equal(5 < actual && actual < 13, falsy)',
  filepath: 'test/fixtures/LogicalExpression/fixture.js',
  line: 11
}));
