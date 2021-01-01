import flatten from '~/utilities/flatten'

export default (object, ...keys) => {
	if (typeof object !== 'object') return {}
	const omittedKeys = flatten(keys)

	return Object.keys(object).reduce((out, key) => {
		// eslint-disable-next-line no-prototype-builtins
		if (!omittedKeys.includes(key)) {
			out[key] = object[key] // eslint-disable-line no-param-reassign
		}
		return out
	}, {})
}
