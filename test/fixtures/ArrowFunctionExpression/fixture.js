'use strict';

assert(v => v + 1);

assert((v, i) => v + i);

assert(v => ({even: v, odd: v + 1}));

assert(seven === ((v, i) => v + i)(four, five));
