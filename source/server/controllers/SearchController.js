import express from 'express'
import Article from '@/server/models/Article'

export const permissions = async (request, response, next) => {
  const { campaign, user } = request

  const allowPrivate = user.isAdmin || campaign.isOwnedBy(user._id)
  const allowPublic = user.isAdmin || campaign.isVisibleTo(user._id)

  Object.assign(request, {
    allowPrivate,
    allowPublic,
    campaign,
  })

  return next()
}

export const searchArticles = async (request, response) => {
  const {
    allowPrivate,
    allowPublic,
    campaign: { _id: campaignId },
    params: { searchTerm: $search },
  } = request

  if (!allowPublic) {
    return response.status(401).send({
      message: 'You are not authorized to view articles in this campaign.',
    })
  }

  return response.status(200).json(
    await Article.find({ $and: [
      { campaign: campaignId },
      !allowPrivate ? { secret: false } : {},
      { $or: [
        { $text: { $search } },
        { searchKeys: new RegExp(`^${$search}`) },
      ] },
    ] })
  )
}

const controller = express()
controller.get('/articles/:searchTerm', permissions, searchArticles)
export default controller
