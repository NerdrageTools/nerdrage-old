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
    /* eslint-disable sort-keys */
    { domain: campaign.domain, $or: [{ aliases: slug }, { slug }] },
    { domain: undefined, $or: [{ aliases: slug }, { slug }] },
    /* eslint-ensable sort-keys */
  ] }).sort({ campaign: -1 })
    .populate('campaign', 'domain name')
    .populate('createdBy lastUpdatedBy', 'name username')
    .exec()

  if (!article) {
    article = await new Article().render()
    delete article.id
  } else {
    article = await article.render()
  }
  delete article._id

  return response.status(200).json(article)
})

export default controller
