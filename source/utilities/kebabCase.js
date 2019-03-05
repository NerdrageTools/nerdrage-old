export default string => {
  if (!string) return ''

  const matches = string.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
  if (!matches) return ''

  return matches.map(x => x.toLowerCase()).join('-')
}
