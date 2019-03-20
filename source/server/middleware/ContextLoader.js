import { getCampaign } from '@/server/controllers/CampaignController'
import { getUser } from '@/server/controllers/UserController'

export default async (request, response, next) => {
  const host = request.get('host') || ''
  const sessionScope = host.split('.').slice(-2).join('.').split(':')[0]
  request.sessionOptions.domain = sessionScope

  if (request.session && !request.session.anonymous) {
    const user = await getUser(request.session.username, true)
    if (!user.anonymous) {
      request.session = {
        lastRequest: (new Date()).getMilliseconds(),
        username: user.username,
      }
      request.user = user
    } else {
      request.session = null
      request.user = user
    }
  }
  request.user = request.user || { anonymous: true }

  const domain = request.hostname.split('.').shift()
  request.domain = domain
  request.returnOnly = true
  request.campaign = await getCampaign(domain, request.user)

  return next()
}
