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
test('parse multiple flags at once', () => {
  const result = parseArgs(['--foo', '--bar', 'baz', '--number', '1'])
  assert.deepEqual(result, {
    bar: 'baz',
    foo: true,
    number: 1
  })
})
test('try to support both `string` and `array` input formats', () => {
  const result = parseArgs('["--foo", "--bar", "baz", "--number", "1"]')
  assert.deepEqual(result, {
    bar: 'baz',
    foo: true,
    number: 1
  })
})

function parseArgs ([arg, ...args], result = {}, flag = undefined) {
  if (arg && arg.startsWith && arg.startsWith('--')) {
    flag = arg.slice(2)
    return parseArgs(args, Object.assign(result, {[flag]: true}), flag)
  }
  if (flag && arg) return parseArgs(args, Object.assign(result, {[flag]: arg}))
  return result
}
