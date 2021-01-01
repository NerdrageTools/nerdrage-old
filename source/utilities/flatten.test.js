import flatten from './flatten'

describe('utilities/array/flatten', () => {
	it('leaves 1-dimensional arrays intact', () => {
		expect(flatten([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7])
	})
	it('flattens 2-dimensional arrays', () => {
		expect(flatten([[1, 2, 3], 4, [5, 6, 7]])).toEqual([1, 2, 3, 4, 5, 6, 7])
	})
	it('flattens 3-dimensional arrays', () => {
		expect(flatten([[[1, 2], 3], 4, [5, [6, 7]]])).toEqual([1, 2, 3, 4, 5, 6, 7])
	})
	it('flattens 25-dimensional arrays', () => {
		const result = flatten([[[[[[[[[[[[[[[[[[[[[[[[[1], 2], 3], 4], 5], 6], 7]]]]]]]]]]]]]]]]]]])
		expect(result).toEqual([1, 2, 3, 4, 5, 6, 7])
	})
	it('only recurses to the specified depth', () => {
		expect(flatten([[[[1, 2, 3, 4, 5]]]], 1)).toEqual([[[1, 2, 3, 4, 5]]])
	})
	it('throws an error when passed invalid input', () => {
		expect(() => flatten('not an array')).toThrow(TypeError)
		expect(() => flatten('not an array')).toThrow(/cannot flatten non-Array value/)
	})
})
