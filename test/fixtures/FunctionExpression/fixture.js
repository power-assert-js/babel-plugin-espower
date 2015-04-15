'use strict';

assert(function (a, b) { return a + b; });

assert(baz === (function (a, b) { return a + b; })(foo, bar));
