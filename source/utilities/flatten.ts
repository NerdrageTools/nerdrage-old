export function flatten(array, depth = Infinity) {
	if (!array || !Array.isArray(array)) {
		throw new TypeError(`cannot flatten non-Array value ${JSON.stringify(array)}`)
	}

	return array.reduce((all, next) => {
		if (depth > 1 && next && Array.isArray(next)) {
			return all.concat(flatten(next, depth - 1))
		}

		return all.concat(next)
	}, [])
}
