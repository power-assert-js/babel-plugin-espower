'use strict';

it('ArrowFunctionExpression', () => {
    var seven = 7, four = 4, five = 5;
    assert(seven === ((v, i) => v + i)(four, five));
});
