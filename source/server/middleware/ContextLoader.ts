import { IRequest, RequestHandler } from 'express'
import { loadCampaign } from '~/server/controllers/CampaignController'
import { clearCookie, readCookie, setCookie } from '~/server/controllers/UserController'
import { Users } from '~/server/models/User'
import { ICampaign } from '../schema/ICampaign'

export const ContextLoader: RequestHandler = (
	async (request: IRequest, response, next) => {
		const subdomain = request.hostname.split('.').shift() ?? ''
		request.domainName = request.hostname.split('.').slice(1).join('.')
		request.subdomain = subdomain

		const session = readCookie(request)
		const username = session?.username
		const user = await (username ? Users.findOne({ username }) : Promise.resolve(null))

		if (user) {
			request.campaign = await loadCampaign(subdomain, await user.toProfile()) as ICampaign
			request.user = await user.toProfile()
			setCookie(request, response)
		} else {
			clearCookie(request, response)
			request.campaign = await loadCampaign(subdomain, null) as ICampaign
			request.user = null
		}

		return next()
	}
) as RequestHandler
