module.exports = function cliArgsParser (args) {
  return args.reduce((asObject, arg, index) => {
    const next = args[index + 1]
    const key = arg.replace(/^--/, '')
    if (!arg.startsWith('--')) return asObject
    if (next && next.startsWith && !next.startsWith('--')) return Object.assign(asObject, {[key]: next})
    if (parseInt(next) === +next) return Object.assign(asObject, {[key]: parseInt(next)})
    return Object.assign(asObject, {[key]: true})
  }, {})
}
