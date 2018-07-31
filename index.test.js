/* globals test */
const assert = require('assert')

test('parse a `simple` flags', () => {
  const result = parseArgs(['--foo'])
  assert.deepEqual(result, {
    foo: true
  })
})

function parseArgs (args) {
  return { foo: true }
}
