import Campaign from '@/server/models/Campaign'
import User from '@/server/models/User'

export default async (request, response, next) => {
  const host = request.get('host') || ''
  const sessionScope = host.split('.').slice(-2).join('.').split(':')[0]
  request.sessionOptions.domain = sessionScope

  const domain = request.hostname.split('.').shift()
  request.domain = domain
  request.campaign = await Campaign.findOne({ domain })

  if (request.session.username) {
    const user = await User.findOne({ username: request.session.username })
    request.user = user
    request.session = user.toProfile()
    request.session.lastRequest = (new Date()).getMilliseconds()
  }
  next()
}
