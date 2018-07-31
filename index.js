module.exports = function parseArgs (args, result = {}, flag = undefined) {
  if (typeof args === 'string') args = JSON.parse(args)
  const [arg] = args.splice(0, 1)
  if (arg && arg.startsWith && arg.startsWith('--')) {
    flag = arg.slice(2)
    return parseArgs(args, Object.assign(result, {[flag]: true}), flag)
  }
  if (flag && arg) return parseArgs(args, Object.assign(result, {[flag]: arg}))
  return result
}
