var assert = require('assert');
var fs = require('fs');
var path = require('path');
var babel = require('babel-core');
var extend = require('xtend');
var createEspowerPlugin = require('../create');

function testTransform (fixtureName, extraSuffix, extraOptions) {
    it(fixtureName, function () {
        var suffix = extraSuffix ? '-' + extraSuffix : '';
        var fixtureFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'fixture.js');
        var expectedFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'expected' + suffix + '.js');
        var actualFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'actual' + suffix + '.js');
        var result = babel.transformFileSync(fixtureFilepath, extend({
            presets: [
                'es2015',
                'stage-3',
                'react'
            ],
            plugins: [
                createEspowerPlugin(babel)
            ]
        }, extraOptions));
        var actual = result.code + '\n';
        var expected = fs.readFileSync(expectedFilepath, 'utf8');
        if (actual != expected) {
            fs.writeFileSync(actualFilepath, actual);
        }
        assert.equal(actual, expected);
    });
}

describe('babel-plugin-espower with presets', function () {
    testTransform('NonTarget');
    testTransform('Mocha', 'presets-es2015');
    testTransform('Literal', 'presets-es2015');
    testTransform('Identifier', 'presets-es2015');
    testTransform('BinaryExpression', 'presets-es2015');
    testTransform('UnaryExpression', 'presets-es2015');
    testTransform('LogicalExpression', 'presets-es2015');
    testTransform('MemberExpression', 'presets-es2015');
    testTransform('CallExpression', 'presets-es2015');
    testTransform('AssignmentExpression', 'presets-es2015');
    testTransform('ArrayExpression', 'presets-es2015');
    testTransform('UpdateExpression', 'presets-es2015');
    testTransform('ConditionalExpression', 'presets-es2015');
    testTransform('ObjectExpression', 'presets-es2015');
    testTransform('NewExpression', 'presets-es2015');
    testTransform('FunctionExpression', 'presets-es2015');
    testTransform('TemplateLiteral', 'presets-es2015');
    testTransform('TaggedTemplateExpression', 'presets-es2015');
    testTransform('ArrowFunctionExpression', 'presets-es2015');
    testTransform('ClassExpression', 'presets-es2015');
    testTransform('SpreadElement', 'presets-es2015');
    testTransform('Property', 'presets-es2015');
    testTransform('YieldExpression', 'presets-es2015');
    testTransform('AwaitExpression', 'presets-stage-3');
    testTransform('React', 'presets-react');
});

describe.only('babel-plugin-espower with embedded-ast', function () {
    testTransform('React', 'presets-react');
    testTransform('YieldExpression', 'presets-es2015');
    testTransform('AwaitExpression', 'presets-stage-3');
});
