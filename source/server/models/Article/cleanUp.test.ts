import { cleanUp } from '~/server/models/Article/cleanUp'

describe('models/Article/cleanUp', () => {
	test('clears markup from links and includes', () => {
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
      <a href="/article/foo" class="highlight">Foo!</a>
      <a href="/article/bar">Bar!</a>
      <a href="/media/baz.gif">Baz!</a>
      <a href="http://www.google.com/foo">Google Fu</a>
      <include from="foo" sections="bar,baz"/>
    `.trim())

		expect(cleanUp('<a href="foo">Foo!</a>'))
			.toBe('<a href="/article/foo">Foo!</a>')
	})
})
