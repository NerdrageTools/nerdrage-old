export const sequence = (initialValue, functions = []) => (
	functions.reduce((value, fn) => fn(value), initialValue)
)
