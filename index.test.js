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
  const result = {}
  let flag
  for (const arg of args) {
    if (flag) {
      result[flag] = arg
      flag = undefined
    }
    if (arg.startsWith && arg.startsWith('--')) {
      flag = arg.slice(2)
      result[flag] = true
    }
  }
  return result
}
