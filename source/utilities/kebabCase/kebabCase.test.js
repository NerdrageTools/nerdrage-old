import kebabCase from '@/utilities/kebabCase'

it('utilities/kebabCase', () => {
  expect(kebabCase('This is a String')).toEqual('this-is-a-string')
  expect(kebabCase('thisIsAString')).toEqual('this-is-a-string')
  expect(kebabCase('th4s|sAStr|ng')).toEqual('th4-s-s-a-str-ng')
})
