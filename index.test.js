/* globals test */
const argsToObject = require('.')
const assert = require('assert')

test('parses a `simple flag`', () => {
  const args = argsToObject(['--foo'])
  assert.deepEqual(args, {foo: true})
})
test('parse a `composite` flag', () => {
  const args = argsToObject(['--foo', 'bar'])
  assert.deepEqual(args, {'foo': 'bar'})
})
test('parse a `composite` flags with integer values', () => {
  const args = argsToObject(['--number', '1'])
  assert.deepEqual(args, {number: 1})
})
test('parse multiple flags at once', () => {
  const args = argsToObject(['--foo', '--bar', 'baz', '--number', '1'])
  assert.deepEqual(args, {'bar': 'baz', 'foo': true, 'number': 1})
})
