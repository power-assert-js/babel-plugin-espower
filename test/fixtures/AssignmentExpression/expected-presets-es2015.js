'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _powerAssertRecorder = function _powerAssertRecorder() { var captured = []; function _capt(value, espath) { captured.push({ value: value, espath: espath }); return value; } function _expr(value, args) { var source = { content: args.content, filepath: args.filepath, line: args.line }; if (args.generator) { source.generator = true; } if (args.async) { source.async = true; } return { powerAssertContext: { value: value, events: captured }, source: source }; } return { _capt: _capt, _expr: _expr }; },
    _rec = _powerAssertRecorder(),
    _rec2 = _powerAssertRecorder(),
    _rec3 = _powerAssertRecorder(),
    _rec4 = _powerAssertRecorder(),
    _rec5 = _powerAssertRecorder(),
    _rec6 = _powerAssertRecorder(),
    _rec7 = _powerAssertRecorder(),
    _rec6$_capt,
    _rec6$_capt2,
    _rec7$_capt,
    _rec7$_capt2;

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

assert(_rec6._expr(_rec6._capt((_rec6$_capt = _rec6._capt([3], 'arguments/0/right'), _rec6$_capt2 = _slicedToArray(_rec6$_capt, 1), x = _rec6$_capt2[0], _rec6$_capt), 'arguments/0'), {
  content: 'assert([x] = [3])',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 11
}));

assert(_rec7._expr(_rec7._capt((_rec7$_capt = _rec7._capt([_rec7._capt(foo, 'arguments/0/right/elements/0')], 'arguments/0/right'), _rec7$_capt2 = _slicedToArray(_rec7$_capt, 1), x = _rec7$_capt2[0], _rec7$_capt), 'arguments/0'), {
  content: 'assert([x] = [foo])',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 13
}));
