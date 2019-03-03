import express from 'express'
import Article from '@/server/models/Article'
import Campaign from '@/server/models/Campaign'
import omit from '@/utilities/omit'
import pluck from '@/utilities/pluck'

export const getArticle = async (request, response) => {
  const campaign = await Campaign.findOne({ domain: request.campaign })
  if (!request.session.isAdmin && !campaign.isVisibleTo(request.session._id)) {
    return response.status(401).json({
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
      ...omit(await new Article({ slug }).render(), '_id'),
      campaign: pluck(campaign.toJSON(), '_id', 'domain', 'name'),
    }
  } else {
    article = await article.render()
  }

  return response.status(200).json(article)
}
export const updateArticle = async (request, response) => {
  const campaign = await Campaign.findOne({ domain: request.campaign })
  if (!request.session.isAdmin && !campaign.isEditableBy(request.session._id)) {
    return response.status(401).json({
      message: `You do not have permission to edit the ${campaign.domain} campaign.`,
    })
  }

  const { slug } = request.params
  let article = await Article.findOne({ slug, campaign: campaign._id })
  if (article) {
    article.set(omit(request.body, '_id'))
  } else {
    article = new Article({
      ...omit(request.body, '_id'),
      campaign: campaign._id,
      slug,
    })
  }

  const saved = await article.save()
  const rendered = await saved.render()
  return response.status(200).json(rendered)
}

export const deleteArticle = async (request, response) => {
  const campaign = await Campaign.findOne({ domain: request.campaign })
  if (!request.session.isAdmin && !campaign.isEditableBy(request.session._id)) {
    return response.status(401).json({
      message: `You do not have permission to edit the ${campaign.domain} campaign.`,
    })
  }

  const { slug } = request.params
  await Article.findOneAndDelete({ slug, campaign: campaign._id })

  return response.status(204).send()
}

const controller = express()
controller.get('/:slug', getArticle)
controller.post('/:slug', updateArticle)
controller.delete('/:slug', deleteArticle)
export default controller
