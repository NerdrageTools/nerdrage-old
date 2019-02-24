import express from 'express'
import Article from '@/server/models/Article'
import Campaign from '@/server/models/Campaign'
import pluck from '@/utilities/pluck/pluck'

const controller = express()

controller.get('/:slug', async (request, response) => {
  const campaign = await Campaign.findOne({ domain: request.campaign })
  if (!request.session.isAdmin && !campaign.isVisibleTo(request.session._id)) {
    return response.status(401).send({
      message: `This content is private to the ${campaign.domain} campaign.`,
    })
  }

  const { slug } = request.params
  let article = await Article.locate(slug, campaign.id)
    .populate('campaign', 'domain name')
    .populate('createdBy lastUpdatedBy', 'name username')
    .exec()

  if (!article) {
    article = {
      ...(await new Article().render()),
      campaign: pluck(campaign.toJSON(), '_id', 'domain', 'name'),
    }
    delete article.id
  } else {
    article = await article.render()
  }
  delete article.id

  return response.status(200).json(article)
})

export default controller
