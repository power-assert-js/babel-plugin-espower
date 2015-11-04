'use strict';

assert('Hello');

assert(assert._expr('Hello, ' + assert._capt(nickname, 'arguments/0/expressions/0'), {
  content: 'assert(`Hello, ${ nickname }`)',
  filepath: 'test/fixtures/TemplateLiteral/fixture.js',
  line: 5
}));

assert(assert._expr('Hello, ' + assert._capt(assert._capt(user, 'arguments/0/expressions/0/object').nickname, 'arguments/0/expressions/0'), {
  content: 'assert(`Hello, ${ user.nickname }`)',
  filepath: 'test/fixtures/TemplateLiteral/fixture.js',
  line: 7
}));
