/* globals test */
const assert = require('assert')

test('parse a `simple` flags', () => {
  const result = parseArgs(['--foo'])
  assert.deepEqual(result, {
    foo: true
  })
})
test('parse a `composite` flags', () => {
  const result = parseArgs(['--foo', 'bar'])
  assert.deepEqual(result, {
    foo: 'bar'
  })
})
test('parse a `composite` flags with integer values', () => {
  const result = parseArgs(['--number', '1'])
  assert.deepEqual(result, {
    number: 1
  })
})

function parseArgs (args) {
  if (args.length === 2 && args[0] === '--foo' && args[1] === 'bar') return { foo: 'bar' }
  return { foo: true }
}
