const assert = require('assert');
const babel = require('@babel/core');
const espowerPlugin = require('../index');
const transpile = (code) => {
    const result = babel.transform(code, {
        filename: '/absolute/path/to/project/test/some_test.js',
        plugins: [
            [espowerPlugin, {
                embedAst: false
            }]
        ]
    }).code;
    const lines = result.split('\n');
    const lastLine = lines[lines.length - 1];
    return {
        result,
        lastLine
    };
};

describe('simple Identifier: assert(falsy)', () => {
    const input = `
const falsy = false;
assert(falsy);
`;
    it('AssertionMetadata', () => {
        const expected = `
    _am = {
  content: "assert(falsy)",
  filepath: "some_test.js",
  line: 3,
  config: _powerAssertConfig[0]
`;
        const {result} = transpile(input);
        assert(result.indexOf(expected) !== -1);
    });
    it ('ArgumentRecorder', () => {
        const {result} = transpile(input);
        assert(result.indexOf('_ag = new _ArgumentRecorder(assert, _am, 0)') !== -1);
    });
    it ('AssertionMessage', () => {
        const {lastLine} = transpile(input);
        assert.strictEqual(lastLine, 'assert(_ag._rec(falsy, "arguments/0"), new _AssertionMessage(_am, -1));');
    });
});

describe('assertion message of string literal: assert(falsy, "assertion message")', () => {
    const input = `
const falsy = false;
assert(falsy, "assertion message");
`;
    it('AssertionMetadata', () => {
        const expected = `
    _am = {
  content: "assert(falsy, \\"assertion message\\")",
  filepath: "some_test.js",
  line: 3,
  config: _powerAssertConfig[0]
`;
        const {result} = transpile(input);
        assert(result.indexOf(expected) !== -1);
    });
    it ('ArgumentRecorder', () => {
        const {result} = transpile(input);
        assert(result.indexOf('_ag = new _ArgumentRecorder(assert, _am, 0)') !== -1);
    });
    it ('AssertionMessage', () => {
        const {lastLine} = transpile(input);
        assert.strictEqual(lastLine, 'assert(_ag._rec(falsy, "arguments/0"), new _AssertionMessage(_am, 1, "assertion message"));');
    });
});

describe('assertion message of some expression: assert(falsy, msg)', () => {
    const input = `
const falsy = false;
const msg = 'assertion message';
assert(falsy, msg);
`;
    it('AssertionMetadata', () => {
        const expected = `
    _am = {
  content: "assert(falsy, msg)",
  filepath: "some_test.js",
  line: 4,
  config: _powerAssertConfig[0]
`;
        const {result} = transpile(input);
        assert(result.indexOf(expected) !== -1);
    });
    it ('ArgumentRecorder', () => {
        const {result} = transpile(input);
        assert(result.indexOf('_ag = new _ArgumentRecorder(assert, _am, 0)') !== -1);
    });
    it ('AssertionMessage', () => {
        const {lastLine} = transpile(input);
        assert.strictEqual(lastLine, 'assert(_ag._rec(falsy, "arguments/0"), new _AssertionMessage(_am, 1, _ag2._rec(msg, "arguments/1")));');
    });
});
