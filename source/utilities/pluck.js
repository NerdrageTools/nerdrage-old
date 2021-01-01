import flatten from '~/utilities/flatten'

export default function pluck(object, ...keys) {
	if (!object || typeof object !== 'object') return {}

	return flatten(keys).reduce((out, key) => {
		// eslint-disable-next-line no-prototype-builtins
		if (object.hasOwnProperty(key)) {
			out[key] = object[key] // eslint-disable-line no-param-reassign
		}
		return out
	}, {})
}
