var assert = require('assert');
var fs = require('fs');
var path = require('path');
var babel = require('@babel/core');
var espowerPlugin = require('../index');

function testTransform (fixtureName, extraOptions) {
    it(fixtureName, function () {
        var fixtureFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'fixture.js');
        var expectedFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'expected.js');
        var actualFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'actual.js');
        var result = babel.transformFileSync(fixtureFilepath, Object.assign({
            plugins: [
                espowerPlugin
            ]
        }, extraOptions));
        var actual = result.code + '\n';
        var expected = fs.readFileSync(expectedFilepath, 'utf8');
        if (actual != expected) {
            fs.writeFileSync(actualFilepath, actual);
        }
        assert.strictEqual(actual, expected);
    });
}

describe('babel-plugin-espower', function () {
    testTransform('Mocha');
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
    testTransform('SequenceExpression');
    testTransform('NewExpression');
    testTransform('FunctionExpression');
    testTransform('TemplateLiteral');
    testTransform('TaggedTemplateExpression');
    testTransform('ArrowFunctionExpression');
    testTransform('ClassExpression');
    testTransform('SpreadElement');
    testTransform('Property');
    testTransform('YieldExpression');
    testTransform('inputSourceMap', {
        plugins: [
            [espowerPlugin, {
                sourceRoot: "/absolute/"
            }]
        ]
    });
    testTransform('customPatterns', {
        plugins: [
            [espowerPlugin, {
                patterns: [
                    'assert.isNull(object, [message])',
                    'assert.same(actual, expected, [message])',
                    'assert.near(actual, expected, delta, [message])'
                ]
            }]
        ]
    });
    testTransform('CommentsInAssertion');
});
