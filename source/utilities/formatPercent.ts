export const formatPercent = number => {
	let n = (number * 100).toString()
	n = n.indexOf('.') !== -1 ? `${n}00` : `${n}.00`
	n = n.slice(0, n.indexOf('.') + 3)
	return `${n}%`
}
