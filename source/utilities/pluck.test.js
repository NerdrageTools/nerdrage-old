import pluck from './pluck'

it('utilities/pluck', () => {
	const object = { bar: 'BAR', foo: 'FOO' }
	expect(pluck(object, 'foo', 'bar')).toEqual(object)

	expect(pluck(object, ['foo'])).toEqual({ foo: 'FOO' })
	expect(pluck(object, ['foo', 'baz', 'qux'])).toEqual({ foo: 'FOO' })
	expect(pluck(object, 'baz', 'qux')).toEqual({ })

	expect(pluck(object)).toEqual({ })
	expect(pluck(false, 'foo')).toEqual({ })
})
