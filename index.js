module.exports = function argsToObject (args) {
  const isFlag = arg => arg && !arg.startsWith('--')
  const nextIsValue = value => value && !value.startsWith('--')
  const nextIsNumber = value => parseInt(value) === +value

  return args.reduce((asObject, arg, index) => {
    const value = args[index + 1]
    const key = arg.replace(/^--/, '')
    if (isFlag(arg)) return asObject
    if (nextIsValue(value)) return Object.assign(asObject, {[key]: value})
    if (nextIsNumber(value)) return Object.assign(asObject, {[key]: parseInt(value)})
    return Object.assign(asObject, {[key]: true})
  }, {})
}
