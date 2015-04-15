'use strict';

var _temp, _temp2, _temp3, _temp32;

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } };

assert(assert._expr(assert._capt(counter += 1, 'arguments/0'), {
  content: 'assert(counter += 1)',
  filepath: 'fixtures/AssignmentExpression/fixture.js',
  line: 3
}));

assert(assert._expr(assert._capt(dog.age += 1, 'arguments/0'), {
  content: 'assert(dog.age += 1)',
  filepath: 'fixtures/AssignmentExpression/fixture.js',
  line: 5
}));

assert(assert._expr(assert._capt(dog.age += 1, 'arguments/0'), {
  content: 'assert(dog.age += 1)',
  filepath: 'fixtures/AssignmentExpression/fixture.js',
  line: 7
}));

assert.strictEqual(assert._expr(assert._capt(dog.age += 1, 'arguments/0'), {
  content: 'assert.strictEqual(dog.age += 1, three)',
  filepath: 'fixtures/AssignmentExpression/fixture.js',
  line: 9
}), assert._expr(assert._capt(three, 'arguments/1'), {
  content: 'assert.strictEqual(dog.age += 1, three)',
  filepath: 'fixtures/AssignmentExpression/fixture.js',
  line: 9
}));

assert(assert._expr(assert._capt((_temp = assert._capt([3], 'arguments/0/right'), _temp2 = _slicedToArray(_temp, 1), x = _temp2[0], _temp), 'arguments/0'), {
  content: 'assert([x] = [3])',
  filepath: 'fixtures/AssignmentExpression/fixture.js',
  line: 11
}));

assert(assert._expr(assert._capt((_temp3 = assert._capt([assert._capt(foo, 'arguments/0/right/elements/0')], 'arguments/0/right'), _temp32 = _slicedToArray(_temp3, 1), x = _temp32[0], _temp3), 'arguments/0'), {
  content: 'assert([x] = [foo])',
  filepath: 'fixtures/AssignmentExpression/fixture.js',
  line: 13
}));
