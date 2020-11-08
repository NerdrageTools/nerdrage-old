interface Options<T> { max?: T, min?: T }

export const bound = <T>(value: T, { min, max }: Options<T> = {}): T => {
	if (min !== undefined && value < min) return min
	if (max !== undefined && value > max) return max
	return value
}
