import { interpolate } from './interpolate'

describe('utilities/string/interpolate', () => {
	test('resolves simple properties', () => {
		const template = 'the value is: ${value}'
		const object = { value: 'foo' }
		expect(interpolate(template, object)).toBe('the value is: foo')
	})

	test('resolves child properties', () => {
		const object = { computed: { sum: 3 }, left: 1, right: 2 }
		const template = '${left} + ${right} = ${computed.sum}'
		expect(interpolate(template, object)).toBe('1 + 2 = 3')
	})

	test('resolves array elements', () => {
		const object = [1, { foo: 'bar' }, { baz: [0, 1] }]
		const template = '${[0]}, ${[1].foo}, ${[2].baz[1]}'
		expect(interpolate(template, object)).toBe('1, bar, 1')
	})
})
