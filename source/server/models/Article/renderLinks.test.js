import mockingoose from 'mockingoose'
import renderLinks from './renderLinks'
import '~/server/models/Article'

describe('models/Article/renderLinks', () => {
	beforeEach(() => {
		mockingoose.resetAll()
	})

	it('computes links[]', async done => {
		mockingoose.Article.toReturn(null, 'findOne')

		const { links } = await renderLinks(`
			<a href="foo">Foo</a>
			<a href="/foo/bar">Bar</a>
			<a href="http://google.com/baz">Google Baz</a>
			<a href="foo">Foo</a>
		`)

		expect(links).toEqual(['bar', 'foo'])
		done()
	})

	it('computes missing[]', async done => {
		mockingoose.Article.toReturn([{ slug: 'foo' }, { slug: 'bar' }], 'find')
		const whenFound = await renderLinks(`
			<a href="foo">Foo</a>
			<a href="/foo/bar">Bar</a>
			<a href="http://google.com/baz">Google Baz</a>
			<a href="foo">Foo</a>
		`)
		expect(whenFound.missing).toEqual([])

		mockingoose.Article.toReturn([], 'find')
		const whenMissing = await renderLinks(`
			<a href="foo">Foo</a>
			<a href="/foo/bar">Bar</a>
			<a href="http://google.com/baz">Google Baz</a>
			<a href="foo">Foo</a>
		`)

		expect(whenMissing.missing).toEqual(['bar', 'foo'])
		done()
	})
})
