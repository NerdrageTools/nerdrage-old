import Link from './Link'

describe('components/Link', () => {
  it('returns empty object for invalid URLs', () => {
    expect(Link.parseHref()).toMatchObject({})
    expect(Link.parseHref()).toMatchObject({})
  })
  it('discards query strings & hashes', () => {
    expect(Link.parseHref('/foo/bar?baz=qux')).toMatchObject({ slug: 'bar', type: 'foo' })
    expect(Link.parseHref('/foo/bar#baz')).toMatchObject({ slug: 'bar', type: 'foo' })
  })
  it('correctly identifies type & slug', () => {
    expect(Link.parseHref('https://www.google.com/foo/bar?baz=qux'))
      .toMatchObject({ slug: 'bar', type: 'foo' })
  })
})
