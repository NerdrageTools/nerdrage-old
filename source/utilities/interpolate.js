import getPathValue from '~/utilities/getPathValue'

export default (string, object) => {
	const matches = string.match(/(\${[a-z0-9-_[\].]*})/gi)
	if (!matches) { return string }

	const paths = matches.map(v => v.slice(2, v.length - 1))

	return paths.reduce((s, path) => (
		s.replace(`\${${path}}`, String(getPathValue(object, path)))
	), string)
}
