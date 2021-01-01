export default (initialValue, functions = []) => (
	functions.reduce((value, fn) => fn(value), initialValue)
)
