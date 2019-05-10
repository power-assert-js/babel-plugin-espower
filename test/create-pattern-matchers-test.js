'use strict';

var assert = require('assert');
var createPatternMatchers = require('../lib/create-pattern-matchers');

function withoutMatcher (p) {
    var res = Object.assign({}, p);
    delete res.matcher;
    return res;
}

describe('createPatternMatchers patterns', function () {
    it('string only pattern', function () {
        var actual = createPatternMatchers({
            patterns: [
                'assert(value, [message])'
            ]
        }).map(withoutMatcher);
        assert.deepStrictEqual(actual, [
            {
                pattern: 'assert(value, [message])',
                index: 0,
                params: [
                    {
                        name: 'value',
                        index: 0,
                        kind: 'mandatory'
                    },
                    {
                        name: 'message',
                        index: 1,
                        kind: 'optional',
                        message: true
                    }
                ]
            }
        ]);
    });

    it('pattern object', function () {
        var actual = createPatternMatchers({
            patterns: [
                {
                    pattern: 'assert.deepEqual(actual, expected, [message])',
                    params: [
                        { name: 'actual', options: {depth: 2 }},
                        { name: 'expected', options: {depth: 2 }},
                        { name: 'message', message: true },
                    ]
                }
            ]
        }).map(withoutMatcher);
        assert.deepStrictEqual(actual, [
            {
                pattern: 'assert.deepEqual(actual, expected, [message])',
                index: 0,
                params: [
                    {
                        name: 'actual',
                        index: 0,
                        kind: 'mandatory',
                        options: { depth: 2 }
                    },
                    {
                        name: 'expected',
                        index: 1,
                        kind: 'mandatory',
                        options: { depth: 2 }
                    },
                    {
                        name: 'message',
                        index: 2,
                        kind: 'optional',
                        message: true
                    },
                ]
            }
        ]);
    });

    it('mixture of strings and objects', function () {
        var actual = createPatternMatchers({
            patterns: [
                'assert(value, [message])',
                {
                    pattern: 'assert.deepEqual(actual, expected, [message])',
                    params: [
                        { name: 'actual', options: {depth: 2 }},
                        { name: 'expected', options: {depth: 2 }},
                        { name: 'message', message: true },
                    ]
                }
            ]
        }).map(withoutMatcher);
        assert.deepStrictEqual(actual, [
            {
                pattern: 'assert(value, [message])',
                index: 0,
                params: [
                    {
                        name: 'value',
                        index: 0,
                        kind: 'mandatory'
                    },
                    {
                        name: 'message',
                        index: 1,
                        kind: 'optional',
                        message: true
                    }
                ]
            },
            {
                pattern: 'assert.deepEqual(actual, expected, [message])',
                index: 1,
                params: [
                    {
                        name: 'actual',
                        index: 0,
                        kind: 'mandatory',
                        options: { depth: 2 }
                    },
                    {
                        name: 'expected',
                        index: 1,
                        kind: 'mandatory',
                        options: { depth: 2 }
                    },
                    {
                        name: 'message',
                        index: 2,
                        kind: 'optional',
                        message: true
                    },
                ]
            }
        ]);
    });

});
