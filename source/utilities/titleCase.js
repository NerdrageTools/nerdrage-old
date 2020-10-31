export const titleCase = string => {
	if (!string) return ''

	return string
		.replace(/([a-z])([A-Z])/g, '$1 $2')
		.toLowerCase().split(/[-_ ]/g)
		.map(word => (word.charAt(0).toUpperCase() + word.slice(1)))
		.join(' ')
}
