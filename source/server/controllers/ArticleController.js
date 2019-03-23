import express from 'express'
import Article from '@/server/models/Article'
import omit from '@/utilities/omit'
import pluck from '@/utilities/pluck'

export const permissions = (...required) => async (request, response, next) => {
  const { campaign, domain, params: { slug } } = request
  const article = await Article.locate(slug, campaign._id)
    .populate('campaign', 'domain title')
    .populate('createdBy lastUpdatedBy', 'name username')
    .exec()

  const { isEditor, isOwner, isViewer } = campaign

  if (required.includes('view') && !isViewer) {
    return response.status(401).json({
      message: `This content is private to the ${domain} campaign.`,
    })
  }
  if (required.includes('edit') && !isEditor) {
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
    isEditable: isEditor,
    isOwner,
    isVisible: isViewer,
    slug,
  })

  return next()
}

export const getArticle = async (request, response) => {
  const { campaign, isEditable, isOwner, slug } = request
  let { article } = request

  if (!article) {
    article = omit(await new Article({ slug }).render(), '_id')
  } else {
    article = await article.render()
  }

  return response.status(200).json({
    ...article,
    campaign: pluck(campaign, '_id', 'domain', 'title'),
    isEditable,
    isOwner,
  })
}
export const upsertArticle = async (request, response) => {
  const {
    campaign,
    isEditable,
    isOwner,
    slug,
    user: { _id: userId },
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
    .populate('campaign', 'domain title')
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
