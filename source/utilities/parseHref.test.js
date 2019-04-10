import parseHref from './parseHref'

describe('components/Link', () => {
  it('returns empty object for invalid URLs', () => {
    expect(parseHref()).toMatchObject({})
    expect(parseHref()).toMatchObject({})
  })
  it('discards query strings & hashes', () => {
    expect(parseHref('/foo/bar?baz=qux')).toMatchObject({ slug: 'bar', type: 'foo' })
    expect(parseHref('/foo/bar#baz')).toMatchObject({ slug: 'bar', type: 'foo' })
  })
  it('correctly identifies type & slug', () => {
    expect(parseHref('https://www.google.com/foo/bar?baz=qux'))
      .toMatchObject({ slug: 'bar', type: 'foo' })
  })
  it('correctly identifies subdomain', () => {
    expect(parseHref('subby/foo/bar?baz=qux'))
      .toMatchObject({ slug: 'bar', subdomain: 'subby', type: 'foo' })
    expect(parseHref('subby/foo/bar#baz'))
      .toMatchObject({ slug: 'bar', subdomain: 'subby', type: 'foo' })
  })
})
