export default bytes => {
  /* eslint-disable no-mixed-operators */
  const KB = 1024
  const MB = 1024 * KB
  const GB = 1024 * MB
  const TB = 1024 * GB
  const PB = 1024 * TB

  const significant = [
    [Math.floor(bytes / PB), 'Pb', PB],
    [Math.floor(bytes % PB / TB), 'Tb', TB],
    [Math.floor(bytes % TB / GB), 'Gb', GB],
    [Math.floor(bytes % GB / MB), 'Mb', MB],
    [Math.floor(bytes % MB / KB), 'Kb', KB],
    [Math.floor(bytes % KB), 'bytes', 1],
  ].filter(arr => arr[0])[0]
  const major = significant[0].toString()
  const minor = (bytes % significant[2] / significant[2]).toString().slice(1, 4)
  const type = significant[1]

  return `${major}${minor}${type}`
}
