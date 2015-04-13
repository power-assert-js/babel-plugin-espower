babel-plugin-espower
================================

Babel plugin for power-assert.


DESCRIPTION
---------------------------------------
`babel-plugin-espower` is a [Babel](http://babeljs.io/) plugin for [power-assert](http://github.com/twada/power-assert).

Please note that `babel-plugin-espower` is an alpha version product. Pull-requests, issue reports and patches are always welcomed. See [power-assert](http://github.com/twada/power-assert) project for more documentation.


HOW TO USE
---------------------------------------

```
$ babel --plugins babel-plugin-espower test/some_test.js
```

or shortly,

```
$ babel --plugins espower test/some_test.js
```

or programmatically,

```javascript
var jsCode = fs.readFileSync('/path/to/test/some_test.js');
var transformed = require('babel').transform(jsCode, {
    plugins: ['babel-plugin-espower']
});
console.log(transformed.code);
```


INSTALL
---------------------------------------

```
$ npm install --save-dev babel-plugin-espower
```


AUTHOR
---------------------------------------
* [Takuto Wada](http://github.com/twada)


LICENSE
---------------------------------------
Licensed under the [MIT](http://twada.mit-license.org/) license.
