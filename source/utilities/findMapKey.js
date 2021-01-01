export default (map, element) => {
	if (!map || !map.entries) return undefined

	const entries = [...map.entries()]
	const found = entries.find(([, value]) => element === value)

	if (found) return found[0]
	return undefined
}
