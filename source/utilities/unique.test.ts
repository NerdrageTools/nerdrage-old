import { unique } from '~/utilities/unique'

describe('utilities/unique', () => {
	test('can filter simple values', () => {
		expect(unique([1, 3, 5, 7, 9, 5, 3, 1, 9])).toEqual([1, 3, 5, 7, 9])
		expect(unique(['a', 3, 5, 'a', 9, false, 3, false, 9])).toEqual(['a', 3, 5, 9, false])
		expect(unique([1, '1', 3, 5, 7, '7', 9, 9])).toEqual([1, '1', 3, 5, 7, '7', 9])
	})

	test('removes simple duplicates', () => {
		expect(unique([1, 'a', true, 1, 'a', true])).toEqual([1, 'a', true])
	})

	test('handles multiple params', () => {
		expect(unique(1, 'a', true, 1, 'a', true)).toEqual([1, 'a', true])
	})
})
