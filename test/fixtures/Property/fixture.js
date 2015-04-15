'use strict';

assert({[num]: foo});

assert({[ 'prop_' + (() => bar())() ]: 42});

assert({[`prop_${generate(seed)}`]: foo});

assert({foo});

assert({foo, bar: baz});
