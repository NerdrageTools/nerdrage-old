import kebabCase from '~/utilities/kebabCase'
import unique from '~/utilities/unique'

const strip = string => string
	.replace(/\s|\r|\n/g, '-')
	.replace(/-{2,}/g, '-')
	.replace(/[^a-z0-9._-]/gi, '')

export function slugify(input) {
	if (Array.isArray(input)) {
		const list = input.map(slugify).filter(slug => slug)
		return unique(list).sort()
	}

	if (!input || typeof input === 'object' || typeof input === 'function') {
		return '' // Return '' for all falsy values, objects and fn's
	}

	const lowercase = strip(input).toLowerCase()
	return lowercase.split('.').map(kebabCase).join('.')
	// Split file.ext and kebab-case each section, then rejoin
}

export function extractUrlSlug(input) {
	if (Array.isArray(input)) {
		return input.map(extractUrlSlug).filter(slug => slug)
	}

	if (typeof input !== 'string') return ''

	return slugify(input.split(/[/\\]/g).pop().split(/[?#]/g).shift())
}
export function slugifyUrl(input) {
	if (Array.isArray(input)) {
		return input.map(slugifyUrl).filter(slug => slug)
	}

	if (typeof input !== 'string') return ''

	let result = []

	const [file, ...path] = input.split('/').reverse()
	const [slug, extension] = file.split('.')

	if (path.length) {
		result = [path.reverse().join('/'), '/']
	}

	result.push(slugify(slug))

	if (extension) {
		result = [...result, '.', extension]
	}

	return result.join('')
}
