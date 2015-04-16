'use strict';

assert(foo.bar);

assert(foo.bar.baz);

assert(foo['bar']);

assert(foo[propName]);

assert(foo  [  propName  ]  );

assert(foo[func(key)]);

assert(foo[propName]['key'][keys()['name']]);

assert( foo [  propName  ] [  'key' ]   [ keys  (  )  [   'name'  ] ]  );

assert.equal(ary1.length, ary2.length);

assert.deepEqual(foo.propName, foo[key]);
