import omit from '@nerdrage/core/utilities/omit'

it('utilities/omit', () => {
  const object = { bar: 'BAR', foo: 'FOO' }
  expect(omit(object, 'foo')).toEqual({ bar: 'BAR' })

  expect(omit(object, ['foo'])).toEqual({ bar: 'BAR' })
  expect(omit(object, ['foo', 'baz', 'qux'])).toEqual({ bar: 'BAR' })
  expect(omit(object, 'baz', 'qux')).toEqual(object)

  expect(omit(object)).toEqual(object)
  expect(omit(false, 'foo')).toEqual({})
})
