const objectMatch = (object = {}, match = {}) => {
  if (typeof object !== typeof match) return false

  return Object.keys(match).every(key => (
    (typeof object[key] === 'object' || Array.isArray(object[key]))
      ? objectMatch(object[key], match[key])
      : object[key] === match[key]
  ))
}

export default objectMatch
