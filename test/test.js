var assert = require('assert');
var fs = require('fs');
var path = require('path');
var babel = require('babel-core');
var extend = require('xtend');
var espurify = require('espurify');

//var it = it || function (name, func) { func(); };
//var describe = describe || function (name, func) { func(); };

function testTransform (fixtureName, extraOptions) {
    it(fixtureName, function () {
        var fixtureFilepath = path.resolve(__dirname, '..', 'fixtures', fixtureName, 'fixture.js');
        var fixture = fs.readFileSync(fixtureFilepath).toString();
        var expected = fs.readFileSync(path.resolve(__dirname, '..', 'fixtures', fixtureName, 'expected.js')).toString();
        var result = babel.transform(fixture, extend({}, {
            ast: true,
            plugins: ['../index']
        }, extraOptions));
        // console.log(JSON.stringify(espurify(result.ast.program), null, 2));
        var actual = result.code;
        fs.writeFileSync(path.resolve(__dirname, '..', 'actual.js'), actual);
        assert.equal(actual + '\n', expected);
    });
}

describe('babel-plugin-espower', function () {
    testTransform('identifier');

    testTransform('filepath', {
        filename: '/path/to/test/some_test.js'
    });

    testTransform('inputSourceMap');

    testTransform('arrow');
});
