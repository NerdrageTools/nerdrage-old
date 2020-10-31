import { titleCase } from './titleCase'

test('converts camelCase words', () => {
	expect(titleCase('camelCaseWords')).toBe('Camel Case Words')
})

test('converts strings with spaces', () => {
	expect(titleCase('strings with spaces')).toBe('Strings With Spaces')
})

test('converts CAPITALIZED WORDS', () => {
	expect(titleCase('CAPITALIZED WORDS')).toBe('Capitalized Words')
})

test('converts kebab-case words', () => {
	expect(titleCase('kebab-case-words')).toBe('Kebab Case Words')
})
