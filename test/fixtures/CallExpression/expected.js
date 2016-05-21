'use strict';

var _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { return { powerAssertContext: { value: value, events: this.captured }, source: source }; }; return PowerAssertRecorder; }(),
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

assert(_rec._expr(_rec._capt(func(), 'arguments/0'), {
  content: 'assert(func())',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 3
}));

assert(_rec2._expr(_rec2._capt(_rec2._capt(obj, 'arguments/0/callee/object').age(), 'arguments/0'), {
  content: 'assert(obj.age())',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 5
}));

assert(_rec3._expr(_rec3._capt(isFalsy(_rec3._capt(positiveInt, 'arguments/0/arguments/0')), 'arguments/0'), {
  content: 'assert(isFalsy(positiveInt))',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 7
}));

assert(_rec4._expr(_rec4._capt(_rec4._capt(foo, 'arguments/0/callee/object')[_rec4._capt(propName, 'arguments/0/callee/property')](), 'arguments/0'), {
  content: 'assert(foo[propName]())',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 9
}));

assert(_rec5._expr(_rec5._capt(_rec5._capt(foo, 'arguments/0/callee/object')[_rec5._capt(_rec5._capt(hoge, 'arguments/0/callee/property/object')[_rec5._capt(_rec5._capt(fuga, 'arguments/0/callee/property/property/object')[_rec5._capt(piyo, 'arguments/0/callee/property/property/property')], 'arguments/0/callee/property/property')], 'arguments/0/callee/property')](), 'arguments/0'), {
  content: 'assert(foo[hoge[fuga[piyo]]]())',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 11
}));

assert(_rec6._expr(_rec6._capt(_rec6._capt(sum(_rec6._capt(one, 'arguments/0/left/arguments/0'), _rec6._capt(two, 'arguments/0/left/arguments/1'), _rec6._capt(three, 'arguments/0/left/arguments/2')), 'arguments/0/left') === _rec6._capt(seven, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(sum(one, two, three) === seven)',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 13
}));

assert(_rec7._expr(_rec7._capt(_rec7._capt(sum(_rec7._capt(sum(_rec7._capt(one, 'arguments/0/left/arguments/0/arguments/0'), _rec7._capt(two, 'arguments/0/left/arguments/0/arguments/1')), 'arguments/0/left/arguments/0'), _rec7._capt(three, 'arguments/0/left/arguments/1')), 'arguments/0/left') === _rec7._capt(sum(_rec7._capt(sum(_rec7._capt(two, 'arguments/0/right/arguments/0/arguments/0'), _rec7._capt(three, 'arguments/0/right/arguments/0/arguments/1')), 'arguments/0/right/arguments/0'), _rec7._capt(seven, 'arguments/0/right/arguments/1')), 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(sum(sum(one, two), three) === sum(sum(two, three), seven))',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 15
}));

assert(_rec8._expr(_rec8._capt(_rec8._capt(_rec8._capt(_rec8._capt(math, 'arguments/0/left/callee/object/object').calc, 'arguments/0/left/callee/object').sum(_rec8._capt(one, 'arguments/0/left/arguments/0'), _rec8._capt(two, 'arguments/0/left/arguments/1'), _rec8._capt(three, 'arguments/0/left/arguments/2')), 'arguments/0/left') === _rec8._capt(seven, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(math.calc.sum(one, two, three) === seven)',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 17
}));

assert(_rec9._expr(_rec9._capt(_rec9._capt(_rec9._capt(three, 'arguments/0/left/left') * _rec9._capt(_rec9._capt(seven, 'arguments/0/left/right/left') * _rec9._capt(ten, 'arguments/0/left/right/right'), 'arguments/0/left/right'), 'arguments/0/left') === _rec9._capt(three, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(three * (seven * ten) === three)',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 19
}));

assert(_rec10._expr(_rec10._capt(!_rec10._capt(concat(_rec10._capt(fuga, 'arguments/0/argument/arguments/0'), _rec10._capt(piyo, 'arguments/0/argument/arguments/1')), 'arguments/0/argument'), 'arguments/0'), {
  content: 'assert(!concat(fuga, piyo))',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 21
}));

assert.strictEqual(_rec11._expr(_rec11._capt(_rec11._capt(three, 'arguments/0/left') * _rec11._capt(_rec11._capt(seven, 'arguments/0/right/left') * _rec11._capt(ten, 'arguments/0/right/right'), 'arguments/0/right'), 'arguments/0'), {
  content: 'assert.strictEqual(three * (seven * ten), math.calc.sum(one, two, three))',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 23
}), _rec12._expr(_rec12._capt(_rec12._capt(_rec12._capt(math, 'arguments/1/callee/object/object').calc, 'arguments/1/callee/object').sum(_rec12._capt(one, 'arguments/1/arguments/0'), _rec12._capt(two, 'arguments/1/arguments/1'), _rec12._capt(three, 'arguments/1/arguments/2')), 'arguments/1'), {
  content: 'assert.strictEqual(three * (seven * ten), math.calc.sum(one, two, three))',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 23
}));
