import { Deburr } from 'deburr'
import entities from 'entities'
import express from 'express'
import fetch from 'isomorphic-unfetch'
import Campaign404 from '@/server/errors/Campaign404'
import { Campaign, User } from '@/server/models'
import { loadByCampaign } from '@/server/utilities/loadByCampaign'
import { bound } from '@/utilities/bound'

const FONTS = fetch('https://fonts.google.com/metadata/fonts')
	.then(async response => {
		if (response.status === 200) {
			const text = await response.text()
			const { familyMetadataList: fonts } = JSON.parse(text.slice(text.indexOf('{')))
			return fonts
		}

		return []
	})

const getPreview = (record, searchTerm, limit = 5) => {
	const full = new RegExp(searchTerm, 'gi')
	const matches = []

	let match
	Object.values(record).forEach(value => {
		// eslint-disable-next-line no-cond-assign
		while ((match = full.exec(value)) !== null && matches.length < limit) {
			const preview = [
				`...${value.substr(match.index - 25, 25)}`,
				`<span class="highlight">${searchTerm}</span>`,
				`${value.substr(match.index + searchTerm.length, 25)}...`,
			].join('')
			matches.push(preview)
		}
	})

	return matches
}

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
	const projection = {
		$project: {
			campaign: 1, plainText: 1, secret: 1, slug: 1, template: 1, title: 1,
		},
	}

	let exactMatches = []
	const $regex = new RegExp($search.split(/\s/).map(t => `(?=${t})`).join(''), 'i')
	exactMatches = await loadByCampaign('Article', campaign, {
		aggregation: [projection],
		castAsModel: false,
		filter: {
			$or: [{ title: $regex }, { aliases: $regex }, { slug: $regex }],
			...(!allowPrivate ? { secret: false } : {}),
		},
	})

	let fullTextMatches = []
	if (fullTextMatches.length < limit) {
		const fullTextSearchTerm = [
			`"${$search}"`,
			...$search.split(/\s/).map(term => `"${term}"`),
		].join(' ')
		fullTextMatches = await loadByCampaign('Article', campaign, {
			aggregation: [
				{ $sort: { score: { $meta: 'textScore' } } },
				{ $limit: bound(limit - exactMatches.length, { min: 1 }) },
				projection,
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
				{ $limit: bound(limit - fullTextMatches.length, { min: 1 }) },
				projection,
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
		.map(result => ({
			...result,
			plainText: undefined,
			preview: getPreview(result, $search),
		}))

	return response.status(200).json(results)
}
export const searchCampaigns = async (request, response) => {
	const { searchTerm = '', limit = 10 } = request.params
	const $searchRegex = new RegExp(`${new Deburr(searchTerm.toLowerCase()).toString()}`, 'i')
	const matches = await Campaign.find(
		{
			$and: [
				{
					$or: [
						{ secret: false },
						{ editors: request.user._id },
						{ owners: request.user._id },
						{ players: request.user._id },
					],
				},
				{ $or: [{ slug: $searchRegex }, { title: $searchRegex }] },
			],
		},
		{ subdomain: 1, title: 1 },
	).sort('title').limit(bound(limit, { min: 1 }))

	return response.status(200).json(matches)
}
export const searchFonts = async (request, response) => {
	const { limit = 10, searchTerm = '' } = request.params
	const matcher = searchTerm ? new RegExp(searchTerm, 'i') : /./
	response.status(200).json(
		(await FONTS).filter(font => font.family.match(matcher)).slice(0, limit),
	)
}
export const searchUsers = async (request, response) => {
	const { searchTerm = '.', limit = 10 } = request.params
	const $searchRegex = new RegExp(`^${new Deburr(searchTerm.toLowerCase()).toString()}`)
	const matches = await User.find(
		{ $or: [{ searchKeys: $searchRegex }, { email: searchTerm }] },
		{
			isAdmin: 1, lastLogin: 1, name: 1, username: 1,
		},
	).sort('name').limit(bound(limit, { min: 1 }))

	return response.status(200).json(matches)
}

const controller = express()
controller.get('/articles/:searchTerm', Campaign404, campaignPermissions, searchArticles)
controller.get('/campaigns/:searchTerm', searchCampaigns)
controller.get('/fonts/:searchTerm?', searchFonts)
controller.get('/users/:searchTerm?', searchUsers)
export default controller
