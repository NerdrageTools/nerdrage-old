import { getCampaign } from '@/server/controllers/CampaignController'
import {
	clearCookie, getUser, readCookie, setCookie,
} from '@/server/controllers/UserController'

export default async (request, response, next) => {
	const subdomain = request.hostname.split('.').shift()
	request.domain = request.hostname.split('.').slice(1).join('.')
	request.subdomain = subdomain

	const session = readCookie(request)
	if (session && session.username) {
		const user = await getUser(session.username, true)
		if (!user.anonymous) {
			setCookie(response, user.username, request.domain)
			request.user = user
		} else {
			clearCookie(request, response)
			request.user = null
		}
	}
	request.user = request.user || { anonymous: true }

	request.returnOnly = true
	request.campaign = await getCampaign(subdomain, request.user)

	return next()
}
