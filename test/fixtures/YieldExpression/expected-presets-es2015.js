'use strict';

var _marked = [gen].map(regeneratorRuntime.mark);

function gen(a) {
  return regeneratorRuntime.wrap(function gen$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.t0 = assert;
        _context.t1 = assert;
        _context.next = 4;
        return a;

      case 4:
        _context.t2 = _context.sent;
        _context.t3 = _context.t2 === 3;
        _context.t4 = _context.t1._capt.call(_context.t1, _context.t3, 'arguments/0');
        _context.t5 = {
          content: 'assert((yield a) === 3)',
          filepath: 'test/fixtures/YieldExpression/fixture.js',
          line: 4,
          generator: true
        };
        _context.t6 = _context.t0._expr.call(_context.t0, _context.t4, _context.t5);
        assert(_context.t6);

      case 10:
      case 'end':
        return _context.stop();
    }
  }, _marked[0], this);
}

// function notGen(a){
//   assert((yield (a)) === 3);
// }
