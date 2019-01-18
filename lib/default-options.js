'use strict';

module.exports = function defaultOptions () {
    return {
        embedAst: true,
        patterns: [
            'assert(value, [message])',
            'assert.ok(value, [message])',
            'assert.equal(actual, expected, [message])',
            'assert.notEqual(actual, expected, [message])',
            'assert.strictEqual(actual, expected, [message])',
            'assert.notStrictEqual(actual, expected, [message])',
            // 'assert.deepEqual(actual, expected, [message])',
            {
                pattern: 'assert.deepEqual(actual, expected, [message])',
                args: [
                    { name: 'actual', options: {depth: 2 }},
                    { name: 'expected', options: {depth: 2 }},
                    { name: 'message', message: true },
                ]
            },
            // 'assert.notDeepEqual(actual, expected, [message])',
            {
                pattern: 'assert.notDeepEqual(actual, expected, [message])',
                args: [
                    { name: 'actual', options: {depth: 2 }},
                    { name: 'expected', options: {depth: 2 }},
                    { name: 'message', message: true },
                ]
            },
            // 'assert.deepStrictEqual(actual, expected, [message])',
            {
                pattern: 'assert.deepStrictEqual(actual, expected, [message])',
                args: [
                    { name: 'actual', options: {depth: 2 }},
                    { name: 'expected', options: {depth: 2 }},
                    { name: 'message', message: true },
                ]
            },
            // 'assert.notDeepStrictEqual(actual, expected, [message])',
            {
                pattern: 'assert.notDeepStrictEqual(actual, expected, [message])',
                args: [
                    { name: 'actual', options: {depth: 2 }},
                    { name: 'expected', options: {depth: 2 }},
                    { name: 'message', message: true },
                ]
            },
            // 'assert.throws(block, [error], [message])',
            {
                pattern: 'assert.throws(fn, [error], [message])',
                args: [
                    { name: 'fn', block: true },
                    { name: 'error', block: true },
                    { name: 'message', message: true },
                ]
            },
            // 'assert.doesNotThrow(block, [error], [message])',
            {
                pattern: 'assert.doesNotThrow(fn, [error], [message])',
                args: [
                    { name: 'fn', block: true },
                    { name: 'error', block: true },
                    { name: 'message', message: true },
                ]
            },
            // 'assert.rejects(block, [error], [message])',
            {
                pattern: 'assert.rejects(asyncFn, [error], [message])',
                args: [
                    { name: 'asyncFn', block: true },
                    { name: 'error', block: true },
                    { name: 'message', message: true },
                ]
            },
            // 'assert.doesNotReject(block, [error], [message])'
            {
                pattern: 'assert.doesNotReject(asyncFn, [error], [message])',
                args: [
                    { name: 'asyncFn', block: true },
                    { name: 'error', block: true },
                    { name: 'message', message: true },
                ]
            }
        ]
    };
};
