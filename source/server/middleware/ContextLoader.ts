import { IRequest, RequestHandler } from 'express'
import { loadCampaign } from '~/server/controllers/CampaignController'
import { clearCookie, getUser, readCookie, setCookie } from '~/server/controllers/UserController'
import { IUser } from '~/server/schema/IUser'
import { ICampaign } from '../schema/ICampaign'

export const ContextLoader: RequestHandler = (
	async (request: IRequest, response, next) => {
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
				request.user = { anonymous: true } as IUser
			}
		}
		request.user = request.user ?? { anonymous: true }
		request.campaign = await loadCampaign(subdomain, request.user) as ICampaign

		return next()
	}
) as RequestHandler
