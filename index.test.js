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

function parseArgs (args) {
  return { foo: true }
}
