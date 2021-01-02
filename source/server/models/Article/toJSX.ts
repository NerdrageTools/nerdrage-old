import { decodeHTML, decodeXML, encodeHTML5 } from 'entities'
import { html_beautify as beautify } from 'js-beautify'
import { VOID_ELEMENTS } from '~/utilities/VOID_ELEMENTS'

const BEAUTIFY_OPTIONS = {
	end_with_newline: true,
	indent_char: ' ',
	indent_size: 2,
	preserve_newlines: false,
	wrap_line_length: 0,
}
const VOID_ELEMENT_CLOSING_TAGS = new RegExp(`<\/(${VOID_ELEMENTS.join('|')})>`, 'g')

export const toJSX = (html: string = '') => (
	([
		decodeHTML,
		decodeXML,
		(value: string) => value.replace(VOID_ELEMENT_CLOSING_TAGS, '')
	]).reduce((value, fn) => fn(value), html)
)
