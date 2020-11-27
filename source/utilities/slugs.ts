import { paramCase } from 'param-case'
import { unique } from '~/utilities/unique'

const strip = (string: string) => string
	.replace(/\s|\r|\n/g, '-')
	.replace(/-{2,}/g, '-')
	.replace(/[^a-z0-9._-]/gi, '')

export function slugify(input: string): string
export function slugify(input: string[]): string[]
export function slugify(input: string | string[]): string | string[] {
	if (Array.isArray(input)) {
		const list = input.map<string>(slugify).filter(slug => slug)
		return unique(list).sort()
	}

	if (!input || typeof input === 'object' || typeof input === 'function') {
		return '' // Return '' for all falsy values, objects and fn's
	}

	const lowercase = strip(input).toLowerCase()
	// Split file.ext and kebab-case each section, then rejoin
	return lowercase.split('.').map<string>(value => paramCase(value)).join('.')
}

export function extractUrlSlug(input: string): string
export function extractUrlSlug(input: string[]): string[]
export function extractUrlSlug(input: string | string[]): string | string[] {
	if (Array.isArray(input)) {
		return input.map<string>(extractUrlSlug).filter(slug => slug)
	}

	if (typeof input !== 'string') return ''

	return slugify(input.split(/[/\\]/g).pop()!.split(/[?#]/g).shift()!)
}

export function slugifyUrl(input: string): string
export function slugifyUrl(input: string[]): string[]
export function slugifyUrl(input: string | string[]): string | string[] {
	if (Array.isArray(input)) {
		return input.map<string>(slugifyUrl).filter(slug => slug)
	}

	if (typeof input !== 'string') return ''

	let result: string[] = []

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
