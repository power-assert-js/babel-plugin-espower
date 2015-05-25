'use strict';

assert(assert._expr(assert._capt('Hello', 'arguments/0'), {
  content: 'assert(`Hello`)',
  filepath: 'test/fixtures/TemplateLiteral/fixture.js',
  line: 3
}));

assert(assert._expr(assert._capt('Hello, ' + assert._capt(nickname, 'arguments/0/expressions/0'), 'arguments/0'), {
  content: 'assert(`Hello, ${ nickname }`)',
  filepath: 'test/fixtures/TemplateLiteral/fixture.js',
  line: 5
}));

assert(assert._expr(assert._capt('Hello, ' + assert._capt(assert._capt(user, 'arguments/0/expressions/0/object').nickname, 'arguments/0/expressions/0'), 'arguments/0'), {
  content: 'assert(`Hello, ${ user.nickname }`)',
  filepath: 'test/fixtures/TemplateLiteral/fixture.js',
  line: 7
}));
