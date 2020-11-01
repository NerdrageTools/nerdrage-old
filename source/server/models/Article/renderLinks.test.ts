/** @jest-environment node */
import mockingoose from 'mockingoose'
import { Article } from '@/server/models/Article'
import { renderLinks } from './renderLinks'

const mockExec = jest.fn()
global.mockModel('Article', {
	exec: mockExec,
})
// const mockArticle = {
// 	exec: jest.fn(),
// 	find: () => mockArticle,
// 	select: () => mockArticle,
// }

// jest.mock('@/server/models/Article', () => ({
// 	__esModule: true,
// 	Article: mockArticle,
// }))

describe('models/Article/renderLinks', () => {
	beforeEach(() => {
		mockingoose.resetAll()
		mockExec.mockReset()
	})

	afterAll(() => {
		mockExec.mockRestore()
	})

	test('computes links[]', async () => {
		mockExec.mockImplementation(() => Promise.resolve(null))
		const { links } = await renderLinks(`
      <a href="foo">Foo</a>
      <a href="/foo/bar">Bar</a>
      <a href="http://google.com/baz">Google Baz</a>
      <a href="foo">Foo</a>
    `)

		expect(links).toEqual(['bar', 'foo'])
	})

	test('computes missing[]', async () => {
		mockingoose(Article).toReturn([{ slug: 'foo' }, { slug: 'bar' }], 'find')
		const whenFound = await renderLinks(`
      <a href="foo">Foo</a>
      <a href="/foo/bar">Bar</a>
      <a href="http://google.com/baz">Google Baz</a>
      <a href="foo">Foo</a>
    `)
		expect(whenFound.missing).toEqual([])

		mockingoose(Article).toReturn([], 'find')
		const whenMissing = await renderLinks(`
      <a href="foo">Foo</a>
      <a href="/foo/bar">Bar</a>
      <a href="http://google.com/baz">Google Baz</a>
      <a href="foo">Foo</a>
    `)

		expect(whenMissing.missing).toEqual(['bar', 'foo'])
	})
})
