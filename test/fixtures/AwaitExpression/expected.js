'use strict';

function myAsync(a) {
  return regeneratorRuntime.async(function myAsync$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.t0 = assert;
        context$1$0.t1 = assert;
        context$1$0.t2 = assert;
        context$1$0.next = 5;
        return regeneratorRuntime.awrap(a);

      case 5:
        context$1$0.t3 = context$1$0.sent;
        context$1$0.t4 = context$1$0.t2._capt.call(context$1$0.t2, context$1$0.t3, 'arguments/0/left');
        context$1$0.t5 = context$1$0.t4 === 3;
        context$1$0.t6 = context$1$0.t1._capt.call(context$1$0.t1, context$1$0.t5, 'arguments/0');
        context$1$0.t7 = {
          async: true,
          content: 'assert((await a) === 3)',
          filepath: 'test/fixtures/AwaitExpression/fixture.js',
          line: 4
        };
        context$1$0.t8 = context$1$0.t0._expr.call(context$1$0.t0, context$1$0.t6, context$1$0.t7);
        assert(context$1$0.t8);

      case 12:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

function notAsync(a) {
  assert(assert._expr(assert._capt(assert._capt(await(assert._capt(a, 'arguments/0/left/arguments/0')), 'arguments/0/left') === 3, 'arguments/0'), {
    content: 'assert(await(a) === 3)',
    filepath: 'test/fixtures/AwaitExpression/fixture.js',
    line: 8
  }));
}
