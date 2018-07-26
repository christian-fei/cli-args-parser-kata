/* globals test */
const assert = require('assert')

test('parses a `simple flag`', () => {
  const args = cliArgsParser(['--foo'])
  assert.deepEqual(args, {foo: true})
})
test('parse a `composite` flag', () => {
  const args = cliArgsParser(['--foo', 'bar'])
  assert.deepEqual(args, {'foo': 'bar'})
})

function cliArgsParser () {
  return {foo: true}
}
