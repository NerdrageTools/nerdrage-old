import compareBy from './compareBy'

it('sorts arrays of objects correctly', () => {
  const array = [{ a: 3 }, { a: 1 }, { a: 2 }]
  array.sort(compareBy('a'))
  expect(array.map(o => o.a)).toEqual([1, 2, 3])
})

it('sorts arrays of Maps correctly', () => {
  const array = [new Map([['a', 3]]), new Map([['a', 1]]), new Map([['a', 2]])]
  array.sort(compareBy('a'))
  expect(array.map(m => m.get('a'))).toEqual([1, 2, 3])
})

it('sorts arrays of mixed Object and Map', () => {
  const array = [new Map([['a', 3]]), { a: 1 }, new Map([['a', 2]])]
  array.sort(compareBy('a'))
  expect(array.map(o => (o.get ? o.get('a') : o.a))).toEqual([1, 2, 3])
})

it('sorts with case-insensitivity', () => {
  const array = [{ a: 'c' }, { a: 'B' }, { a: 'a' }]
  array.sort(compareBy('a'))
  expect(array.map(o => o.a)).toEqual(['a', 'B', 'c'])
})

it('reverses sorting if specified', () => {
  const array = [{ a: 'c' }, { a: 'B' }, { a: 'a' }]
  array.sort(compareBy('a', true))
  expect(array.map(o => o.a)).toEqual(['c', 'B', 'a'])
})
