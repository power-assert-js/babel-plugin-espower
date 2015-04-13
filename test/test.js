var assert = require('assert');
var fs = require('fs');
var path = require('path');
var babel = require('babel-core');
var extend = require('xtend');

//var it = it || function (name, func) { func(); };
//var describe = describe || function (name, func) { func(); };

function testTransform (fixtureName, extraOptions) {
    it(fixtureName, function () {
        var fixtureFilepath = path.resolve(__dirname, '..', 'fixtures', fixtureName, 'fixture.js');
        var fixture = fs.readFileSync(fixtureFilepath).toString();
        var expected = fs.readFileSync(path.resolve(__dirname, '..', 'fixtures', fixtureName, 'expected.js')).toString();
        // var actual = babel.transformFileSync(fixtureFilepath, {
        var actual = babel.transform(fixture, extend({}, {
            plugins: ['../index']
        }, extraOptions)).code;
        // fs.writeFileSync(path.resolve(__dirname, '..', 'output.js'), actual);
        assert.equal(actual + '\n', expected);
    });
}

describe('as a babel plugin', function () {
    testTransform('identifier');

    testTransform('filepath', {
        filename: '/path/to/test/some_test.js'
    });

    testTransform('inputSourceMap');
});
