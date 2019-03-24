import objectMatch from './objectMatch'

describe('utilities/objectMatch', () => {
  it('identifies 1-level matches correctly', () => {
    const object = { a: 1, b: 2, c: 3 }
    expect(objectMatch(object, {})).toBe(true)
    expect(objectMatch(object, { a: 1 })).toBe(true)
    expect(objectMatch(object, { a: 3 })).toBe(false)
    expect(objectMatch(object, { b: 2, c: 3 })).toBe(true)
    expect(objectMatch(object, { b: 2, c: 3, a: 4 })).toBe(false)
  })
  it('identifies nested matches correctly', () => {
    const object = { a: 1, b: { c: 2, d: 3 } }
    expect(objectMatch(object, { a: 1 })).toBe(true)
    expect(objectMatch(object, { b: {} })).toBe(true)
    expect(objectMatch(object, { b: { c: 2 } })).toBe(true)
  })
  it('handles arrays correctly', () => {
    const object = [1, 2, [3]]
    expect(objectMatch(object, { 1: 2 })).toBe(true)
    expect(objectMatch(object, [1, 2, [3]])).toBe(true)
  })
  it('handles non-objects gracefully', () => {
    expect(objectMatch(false, {})).toBe(false)
    expect(objectMatch(null, {})).toBe(true)
  })
})
