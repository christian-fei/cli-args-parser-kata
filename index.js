const isFlag = arg => arg && !arg.startsWith('--')
const isNumber = value => parseInt(value) === +value

module.exports = function argsToObject (args) {
  return args.reduce((asObject, arg, index) => {
    const value = args[index + 1]
    const key = arg.replace(/^--/, '')
    if (isFlag(arg)) return asObject
    if (isFlag(value)) return Object.assign(asObject, {[key]: value})
    if (isNumber(value)) return Object.assign(asObject, {[key]: parseInt(value)})
    return Object.assign(asObject, {[key]: true})
  }, {})
}
