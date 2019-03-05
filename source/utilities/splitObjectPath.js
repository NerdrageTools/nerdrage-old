const PATH_SPLITTER = /([a-z0-9-_]+)(?![["'\].])*/ig

export default path => {
  if (typeof path !== 'string') return null
  return path.match(PATH_SPLITTER)
}
