babel-plugin-espower
================================

Babel plugin for power-assert.


DESCRIPTION
---------------------------------------
`babel-plugin-espower` is a [Babel](http://babeljs.io/) plugin for [power-assert](http://github.com/twada/power-assert).

`power-assert` provides descriptive assertion messages through standard [assert](http://nodejs.org/api/assert.html) interface.

Please note that `babel-plugin-espower` is an alpha version product. Pull-requests, issue reports and patches are always welcomed. See [power-assert](http://github.com/twada/power-assert) project for more documentation.


INSTALL
---------------------------------------

```
$ npm install --save-dev babel-core babel-plugin-espower
```


HOW TO USE
---------------------------------------


### via Babel CLI

[CLI · Babel](http://babeljs.io/docs/usage/cli/)

```
$ ./node_modules/.bin/babel --plugins babel-plugin-espower /path/to/test/some_test.js > /path/to/build/some_test.js
```

or shortly,

```
$ ./node_modules/.bin/babel --plugins espower /path/to/test/some_test.js > /path/to/build/some_test.js
```


### via Babel API

[API · Babel](http://babeljs.io/docs/usage/api/)

```javascript
var babel = require('babel-core');
var jsCode = fs.readFileSync('/path/to/test/some_test.js');
var transformed = babel.transform(jsCode, {
    plugins: ['babel-plugin-espower']
});
console.log(transformed.code);
```


### via Babel Require Hook

[Require Hook · Babel](http://babeljs.io/docs/usage/require/)

```javascript
require('babel-core/register')({
    only: /test\/tobe_instrumented/,
    plugins: ['babel-plugin-espower'],
    extensions: ['.es6', '.js']
});
```


EXAMPLE
---------------------------------------


For given test file `demo_test.js` below,

```javascript
import assert from 'power-assert';

describe('ES6 demo', () => {

    it('Destructuring and TemplateLiteral', () => {
        let [alice, bob] = [ { name: 'alice' }, { name: 'bob' } ];
        assert(`${alice.name} and ${bob.name}` === `bob and alice`);
    });

    it('ArrowFunctionExpression and SpreadElement', () => {
        let seven = 7, ary = [4, 5];
        assert(seven === ((v, i) => v + i)(...[...ary]));
    });

    it('Enhanced Object Literals', () => {
        let name = 'bobby';
        assert.deepEqual({
            name,
            [ `${name}'s greet` ]: `Hello, I'm ${name}`
        }, null);
    });

});
```

Run `babel` with `--plugins espower` to transform tests.

```
$ ./node_modules/.bin/babel --plugins espower /path/to/test/demo_test.js > /path/to/build/demo_test.js
```

Then run. You will see the power-assert output appears.

```
$ ./node_modules/.bin/mocha /path/to/build/demo_test.js

  ES6 demo
    1) Destructuring and TemplateLiteral
    2) ArrowFunctionExpression and SpreadElement
    3) Enhanced Object Literals


  0 passing
  3 failing

  1) ES6 demo Destructuring and TemplateLiteral:

      AssertionError:   # test/demo_test.js:7

  assert(`${ alice.name } and ${ bob.name }` === `bob and alice`)
         |   |     |             |   |       |   |
         |   |     |             |   |       |   "bob and alice"
         |   |     |             |   "bob"   false
         |   |     "alice"       Object{name:"bob"}
         |   Object{name:"alice"}
         "alice and bob"

  --- [string] `bob and alice`
  +++ [string] `${ alice.name } and ${ bob.name }`
  @@ -1,13 +1,13 @@
  -bob and alice
  +alice and bob

      at Context.<anonymous> (build/demo_test.js:19:28)

  2) ES6 demo ArrowFunctionExpression and SpreadElement:

      AssertionError:   # test/demo_test.js:12

  assert(seven === ((v, i) => v + i)(...[...ary]))
         |     |   |                    |   |
         |     |   |                    |   [4,5]
         |     |   9                    [4,5]
         7     false

  [number] ((v, i) => v + i)(...[...ary])
  => 9
  [number] seven
  => 7

      at Context.<anonymous> (build/demo_test.js:29:28)

  3) ES6 demo Enhanced Object Literals:
     AssertionError:   # test/demo_test.js:17

  assert.deepEqual({name,[`${ name }'s greet`]: `Hello, I'm ${ name }`}, null)
                   |      |   |                 |              |
                   |      |   |                 |              "bobby"
                   |      |   "bobby"           "Hello, I'm bobby"
                   |      "bobby's greet"
                   Object{name:"bobby","bobby's greet":"Hello, I'm bobby"}

      at Context.<anonymous> (build/demo_test.js:40:29)
```


AUTHOR
---------------------------------------
* [Takuto Wada](http://github.com/twada)


LICENSE
---------------------------------------
Licensed under the [MIT](http://twada.mit-license.org/) license.
