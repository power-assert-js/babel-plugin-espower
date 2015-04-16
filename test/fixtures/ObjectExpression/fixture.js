'use strict';

assert({foo: bar, hoge: fuga});

assert(!({ foo: bar.baz, name: nameOf({firstName: first, lastName: last}) }));

assert.deepEqual({foo: bar, hoge: fuga}, {hoge: fuga, foo: bar});
