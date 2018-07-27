module.exports = function cliArgsParser (args) {
  return args.reduce((acc, arg, i, args) => {
    const next = args[i + 1]
    const argAsKey = arg.replace(/^--/, '')
    if (arg.startsWith('--')) {
      let value = (next && next.startsWith && !next.startsWith('--')) ? next : true
      if (parseInt(value) === +value) value = parseInt(value)

      acc[argAsKey] = value
    }
    return acc
  }, {})
}
