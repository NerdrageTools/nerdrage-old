import { getPathValue } from '~/utilities/getPathValue'

describe('utilities/resolvePath', () => {
	test('extracts properties from objects and arrays', () => {
		const object = {
			a: { b: { c: { d: 4 } } },
			array: [[[0], 1, 2], 1],
			mixed: { a: [{ c: [1] }] },
		}

		expect(getPathValue(object, 'a.b.c.d')).toEqual(4)
		expect(getPathValue(object, 'array[0].0["0"]')).toEqual(0)
		expect(getPathValue(object, 'mixed["a"].0.c[0]')).toEqual(1)
		expect(getPathValue(object, "array[0].0['0']")).toEqual(0)
		expect(getPathValue(object, "mixed['a'].0.c[0]")).toEqual(1)
	})

	test('returns undefined for invalid paths', () => {
		expect(getPathValue({})).toBe(undefined)
		expect(getPathValue({}, '')).toBe(undefined)
	})
})