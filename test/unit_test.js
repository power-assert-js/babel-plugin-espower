const assert = require('assert');
const babel = require('@babel/core');
const espowerPlugin = require('../index');
const transpile = (code) => {
    return babel.transform(code, {
        filename: '/absolute/path/to/project/test/some_test.js',
        plugins: [
            [espowerPlugin, {
                embedAst: false
            }]
        ]
    }).code;
};

describe('simple Identifier: assert(falsy)', () => {
    const input = `
const falsy = false;
assert(falsy);
`;
    let result;
    beforeEach(() => {
        result = transpile(input);
    });
    it('AssertionMetadata', () => {
        const expected = `
    _am = {
  content: "assert(falsy)",
  filepath: "some_test.js",
  line: 3,
  config: _powerAssertConfig[0]
`;
        assert(result.indexOf(expected) !== -1);
    });
    it ('ArgumentRecorder', () => {
        assert(result.indexOf('_ag = new _ArgumentRecorder(assert, _am, 0)') !== -1);
    });
    it ('AssertionMessage', () => {
        assert(result.indexOf('assert(_ag._rec(falsy, "arguments/0"), new _AssertionMessage(_am, -1));') !== -1);
    });
});

describe('assertion message of string literal: assert(falsy, "assertion message")', () => {
    const input = `
const falsy = false;
assert(falsy, "assertion message");
`;
    let result;
    beforeEach(() => {
        result = transpile(input);
    });
    it('AssertionMetadata', () => {
        const expected = `
    _am = {
  content: "assert(falsy, \\"assertion message\\")",
  filepath: "some_test.js",
  line: 3,
  config: _powerAssertConfig[0]
`;
        assert(result.indexOf(expected) !== -1);
    });
    it ('ArgumentRecorder', () => {
        assert(result.indexOf('_ag = new _ArgumentRecorder(assert, _am, 0)') !== -1);
    });
    it ('AssertionMessage', () => {
        assert(result.indexOf('assert(_ag._rec(falsy, "arguments/0"), new _AssertionMessage(_am, 1, "assertion message"));') !== -1);
    });
});

describe('assertion message of some expression: assert(falsy, msg)', () => {
    const input = `
const falsy = false;
const msg = 'assertion message';
assert(falsy, msg);
`;
    let result;
    beforeEach(() => {
        result = transpile(input);
    });
    it('AssertionMetadata', () => {
        const expected = `
    _am = {
  content: "assert(falsy, msg)",
  filepath: "some_test.js",
  line: 4,
  config: _powerAssertConfig[0]
`;
        assert(result.indexOf(expected) !== -1);
    });
    it ('ArgumentRecorder', () => {
        assert(result.indexOf('_ag = new _ArgumentRecorder(assert, _am, 0)') !== -1);
    });
    it ('AssertionMessage', () => {
        assert(result.indexOf('assert(_ag._rec(falsy, "arguments/0"), new _AssertionMessage(_am, 1, _ag2._rec(msg, "arguments/1")));') !== -1);
    });
});
