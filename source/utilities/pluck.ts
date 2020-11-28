export const pluck = <
	T extends object, // eslint-disable-line @typescript-eslint/ban-types
	O = { [K in keyof T]: T[K] }
>(object: T, ...keys: (keyof T)[]): O => {
	if (!object || typeof object !== 'object') {
		return {} as O
	}

	return keys.flat().reduce(
		(out, key) => Object.assign(out, { [key]: object[key as keyof T] }),
		{} as O,
	)
}
