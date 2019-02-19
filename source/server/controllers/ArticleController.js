import express from 'express'
import Article from '@/server/models/Article'
import Campaign from '@/server/models/Campaign'

const controller = express()

controller.get('/:slug', async (request, response) => {
  const campaign = await Campaign.findOne({ domain: request.campaign })
  if (!campaign.isVisibleTo(request.session._id)) {
    return response.status(401).send({
      message: `This content is private to the ${request.campaign} campaign.`,
    })
  }

  const { slug } = request.params
  let article = await Article.findOne({ $or: [
    { domain: campaign.domain, slug },
    { domain: undefined, slug },
  ] }).sort({ campaign: -1 })
    .populate('campaign', 'domain name')
    .populate('createdBy lastUpdatedBy', 'name username')
    .exec()

  if (!article) {
    article = new Article().toJSON()
    delete article._id
  }

  return response.status(200).json(article)
})

export default controller
