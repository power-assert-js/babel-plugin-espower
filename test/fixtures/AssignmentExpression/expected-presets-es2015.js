'use strict';

var _assert$_capt, _assert$_capt2, _assert$_capt3, _assert$_capt4;

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

assert(assert._expr(assert._capt(counter += 1, 'arguments/0'), {
  content: 'assert(counter += 1)',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 3
}));

assert(assert._expr(assert._capt(dog.age += 1, 'arguments/0'), {
  content: 'assert(dog.age += 1)',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 5
}));

assert(assert._expr(assert._capt(dog.age += 1, 'arguments/0'), {
  content: 'assert(dog.age += 1)',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 7
}));

assert.strictEqual(assert._expr(assert._capt(dog.age += 1, 'arguments/0'), {
  content: 'assert.strictEqual(dog.age += 1, three)',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 9
}), assert._expr(assert._capt(three, 'arguments/1'), {
  content: 'assert.strictEqual(dog.age += 1, three)',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 9
}));

assert(assert._expr(assert._capt((_assert$_capt = assert._capt([3], 'arguments/0/right'), _assert$_capt2 = _slicedToArray(_assert$_capt, 1), x = _assert$_capt2[0], _assert$_capt), 'arguments/0'), {
  content: 'assert([x] = [3])',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 11
}));

assert(assert._expr(assert._capt((_assert$_capt3 = assert._capt([assert._capt(foo, 'arguments/0/right/elements/0')], 'arguments/0/right'), _assert$_capt4 = _slicedToArray(_assert$_capt3, 1), x = _assert$_capt4[0], _assert$_capt3), 'arguments/0'), {
  content: 'assert([x] = [foo])',
  filepath: 'test/fixtures/AssignmentExpression/fixture.js',
  line: 13
}));
