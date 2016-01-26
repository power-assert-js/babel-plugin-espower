'use strict';

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, args) { return { powerAssertContext: { value: value, events: this.captured }, source: { content: args.content, filepath: args.filepath, line: args.line, generator: !!args.generator, async: !!args.async } }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder(),
    _rec5 = new _powerAssertRecorder(),
    _rec6 = new _powerAssertRecorder(),
    _rec7 = new _powerAssertRecorder();

assert(_rec._expr(_rec._capt(counter += 1, 'arguments/0'), {
  content: 'assert(counter += 1)',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt(dog.age += 1, 'arguments/0'), {
  content: 'assert(dog.age += 1)',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 5
}));

assert(_rec3._expr(_rec3._capt(dog.age += 1, 'arguments/0'), {
  content: 'assert(dog.age += 1)',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 7
}));

assert.strictEqual(_rec4._expr(_rec4._capt(dog.age += 1, 'arguments/0'), {
  content: 'assert.strictEqual(dog.age += 1, three)',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 9
}), _rec5._expr(_rec5._capt(three, 'arguments/1'), {
  content: 'assert.strictEqual(dog.age += 1, three)',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 9
}));

assert(_rec6._expr(_rec6._capt([x] = _rec6._capt([3], 'arguments/0/right'), 'arguments/0'), {
  content: 'assert([x] = [3])',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 11
}));

assert(_rec7._expr(_rec7._capt([x] = _rec7._capt([_rec7._capt(foo, 'arguments/0/right/elements/0')], 'arguments/0/right'), 'arguments/0'), {
  content: 'assert([x] = [foo])',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 13
}));
