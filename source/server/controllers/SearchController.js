import { Deburr } from 'deburr'
import entities from 'entities'
import express from 'express'
import Article from '@/server/models/Article'
import Campaign404 from '@/server/errors/Campaign404'

export const permissions = async (request, response, next) => {
  const { campaign, user } = request

  const allowPrivate = user && (user.isAdmin || campaign.isOwnedBy(user._id))
  const allowPublic = user && (user.isAdmin || campaign.isVisibleTo(user._id))

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
    campaign,
    params: { searchTerm, limit = 10 },
  } = request

  if (!allowPublic) {
    return response.status(401).send({
      message: 'You are not authorized to view articles in this campaign.',
    })
  }

  const $search = new Deburr(entities.decodeHTML(searchTerm)).toString()

  let partialMatches = []
  const fullTextMatches = await Article.aggregate([
    { $match: {
      $and: [
        { $or: [{ campaign: campaign._id }, { campaign: null }] },
        !allowPrivate ? { secret: false } : {},
        { $text: { $search } },
      ],
    } },
    { $project: {
      matchScore: { $meta: 'textScore' },
      preview: { $substr: ['$plainText', 0, 100] },
      slug: '$slug',
      title: '$title',
    } },
    { $sort: { campaign: -1, matchScore: { $meta: 'textScore' } } },
    { $group: {
      _id: '$slug',
      matchScore: { $first: '$matchScore' },
      preview: { $first: '$preview' },
      slug: { $first: '$slug' },
      title: { $first: '$title' },
    } },
    { $project: { _id: 0, matchScore: 1, preview: 1, slug: 1, title: 1 } },
  ]).limit(limit)

  if (fullTextMatches.length <= 10) {
    const searchKeys = $search.split(/\s/).map(term => new RegExp(`^${term}`))

    partialMatches = await Article.aggregate([
      { $match: {
        $and: [
          { slug: { $nin: fullTextMatches.map(match => match.slug) } },
          { $or: [{ campaign: campaign._id }, { campaign: null }] },
          !allowPrivate ? { secret: false } : {},
          { searchKeys: { $in: searchKeys } },
        ] },
      },
      { $project: { preview: { $substr: ['$plainText', 0, 100] }, slug: '$slug', title: '$title' } },
      { $sort: { campaign: -1 } },
      { $group: {
        _id: '$slug',
        preview: { $first: '$preview' },
        slug: { $first: '$slug' },
        title: { $first: '$title' },
      } },
      { $project: { _id: 0, matchScore: { $literal: 0 }, preview: 1, slug: 1, title: 1 } },
    ]).limit(limit - fullTextMatches.length)
  }

  const results = [...fullTextMatches, ...partialMatches]

  if (results.length) {
    return response.status(200).json(results)
  }

  return response.status(404).json({ message: 'No results found.' })
}

const controller = express()
controller.get('/articles/:searchTerm', Campaign404, permissions, searchArticles)
export default controller
