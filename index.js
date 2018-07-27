const isValue = arg => arg && !arg.startsWith('--')
const isNumber = arg => parseInt(arg) === +arg

module.exports = function argsToObject (args) {
  return args.reduce((asObject, arg, index) => {
    const next = args[index + 1]
    const key = arg.replace(/^--/, '')
    if (isValue(arg)) return asObject
    if (isValue(next)) return Object.assign(asObject, {[key]: next})
    if (isNumber(next)) return Object.assign(asObject, {[key]: parseInt(next)})
    return Object.assign(asObject, {[key]: true})
  }, {})
}
