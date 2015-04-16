'use strict';

assert(fn`a${1}`);

assert(fn`a${foo}b${bar}c${baz}`);

assert(fn`driver ${bob.name}, navigator ${alice.getName()}`);
