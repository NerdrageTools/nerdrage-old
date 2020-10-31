export const compareBy = (prop, reversed = false) => (objectA, objectB) => {
	const a = String(objectA instanceof Map ? objectA.get(prop) : objectA[prop])
	const b = String(objectB instanceof Map ? objectB.get(prop) : objectB[prop])

	if (reversed) return b.localeCompare(a)
	return a.localeCompare(b)
}
