'use strict';

var myAsync = (function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(a) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
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
            content: 'assert(await a === 3)',
            filepath: 'test/fixtures/AwaitExpression/fixture.js',
            line: 4,
            async: true
          };
          _context.t6 = _context.t0._expr.call(_context.t0, _context.t4, _context.t5);
          assert(_context.t6);

        case 10:
        case 'end':
          return _context.stop();
      }
    }, _callee, this);
  }));

  return function myAsync(_x) {
    return ref.apply(this, arguments);
  };
})();

// function notAsync(a){
//   assert((await (a)) === 3);
// }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { var callNext = step.bind(null, "next"); var callThrow = step.bind(null, "throw"); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(callNext, callThrow); } } callNext(); }); }; }
