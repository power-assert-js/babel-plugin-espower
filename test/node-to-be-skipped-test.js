const assert = require('assert');
const babel = require('@babel/core');
const espowerPlugin = require('../index');
const transpile = (code) => {
    const result = babel.transform(code, {
        filename: '/absolute/path/to/project/test/some_test.js',
        plugins: [
            espowerPlugin
        ]
    }).code;
    const lines = result.split('\n');
    const lastLine = lines[lines.length - 1];
    return {
        result,
        lastLine
    };
};

const test = ({input, expected, memo}) => {
    const msg = memo || '';
    it (`${input} ${msg}`, () => {
        const {lastLine} = transpile(input);
        assert.strictEqual(lastLine, expected);
    });
};

const tail = (str, n) => {
    const lines = str.split('\n');
    return lines.slice(lines.length - n).join('\n');
};

describe(`UnaryExpression`, () => {
    test({
        memo: `'typeof Identifier' is not instrumented`,
        input: `assert(typeof foo !== 'undefined');`,
        expected: `assert(_ag._rec(_ag._tap(typeof foo, "arguments/0/left") !== 'undefined', "arguments/0"), new _AssertionMessage(_am, -1));`
    });
    test({
        memo: `'delete Identifier' is not instrumented`,
        input: `assert(delete foo.bar);`,
        expected: `assert(_ag._rec(delete _ag._tap(_ag._tap(foo, "arguments/0/argument/object").bar, "arguments/0/argument"), "arguments/0"), new _AssertionMessage(_am, -1));`
    });
});

describe(`CallExpression`, () => {
    test({
        memo: 'Do not instrument non-computed property of MemberExpression within CallExpression.',
        input: 'assert(foo.bar());',
        expected: 'assert(_ag._rec(_ag._tap(foo, "arguments/0/callee/object").bar(), "arguments/0"), new _AssertionMessage(_am, -1));'
    });
    test({
        input: 'assert(foo[bar]());',
        expected: 'assert(_ag._rec(_ag._tap(foo, "arguments/0/callee/object")[_ag._tap(bar, "arguments/0/callee/property")](), "arguments/0"), new _AssertionMessage(_am, -1));'
    });
});

describe(`UpdateExpression`, () => {
    test({
        memo: 'Just wrap UpdateExpression, not digging in.',
        input: 'assert(++foo);',
        expected: 'assert(_ag._rec(++foo, "arguments/0"), new _AssertionMessage(_am, -1));'
    });
});

describe(`ObjectExpression`, () => {
    it('Do not instrument shorthanded Object literal value', () => {
        const input = 'assert({foo});';
        const expected = 'assert(_ag._rec({\n  foo\n}, "arguments/0"), new _AssertionMessage(_am, -1));';
        const {result} = transpile(input);
        assert.strictEqual(tail(result, 3), expected);
    });
    it('Do not instrument non-computed Object literal key', () => {
        const input = 'assert({foo: 3});';
        const expected = 'assert(_ag._rec({\n  foo: 3\n}, "arguments/0"), new _AssertionMessage(_am, -1));';
        const {result} = transpile(input);
        assert.strictEqual(tail(result, 3), expected);
    });
});

describe(`AssignmentExpression`, () => {
    test({
        memo: `Do not instrument left due to 'Invalid left-hand side in assignment'`,
        input: `assert(counter += n);`,
        expected: `assert(_ag._rec(counter += _ag._tap(n, "arguments/0/right"), "arguments/0"), new _AssertionMessage(_am, -1));`
    });
});
