export const omit = <
	T extends Record<string, unknown>,
	K extends [...(keyof T)[]],
	O = { [K2 in Exclude<keyof T, K[number]>]: T[K2] }
>(object: T, ...keys: K): O => {
	if (typeof object !== 'object') {
		return {} as O
	}

	const omittedKeys = keys.flat() as Array<keyof T>
	return Object.keys(object).reduce(
		(out, key: keyof T) => {
			if (omittedKeys.includes(key)) {
				return out
			}
			return Object.assign(out, { [key]: object[key] })
		},
		{} as O,
	)
}
