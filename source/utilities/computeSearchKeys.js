import { Deburr } from 'deburr'
import range from '@/utilities/range'

export default (text = '', { minLength = 3 } = {}) => {
  if (typeof text !== 'string') throw new TypeError('text must be a string')

  const keys = new Set(
    new Deburr(text)
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s\s+/g, ' ')
      .split(/\s/)
      .filter(word => word.length >= minLength)
  )
  Array.from(keys.keys()).forEach(word => {
    range(minLength, word.length).forEach(length => {
      keys.add(word.substring(word.length - length))
    })
  })

  return Array.from(keys.keys()).sort()
}
