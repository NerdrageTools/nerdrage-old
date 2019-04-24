import { Deburr } from 'deburr'
import entities from 'entities'
import express from 'express'
import fetch from 'isomorphic-unfetch'
import Campaign404 from '@/server/errors/Campaign404'
import Article from '@/server/models/Article'
import Campaign from '@/server/models/Campaign'
import User from '@/server/models/User'
import bound from '@/utilities/bound'
import createCampaignFilter from '@/utilities/createCampaignFilter'

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
    params: { searchTerm = '', limit = 10 },
  } = request

  if (!allowPublic) {
    return response.status(401).send({
      message: 'You are not authorized to view articles in this campaign.',
    })
  }

  const campaignFilter = createCampaignFilter(campaign)
  const $search = new Deburr(entities.decodeHTML(searchTerm)).toString()

  const exactMatches = await Article.aggregate([
    { $match: { $or: [{ title: $search }, { aliases: $search }, { slug: $search }] } },
    { $project: {
      _id: '$slug',
      matchScore: { $literal: 0 },
      preview: { $substr: ['$plainText', 0, 100] },
      slug: '$slug',
      title: '$title',
    } },
  ])

  let partialMatches = []
  const fullTextMatches = await Article.aggregate([
    { $match: {
      $and: [
        campaignFilter,
        { slug: { $nin: exactMatches.map(match => match.slug) } },
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
    { $sort: { matchScore: { $meta: 'textScore' } } },
    { $group: {
      _id: '$slug',
      matchScore: { $first: '$matchScore' },
      preview: { $first: '$preview' },
      slug: { $first: '$slug' },
      title: { $first: '$title' },
    } },
    { $project: { _id: 0, matchScore: 1, preview: 1, slug: 1, title: 1 } },
  ]).limit(bound(limit - exactMatches.length, { min: 1 }))

  if (fullTextMatches.length <= 10) {
    const searchKeys = $search.split(/\s/).map(term => new RegExp(`^${term}`))

    partialMatches = await Article.aggregate([
      { $match: {
        $and: [
          campaignFilter,
          { slug: { $nin: fullTextMatches.map(match => match.slug) } },
          { slug: { $nin: exactMatches.map(match => match.slug) } },
          !allowPrivate ? { secret: false } : {},
          { searchKeys: { $in: searchKeys } },
        ],
      } },
      { $project: { preview: { $substr: ['$plainText', 0, 100] }, slug: '$slug', title: '$title' } },
      { $group: {
        _id: '$slug',
        preview: { $first: '$preview' },
        slug: { $first: '$slug' },
        title: { $first: '$title' },
      } },
      { $project: { _id: 0, matchScore: { $literal: 0 }, preview: 1, slug: 1, title: 1 } },
    ]).limit(bound(limit - fullTextMatches.length, { min: 1 }))
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
