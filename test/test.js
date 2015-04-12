var assert = require('assert');
var fs = require('fs');
var path = require('path');
var babel = require('babel-core');

function testTransform (fixtureName) {
    it(fixtureName, function () {
        var fixture = fs.readFileSync(path.resolve('test', 'fixtures', fixtureName, 'fixture.js')).toString();
        var expected = fs.readFileSync(path.resolve('test', 'fixtures', fixtureName, 'expected.js')).toString();
        var actual = babel.transform(fixture, {
            plugins: ['../index']
        }).code;
        assert.equal(actual + '\n', expected);
    });
}

describe('as babel plugin', function () {
    testTransform('simple-assert');
});
