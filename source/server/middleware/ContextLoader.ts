import { Request, RequestHandler } from 'express'
import { loadCampaign } from '~/server/controllers/CampaignController'
import { clearCookie, getUser, readCookie, setCookie } from '~/server/controllers/UserController'

export const ContextLoader: RequestHandler = (
	async (request: Request, response, next) => {
		const subdomain = request.hostname.split('.').shift() ?? ''
		request.domainName = request.hostname.split('.').slice(1).join('.')
		request.subdomain = subdomain

		const session = readCookie(request)
		if (session && session.username) {
			const user = await getUser(session.username, true)
			if (!user.anonymous) {
				setCookie(response, user.username, request.domainName)
				request.user = user
			} else {
				clearCookie(request, response)
				request.user = { anonymous: true }
			}
		}
		request.user = request.user ?? { anonymous: true }
		request.campaign = await loadCampaign(subdomain, request.user)

		return next()
	}
) as RequestHandler
