import splitObjectPath from 'core/utilities/splitObjectPath'

export default (object, path) => {
  if (typeof path !== 'string') return undefined

  const split = splitObjectPath(path)

  if (!Array.isArray(split)) return undefined

  const property = split.pop()
  const target = split.reduce((o, key) => o[key] || {}, object)

  if (target) return target[property]
  return undefined
}
