import { Deburr } from 'deburr'
import { range } from '@/utilities/range'

export const computeSearchKeys = (text = '', { minLength = 3 } = {}) => {
	if (typeof text !== 'string') throw new TypeError('text must be a string')

	const base = new Set(
		new Deburr(text).toString()
			.toLowerCase()
			.replace(/[^a-z0-9\s]/gi, '')
			.replace(/\s+/g, ' ')
			.split(/ /)
			.filter(word => word.length >= minLength),
	)
	const keys = new Set()
	Array.from(base.keys()).forEach(word => {
		keys.add(word)
		range(minLength, word.length).forEach(length => {
			base.add(word.substring(word.length - length))
		})
	})

	return Array.from(base.keys()).sort()
}
