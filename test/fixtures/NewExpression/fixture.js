'use strict';

assert(new Date());

assert(new foo.bar.Baz());

assert(!(new Array(foo, bar, baz)));

assert.notEqual(new Date(), new Date('2013-01-12'));
