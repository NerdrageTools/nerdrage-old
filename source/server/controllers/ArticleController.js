import express from 'express'
import Article from '@/server/models/Article'
import omit from '@/utilities/omit'
import pluck from '@/utilities/pluck'

export const permissions = (...required) => async (request, response, next) => {
  const { campaign, domain, session: { _id: userId, isAdmin }, params: { slug } } = request
  const article = await Article.locate(slug, campaign._id)
    .populate('campaign', 'domain name')
    .populate('createdBy lastUpdatedBy', 'name username')
    .exec()

  const isEditable = isAdmin || campaign.isEditableBy(userId)
  const isVisible = isAdmin || campaign.isVisibleTo(userId)
  const isOwner = isAdmin || campaign.isOwnedBy(userId)

  if (required.includes('view') && !isVisible) {
    return response.status(401).json({
      message: `This content is private to the ${domain} campaign.`,
    })
  }
  if (required.includes('edit') && !isEditable) {
    return response.status(401).json({
      message: `You do not have permission to edit the ${domain} campaign.`,
    })
  }
  if (article && article.secret && !isOwner) {
    return response.status(401).json({
      message: `This article is secret! Only owners of the ${campaign.domain} campaign can see or edit it.`,
    })
  }

  Object.assign(request, {
    article,
    campaign,
    isEditable,
    isOwner,
    isVisible,
    slug,
  })

  return next()
}

export const getArticle = async (request, response) => {
  const { campaign, isEditable, isOwner, slug } = request
  let { article } = request

  if (!article) {
    article = {
      ...omit(await new Article({ slug }).render(), '_id'),
      campaign: pluck(campaign.toJSON(), '_id', 'domain', 'name'),
    }
  } else {
    article = await article.render()
  }

  return response.status(200).json({ ...article, isEditable, isOwner })
}
export const upsertArticle = async (request, response) => {
  const {
    campaign,
    isEditable,
    isOwner,
    session: { _id: userId },
    slug,
  } = request
  let { article, body: updates } = request
  updates = {
    ...omit(updates, '_id', 'slug'),
    campaign: campaign._id,
    lastUpdatedBy: userId,
    slug,
  }
  if (!request.isOwner) {
    delete updates.secret // Only owners can set this field
  }

  if (article && article.campaign && article.campaign._id.equals(campaign._id)) {
    article.set(updates)
  } else {
    article = new Article(updates)
  }

  const { _id } = await article.save()
  const saved = await Article.findOne({ _id })
    .populate('campaign', 'domain name')
    .populate('createdBy lastUpdatedBy', 'name username')
    .exec()
  return response.status(200).json({ ...await saved.render(), isEditable, isOwner })
}
export const deleteArticle = async (request, response) => {
  const { article } = request
  if (article) { await article.delete() }
  return response.status(204).send()
}

const controller = express()
controller.get('/:slug', permissions('view'), getArticle)
controller.post('/:slug', permissions('edit'), upsertArticle)
controller.delete('/:slug', permissions('edit'), deleteArticle)
export default controller
