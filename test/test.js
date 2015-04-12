var assert = require('assert');
var fs = require('fs');
var path = require('path');
var babel = require('babel-core');

//var it = it || function (name, func) { func(); };
//var describe = describe || function (name, func) { func(); };

function testTransform (fixtureName) {
    it(fixtureName, function () {
        var fixture = fs.readFileSync(path.resolve(__dirname, 'fixtures', fixtureName, 'fixture.js')).toString();
        var expected = fs.readFileSync(path.resolve(__dirname, 'fixtures', fixtureName, 'expected.js')).toString();
        var actual = babel.transform(fixture, {
            plugins: ['../index']
        }).code;
        assert.equal(actual + '\n', expected);
    });
}

describe('as a babel plugin', function () {
    testTransform('identifier');
});
