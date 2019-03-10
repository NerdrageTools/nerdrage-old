import Campaign from '@/server/models/Campaign'

export default async (request, response, next) => {
  const domain = request.hostname.split('.').shift()
  const campaign = await Campaign.findOne({ domain })
  Object.assign(request, { campaign, domain })

  next()
}
