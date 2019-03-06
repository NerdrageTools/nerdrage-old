import cleanUp from './cleanUp'

describe('models/Article/cleanUp', () => {
  it('clears markup from links and includes', () => {
    expect(cleanUp(`
      <a href="/article/foo" class="highlight missing">Foo!</a>
      <a href="/article/bar">Bar!</a>
      <a href="/media/baz.gif" class="missing" target="_new">Baz!</a>
      <a href="http://www.google.com/foo" class="external">Google Fu</a>
      <include from="foo" sections="bar,baz">
        Bar!
        Baz!
      </include>
    `)).toEqual(`
      <a href="foo" class="highlight">Foo!</a>
      <a href="bar">Bar!</a>
      <a href="baz.gif">Baz!</a>
      <a href="http://www.google.com/foo">Google Fu</a>
      <include from="foo" sections="bar,baz"/>
    `)
  })
})
