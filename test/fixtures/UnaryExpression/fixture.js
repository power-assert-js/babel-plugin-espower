'use strict';

assert(!truth);

assert(!!some);

assert(!!foo.bar);

assert(delete foo.bar);

assert(typeof foo !== 'undefined');

assert(typeof foo.bar !== 'undefined');

assert.strictEqual(typeof foo, typeof bar);
