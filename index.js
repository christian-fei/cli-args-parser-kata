module.exports = function cliArgsParser (args) {
  const isFlag = arg => !arg.startsWith('--')
  const nextIsValue = next => next && next.startsWith && !next.startsWith('--')
  const nextIsNumber = next => parseInt(next) === +next

  return args.reduce((asObject, arg, index) => {
    const next = args[index + 1]
    const key = arg.replace(/^--/, '')
    if (isFlag(arg)) return asObject
    if (nextIsValue(next)) return Object.assign(asObject, {[key]: next})
    if (nextIsNumber(next)) return Object.assign(asObject, {[key]: parseInt(next)})
    return Object.assign(asObject, {[key]: true})
  }, {})
}
