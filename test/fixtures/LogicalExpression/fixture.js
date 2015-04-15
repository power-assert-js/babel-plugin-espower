'use strict';

assert(5 < actual && actual < 13);

assert.ok(actual < 5 || 13 < actual);

assert(2 > actual && actual < 13);

assert(2   >   actual    &&  actual     <  13);

assert.equal(5 < actual && actual < 13, falsy);
