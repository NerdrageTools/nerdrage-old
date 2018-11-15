import range from 'core/utilities/range'

describe('range()', () => {
  it('returns 1 value when low === high', () => {
    const expected = [1]
    const actual = range(1, 1)
    expect(actual).toEqual(expected)
  })
  it('calculates increasing ranges correctly', () => {
    const expected = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
    const actual = range(-5, 5)
    expect(actual).toEqual(expected)
  })
  it('calculates decreasing ranges correctly', () => {
    const expected = [5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]
    const actual = range(5, -5)
    expect(actual).toEqual(expected)
  })
})
