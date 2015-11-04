var assert = require('assert');
var fs = require('fs');
var path = require('path');
var babel = require('babel-core');
var extend = require('xtend');

function testTransform (fixtureName, extraSuffix, extraOptions) {
    it(fixtureName, function () {
        var suffix = extraSuffix ? '-' + extraSuffix : '';
        var fixtureFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'fixture.js');
        var expectedFilepath = path.resolve(__dirname, 'fixtures', fixtureName, 'expected' + suffix + '.js');
        var result = babel.transformFileSync(fixtureFilepath, extend({
            plugins: [
                'babel-plugin-transform-es2015-template-literals',
                'babel-plugin-transform-es2015-literals',
                'babel-plugin-transform-es2015-function-name',
                'babel-plugin-transform-es2015-arrow-functions',
                'babel-plugin-transform-es2015-block-scoped-functions',
                'babel-plugin-transform-es2015-classes',
                'babel-plugin-transform-es2015-object-super',
                'babel-plugin-transform-es2015-shorthand-properties',
                'babel-plugin-transform-es2015-computed-properties',
                'babel-plugin-transform-es2015-for-of',
                'babel-plugin-transform-es2015-sticky-regex',
                'babel-plugin-transform-es2015-unicode-regex',
                'babel-plugin-transform-es2015-constants',
                'babel-plugin-transform-es2015-spread',
                'babel-plugin-transform-es2015-parameters',
                'babel-plugin-transform-es2015-destructuring',
                'babel-plugin-transform-es2015-block-scoping',
                'babel-plugin-transform-es2015-typeof-symbol',
                'babel-plugin-transform-es2015-modules-commonjs',
                'babel-plugin-transform-regenerator',
                '../index'
            ]
        }, extraOptions));
        var actual = result.code;
        var expected = fs.readFileSync(expectedFilepath).toString();
        assert.equal(actual + '\n', expected);
    });
}

describe('babel-plugin-espower with presets', function () {
    // testTransform('pd');
    testTransform('NonTarget');
    testTransform('Literal', 'presets-es2015');
    testTransform('Identifier');
    testTransform('BinaryExpression');
    // testTransform('UnaryExpression');
    testTransform('LogicalExpression');
    testTransform('MemberExpression');
    testTransform('CallExpression');
    // testTransform('AssignmentExpression');
    testTransform('ArrayExpression');
    testTransform('UpdateExpression');
    testTransform('ConditionalExpression', 'presets-es2015');
    testTransform('ObjectExpression');
    testTransform('NewExpression');
    testTransform('FunctionExpression');
    testTransform('TemplateLiteral', 'presets-es2015');
    // testTransform('TaggedTemplateExpression');
    testTransform('ArrowFunctionExpression', 'presets-es2015');
    testTransform('ClassExpression', 'presets-es2015');
    testTransform('SpreadElement', 'presets-es2015');
    testTransform('Property', 'presets-es2015');
});
