var assert = require('assert');
var fs = require('fs');
var path = require('path');
var babel = require('babel-core');
var extend = require('xtend');
var espurify = require('espurify');
var createEspowerPlugin = require('../create');

function testTransform (fixtureName, extraOptions) {
    it(fixtureName, function () {
        var fixtureFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'fixture.js');
        var expectedFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'expected.js');
        var result = babel.transform(fs.readFileSync(fixtureFilepath), extend({}, {
            filename: path.relative(__dirname, fixtureFilepath),
            plugins: ['../index']
        }, extraOptions));
        var actual = result.code;
        var expected = fs.readFileSync(expectedFilepath).toString();
        assert.equal(actual + '\n', expected);
    });
}

describe('babel-plugin-espower', function () {
    testTransform('NonTarget');
    testTransform('Literal');
    testTransform('Identifier');
    testTransform('BinaryExpression');
    testTransform('UnaryExpression');
    testTransform('LogicalExpression');
    testTransform('MemberExpression');
    testTransform('CallExpression');
    testTransform('AssignmentExpression');
    testTransform('ArrayExpression');
    testTransform('UpdateExpression');
    testTransform('ConditionalExpression');
    testTransform('ObjectExpression');
    testTransform('NewExpression');
    testTransform('FunctionExpression');
    testTransform('TemplateLiteral');
    testTransform('TaggedTemplateExpression');
    testTransform('ArrowFunctionExpression');
    testTransform('ClassExpression');
    testTransform('SpreadElement');
    testTransform('Property');
    testTransform('inputSourceMap');
    testTransform('customPatterns', {
        plugins: [
            createEspowerPlugin({
                patterns: [
                    'assert.isNull(object, [message])',
                    'assert.same(actual, expected, [message])',
                    'assert.near(actual, expected, delta, [message])'
                ]
            })
        ]
    });
});
