
export default seconds => {
  const MINUTE = 60
  const HOUR = MINUTE * 60
  const DAY = HOUR * 24
  const WEEK = DAY * 7

  return [
    [Math.floor(seconds / WEEK), 'wk'],
    [Math.floor((seconds % WEEK) / DAY), 'dy'],
    [Math.floor((seconds % DAY) / HOUR), 'hr'],
    [Math.floor((seconds % HOUR) / MINUTE), 'min'],
    [Math.floor(seconds % MINUTE), 'sec'],
  ].filter(arr => arr[0]).map(arr => arr.join('')).join(', ')
}
