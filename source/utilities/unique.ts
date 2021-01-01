export function unique<T>(...args: T[]): T[]
export function unique<T>(array: T[]): T[]
export function unique<T>(first: T | T[], ...rest: T[]): T[] {
	let list: T[]
	if (rest.length > 0) {
		list = [first as T, ...rest]
	} else if (Array.isArray(first) || (first as any)?.isMongooseArray) {
		list = first as T[]
	} else {
		list = [first]
	}

	return list.filter((el, ix, all) => all.indexOf(el) === ix)
}
