'use strict';

function* gen(a) {
  assert(assert._expr(assert._capt(assert._capt((yield a), 'arguments/0/left') === 3, 'arguments/0'), {
    content: 'assert((yield a) === 3)',
    filepath: 'test/fixtures/YieldExpression/fixture.js',
    line: 4,
    generator: true
  }));
}

// function notGen(a){
//   assert((yield (a)) === 3);
// }
