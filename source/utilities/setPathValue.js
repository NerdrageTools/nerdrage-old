import splitObjectPath from '@/utilities/splitObjectPath'

export default (object, path, value) => {
	const split = splitObjectPath(path)
	const property = split.pop()
	const target = split.reduce((o, key) => o[key] || {}, object)

	if (target && target.isIEditable) {
		target.set(property, value)
	} else {
		target[property] = value
	}
}
