import { VOID_ELEMENTS } from '~/utilities/VOID_ELEMENTS'
import { toJSX } from './toJSX'

describe('utilities/toJSX', () => {
	test('removes VOID_ELEMENT closing tags', () => {
		const html = VOID_ELEMENTS.map((el, ix) => `<${el} id="${ix}" /><${el}></${el}>`).join('\n')
		expect(toJSX(html)).toEqual(
			VOID_ELEMENTS.map((el, ix) => `<${el} id="${ix}" /><${el}>`).join('\n')
		)
	})

	test('decodes HTML-style & XML-style entities', () => {
		expect(toJSX('<div>&amp; &#xFF; &#xFC; &yuml; &uuml; &raquo;</div>'))
			.toEqual('<div>& ÿ ü ÿ ü »</div>')
	})
})
