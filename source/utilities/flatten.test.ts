import { flatten } from './flatten'

describe('utilities/array/flatten', () => {
	test('leaves 1-dimensional arrays intact', () => {
		expect(flatten([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7])
	})

	test('flattens 2-dimensional arrays', () => {
		expect(flatten([[1, 2, 3], 4, [5, 6, 7]])).toEqual([1, 2, 3, 4, 5, 6, 7])
	})

	test('flattens 3-dimensional arrays', () => {
		expect(flatten([[[1, 2], 3], 4, [5, [6, 7]]])).toEqual([1, 2, 3, 4, 5, 6, 7])
	})

	test('flattens 25-dimensional arrays', () => {
		const result = flatten([[[[[[[[[[[[[[[[[[[[[[[[[1], 2], 3], 4], 5], 6], 7]]]]]]]]]]]]]]]]]]])
		expect(result).toEqual([1, 2, 3, 4, 5, 6, 7])
	})

	test('only recurses to the specified depth', () => {
		expect(flatten([[[[1, 2, 3, 4, 5]]]], 1)).toEqual([[[1, 2, 3, 4, 5]]])
	})

	test('throws an error when passed invalid input', () => {
		expect(() => flatten('not an array')).toThrow(TypeError)
		expect(() => flatten('not an array')).toThrow(/cannot flatten non-Array value/)
	})
})
