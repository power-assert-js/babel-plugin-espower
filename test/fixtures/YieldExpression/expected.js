'use strict';

var marked0$0 = [gen].map(regeneratorRuntime.mark);
function gen(a) {
  return regeneratorRuntime.wrap(function gen$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.t0 = assert;
        context$1$0.t1 = assert;
        context$1$0.t2 = assert;
        context$1$0.next = 5;
        return a;

      case 5:
        context$1$0.t3 = context$1$0.sent;
        context$1$0.t4 = context$1$0.t2._capt.call(context$1$0.t2, context$1$0.t3, 'arguments/0/left');
        context$1$0.t5 = context$1$0.t4 === 3;
        context$1$0.t6 = context$1$0.t1._capt.call(context$1$0.t1, context$1$0.t5, 'arguments/0');
        context$1$0.t7 = {
          content: 'assert((yield a) === 3)',
          filepath: 'test/fixtures/YieldExpression/fixture.js',
          generator: true,
          line: 4
        };
        context$1$0.t8 = context$1$0.t0._expr.call(context$1$0.t0, context$1$0.t6, context$1$0.t7);
        assert(context$1$0.t8);

      case 12:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

function notGen(a) {
  assert(assert._expr(assert._capt(assert._capt(yield(assert._capt(a, 'arguments/0/left/arguments/0')), 'arguments/0/left') === 3, 'arguments/0'), {
    content: 'assert(yield(a) === 3)',
    filepath: 'test/fixtures/YieldExpression/fixture.js',
    line: 8
  }));
}
