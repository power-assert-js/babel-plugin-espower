'use strict';

assert(assert._expr(assert._capt([assert._capt(foo, 'arguments/0/elements/0'), assert._capt(bar, 'arguments/0/elements/1')], 'arguments/0'), {
  content: 'assert([foo,bar])',
  filepath: 'test/fixtures/ArrayExpression/fixture.js',
  line: 3
}));

assert(assert._expr(assert._capt(assert._capt(typeof assert._capt([assert._capt([assert._capt(assert._capt(foo, 'arguments/0/left/argument/elements/0/elements/0/object').bar, 'arguments/0/left/argument/elements/0/elements/0'), assert._capt(baz(assert._capt(moo, 'arguments/0/left/argument/elements/0/elements/1/arguments/0')), 'arguments/0/left/argument/elements/0/elements/1')], 'arguments/0/left/argument/elements/0'), assert._capt(+assert._capt(fourStr, 'arguments/0/left/argument/elements/1/argument'), 'arguments/0/left/argument/elements/1')], 'arguments/0/left/argument'), 'arguments/0/left') === 'number', 'arguments/0'), {
  content: 'assert(typeof [[foo.bar,baz(moo)],+fourStr] === \'number\')',
  filepath: 'test/fixtures/ArrayExpression/fixture.js',
  line: 5
}));

assert.notDeepEqual(assert._expr(assert._capt([assert._capt(foo, 'arguments/0/elements/0'), assert._capt(bar, 'arguments/0/elements/1')], 'arguments/0'), {
  content: 'assert.notDeepEqual([foo,bar], [hoge,fuga,piyo])',
  filepath: 'test/fixtures/ArrayExpression/fixture.js',
  line: 7
}), assert._expr(assert._capt([assert._capt(hoge, 'arguments/1/elements/0'), assert._capt(fuga, 'arguments/1/elements/1'), assert._capt(piyo, 'arguments/1/elements/2')], 'arguments/1'), {
  content: 'assert.notDeepEqual([foo,bar], [hoge,fuga,piyo])',
  filepath: 'test/fixtures/ArrayExpression/fixture.js',
  line: 7
}));
