'use strict';

assert(func());

assert(obj.age());

assert(isFalsy(positiveInt));

assert(foo[propName]());

assert(foo[hoge[fuga[piyo]]]());

assert(sum(one, two, three) === seven);

assert(sum(sum(one, two), three) === sum(sum(two, three), seven));

assert(math.calc.sum(one, two, three) === seven);

assert((three * (seven * ten)) === three);

assert(!concat(fuga, piyo));

assert.strictEqual((three * (seven * ten)), math.calc.sum(one, two, three));
