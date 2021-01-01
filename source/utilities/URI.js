export function URI(request, url) {
	const baseURL = request ? `${request.protocol}://${request.get('Host')}` : ''
	return `${baseURL}${url}`
}
