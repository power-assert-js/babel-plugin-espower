'use strict';

assert(assert._expr(assert._capt(func(), 'arguments/0'), {
  content: 'assert(func())',
  filepath: 'fixtures/CallExpression/fixture.js',
  line: 3
}));

assert(assert._expr(assert._capt(assert._capt(obj, 'arguments/0/callee/object').age(), 'arguments/0'), {
  content: 'assert(obj.age())',
  filepath: 'fixtures/CallExpression/fixture.js',
  line: 5
}));

assert(assert._expr(assert._capt(isFalsy(assert._capt(positiveInt, 'arguments/0/arguments/0')), 'arguments/0'), {
  content: 'assert(isFalsy(positiveInt))',
  filepath: 'fixtures/CallExpression/fixture.js',
  line: 7
}));

assert(assert._expr(assert._capt(assert._capt(foo, 'arguments/0/callee/object')[assert._capt(propName, 'arguments/0/callee/property')](), 'arguments/0'), {
  content: 'assert(foo[propName]())',
  filepath: 'fixtures/CallExpression/fixture.js',
  line: 9
}));

assert(assert._expr(assert._capt(assert._capt(foo, 'arguments/0/callee/object')[assert._capt(assert._capt(hoge, 'arguments/0/callee/property/object')[assert._capt(assert._capt(fuga, 'arguments/0/callee/property/property/object')[assert._capt(piyo, 'arguments/0/callee/property/property/property')], 'arguments/0/callee/property/property')], 'arguments/0/callee/property')](), 'arguments/0'), {
  content: 'assert(foo[hoge[fuga[piyo]]]())',
  filepath: 'fixtures/CallExpression/fixture.js',
  line: 11
}));

assert(assert._expr(assert._capt(assert._capt(sum(assert._capt(one, 'arguments/0/left/arguments/0'), assert._capt(two, 'arguments/0/left/arguments/1'), assert._capt(three, 'arguments/0/left/arguments/2')), 'arguments/0/left') === assert._capt(seven, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(sum(one, two, three) === seven)',
  filepath: 'fixtures/CallExpression/fixture.js',
  line: 13
}));

assert(assert._expr(assert._capt(assert._capt(sum(assert._capt(sum(assert._capt(one, 'arguments/0/left/arguments/0/arguments/0'), assert._capt(two, 'arguments/0/left/arguments/0/arguments/1')), 'arguments/0/left/arguments/0'), assert._capt(three, 'arguments/0/left/arguments/1')), 'arguments/0/left') === assert._capt(sum(assert._capt(sum(assert._capt(two, 'arguments/0/right/arguments/0/arguments/0'), assert._capt(three, 'arguments/0/right/arguments/0/arguments/1')), 'arguments/0/right/arguments/0'), assert._capt(seven, 'arguments/0/right/arguments/1')), 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(sum(sum(one, two), three) === sum(sum(two, three), seven))',
  filepath: 'fixtures/CallExpression/fixture.js',
  line: 15
}));

assert(assert._expr(assert._capt(assert._capt(assert._capt(assert._capt(math, 'arguments/0/left/callee/object/object').calc, 'arguments/0/left/callee/object').sum(assert._capt(one, 'arguments/0/left/arguments/0'), assert._capt(two, 'arguments/0/left/arguments/1'), assert._capt(three, 'arguments/0/left/arguments/2')), 'arguments/0/left') === assert._capt(seven, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(math.calc.sum(one, two, three) === seven)',
  filepath: 'fixtures/CallExpression/fixture.js',
  line: 17
}));

assert(assert._expr(assert._capt(assert._capt(assert._capt(three, 'arguments/0/left/left') * assert._capt(assert._capt(seven, 'arguments/0/left/right/left') * assert._capt(ten, 'arguments/0/left/right/right'), 'arguments/0/left/right'), 'arguments/0/left') === assert._capt(three, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(three * (seven * ten) === three)',
  filepath: 'fixtures/CallExpression/fixture.js',
  line: 19
}));

assert(assert._expr(assert._capt(!assert._capt(concat(assert._capt(fuga, 'arguments/0/argument/arguments/0'), assert._capt(piyo, 'arguments/0/argument/arguments/1')), 'arguments/0/argument'), 'arguments/0'), {
  content: 'assert(!concat(fuga, piyo))',
  filepath: 'fixtures/CallExpression/fixture.js',
  line: 21
}));

assert.strictEqual(assert._expr(assert._capt(assert._capt(three, 'arguments/0/left') * assert._capt(assert._capt(seven, 'arguments/0/right/left') * assert._capt(ten, 'arguments/0/right/right'), 'arguments/0/right'), 'arguments/0'), {
  content: 'assert.strictEqual(three * (seven * ten), math.calc.sum(one, two, three))',
  filepath: 'fixtures/CallExpression/fixture.js',
  line: 23
}), assert._expr(assert._capt(assert._capt(assert._capt(math, 'arguments/1/callee/object/object').calc, 'arguments/1/callee/object').sum(assert._capt(one, 'arguments/1/arguments/0'), assert._capt(two, 'arguments/1/arguments/1'), assert._capt(three, 'arguments/1/arguments/2')), 'arguments/1'), {
  content: 'assert.strictEqual(three * (seven * ten), math.calc.sum(one, two, three))',
  filepath: 'fixtures/CallExpression/fixture.js',
  line: 23
}));
