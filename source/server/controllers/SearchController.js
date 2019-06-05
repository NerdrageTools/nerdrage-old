import { Deburr } from 'deburr'
import entities from 'entities'
import express from 'express'
import fetch from 'isomorphic-unfetch'
import Campaign404 from '@/server/errors/Campaign404'
import Campaign from '@/server/models/Campaign'
import User from '@/server/models/User'
import loadByCampaign from '@/server/utilities/loadByCampaign'
import bound from '@/utilities/bound'

const FONTS = fetch('https://fonts.google.com/metadata/fonts')
  .then(async response => {
    if (response.status === 200) {
      const text = await response.text()
      const { familyMetadataList: fonts } = JSON.parse(text.slice(text.indexOf('{')))
      return fonts
    }

    return []
  })

export const campaignPermissions = async (request, response, next) => {
  const { campaign, user } = request

  const allowPrivate = user && (user.isAdmin || campaign.isOwner)
  const allowPublic = user && (user.isAdmin || campaign.isViewer)

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
    params: { searchTerm = '', limit = 10 },
  } = request

  if (!allowPublic) {
    return response.status(401).send({
      message: 'You are not authorized to view articles in this campaign.',
    })
  }

  const $search = new Deburr(entities.decodeHTML(searchTerm)).toString()

  let exactMatches = []
  exactMatches = await loadByCampaign('Article', campaign, {
    aggregation: [{
      $addFields: { preview: { $substr: ['$plainText', 0, 100] } },
    }],
    castAsModel: false,
    filter: {
      $or: [{ title: $search }, { aliases: $search }, { slug: $search }],
      ...(!allowPrivate ? { secret: false } : {}),
    },
  })

  let fullTextMatches = []
  if (fullTextMatches.length < limit) {
    const fullTextSearchTerm = $search.split(/\s/).map(term => `"${term}"`).join(' ')
    fullTextMatches = await loadByCampaign('Article', campaign, {
      aggregation: [
        { $addFields: { preview: { $substr: ['$plainText', 0, 100] } } },
        { $sort: { score: { $meta: 'textScore' } } },
        { $limit: bound(limit - exactMatches.length, { min: 1 }) },
      ],
      castAsModel: false,
      filter: {
        $text: { $search: fullTextSearchTerm },
        slug: { $nin: exactMatches.map(match => match.slug) },
        ...(!allowPrivate ? { secret: false } : {}),
      },
    })
  }

  let partialMatches = []
  if ((exactMatches.length + fullTextMatches.length) < limit) {
    const searchKeys = $search.split(/\s/).map(term => new RegExp(`^${term}`))

    partialMatches = await loadByCampaign('Article', campaign, {
      aggregation: [
        { $addFields: { preview: { $substr: ['$plainText', 0, 100] } } },
        { $limit: bound(limit - fullTextMatches.length, { min: 1 }) },
      ],
      castAsModel: false,
      filter: {
        ...(!allowPrivate ? { secret: false } : {}),
        $and: [
          { slug: { $nin: fullTextMatches.map(match => match.slug) } },
          { slug: { $nin: exactMatches.map(match => match.slug) } },
        ],
        searchKeys: { $in: searchKeys },
      },
    })
  }

  const results = [...exactMatches, ...fullTextMatches, ...partialMatches]
    .slice(0, bound(limit, { min: 0 }))

  return response.status(200).json(results)
}
export const searchCampaigns = async (request, response) => {
  const { searchTerm = '', limit = 10 } = request.params
  const $searchRegex = new RegExp(`${new Deburr(searchTerm.toLowerCase()).toString()}`, 'i')
  const matches = await Campaign.find(
    { $and: [
      { $or: [
        { secret: false },
        { editors: request.user._id },
        { owners: request.user._id },
        { players: request.user._id },
      ] },
      { $or: [{ slug: $searchRegex }, { title: $searchRegex }] },
    ] },
    { subdomain: 1, title: 1 }
  ).sort('title').limit(bound(limit, { min: 1 }))

  return response.status(200).json(matches)
}
export const searchFonts = async (request, response) => {
  const { limit = 10, searchTerm = '' } = request.params
  const matcher = searchTerm ? new RegExp(searchTerm, 'i') : /./
  response.status(200).json(
    (await FONTS).filter(font => font.family.match(matcher)).slice(0, limit)
  )
}
export const searchUsers = async (request, response) => {
  const { searchTerm = '.', limit = 10 } = request.params
  const $searchRegex = new RegExp(`^${new Deburr(searchTerm.toLowerCase()).toString()}`)
  const matches = await User.find(
    { $or: [{ searchKeys: $searchRegex }, { email: searchTerm }] },
    { isAdmin: 1, lastLogin: 1, name: 1, username: 1 }
  ).sort('name').limit(bound(limit, { min: 1 }))

  return response.status(200).json(matches)
}

const controller = express()
controller.get('/articles/:searchTerm', Campaign404, campaignPermissions, searchArticles)
controller.get('/campaigns/:searchTerm', searchCampaigns)
controller.get('/fonts/:searchTerm?', searchFonts)
controller.get('/users/:searchTerm?', searchUsers)
export default controller
