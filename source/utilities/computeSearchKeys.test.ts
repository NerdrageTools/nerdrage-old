import { computeSearchKeys } from '~/utilities/computeSearchKeys'

describe('utilities/computeSearchKeys', () => {
	test('computes search terms correctly', () => {
		expect(computeSearchKeys('HaS   STr4`nG3` chAr_z charz')).toEqual([
			'4ng3',
			'arz',
			'charz',
			'harz',
			'has',
			'ng3',
			'r4ng3',
			'str4ng3',
			'tr4ng3',
		])
	})

	test('honors minLength param', () => {
		expect(computeSearchKeys('abcdefgh', { minLength: 7 })).toEqual(['abcdefgh', 'bcdefgh'])
		expect(computeSearchKeys('abcd', { minLength: 5 })).toEqual([])
	})

	test('errors if given a non-string', () => {
		expect(() => computeSearchKeys(false)).toThrow(TypeError)
		expect(() => computeSearchKeys([])).toThrow(TypeError)
		expect(() => computeSearchKeys(/ /)).toThrow(TypeError)
		expect(() => computeSearchKeys(0)).toThrow(TypeError)
	})

	test('deburrs input', () => {
		expect(computeSearchKeys('Flíeßendes wáßer', { minLength: 5 })).toEqual([
			'asser',
			'endes',
			'essendes',
			'fliessendes',
			'iessendes',
			'liessendes',
			'sendes',
			'ssendes',
			'wasser',
		])
	})
})
