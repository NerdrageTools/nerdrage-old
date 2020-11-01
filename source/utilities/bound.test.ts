import { bound } from './bound'

describe('bound()', () => {
	test('correctly applies ranges to numeric values', () => {
		expect(bound(5, { max: 0 })).toBe(0)
		expect(bound(-5, { min: 0 })).toBe(0)
		expect(bound(0, { max: 1, min: -1 })).toBe(0)
	})

	test('correctly applies ranges to string values', () => {
		expect(bound('e', { max: 'c' })).toBe('c')
		expect(bound('a', { min: 'e' })).toBe('e')
		expect(bound('c', { max: 'e', min: 'a' })).toBe('c')
	})
})
