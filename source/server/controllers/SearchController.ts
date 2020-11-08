import deburr from 'lodash.deburr'
import * as entities from 'entities'
import express, { IRequest, NextFunction, Response } from 'express'
import fetch from 'isomorphic-unfetch'
import { Campaign404 } from '~/server/errors/Campaign404'
import { Campaign, UserSchema } from '~/server/models'
import { IFontSearchResult } from '~/server/schema/IFont'
import { loadByCampaign } from '~/server/utilities/loadByCampaign'
import { bound } from '~/utilities/bound'
import { IArticleSearchResult } from '../schema/IArticle'

interface ISearchRequest extends IRequest {
	allowPrivate: boolean,
	allowPublic: boolean,
	params: { searchTerm: string },
	query: { limit: number },
}
interface ITextMatch {
	idx: number,
	match: string,
}

const FONTS = fetch('https://fonts.google.com/metadata/fonts').then(async response => {
	if (response.status === 200) {
		const text = await response.text()
		const { familyMetadataList: fonts } = JSON.parse(text.slice(text.indexOf('{')))
		return fonts as IFontSearchResult[]
	}

	return [] as IFontSearchResult[]
})

export const campaignPermissions = (
	async (request: IRequest, response: Response, next: NextFunction): Promise<void> => {
		const { campaign, user } = request
		Object.assign(request, {
			allowPrivate: Boolean(user && (user.isAdmin || campaign.isOwner)),
			allowPublic: Boolean(user && (user.isAdmin || campaign.isViewer)),
			campaign,
		})

		return next()
	}
)

interface IArticleResult extends IArticleSearchResult {
	nameMatches: ITextMatch[],
	plainText: string,
	textMatches: ITextMatch[],
}
export const searchArticles = (
	async (request: ISearchRequest, response: Response): Promise<Response> => {
		const {
			allowPrivate, allowPublic, campaign,
			params: { searchTerm = '' },
			query: { limit = 10 },
		} = request

		if (!allowPublic) {
			return response.status(401).send({
				message: 'You are not authorized to view articles in this campaign.',
			})
		}

		const words = deburr(entities.decodeHTML(searchTerm))
			.split(/\b/)
			.map(word => word.trim()).filter(Boolean)
		const regex = new RegExp(`(?<match>${words.join('|')})`, 'gim')
		const projection = { campaign: 1, plainText: 1, secret: 1, slug: 1, template: 1, title: 1 }
		const articles = await loadByCampaign<IArticleResult>('Article', campaign, {
			aggregation: [
				// @ts-expect-error - @types/mongoose sucks
				{ $project: {
					...projection,
					slugMatches: { $regexFindAll: { input: '$slug', regex } },
					textMatches: { $regexFindAll: { input: '$plainText', regex } },
					titleMatches: { $regexFindAll: { input: '$title', regex } },
				} },
				// @ts-expect-error - @types/mongoose sucks
				{ $addFields: { aliasMatches: { $regexFindAll: { input: '$aliases', regex } } } },
				// @ts-expect-error - @types/mongoose sucks
				{ $project: {
					...projection,
					// eslint-disable-next-line max-len
					nameHits: { $size: { $concatArrays: ['$slugMatches', '$aliasMatches', '$titleMatches'] } },
					nameMatches: { $concatArrays: ['$slugMatches', '$aliasMatches', '$titleMatches'] },
					textHits: { $size: '$textMatches' },
					textMatches: 1,
				} },
				// @ts-expect-error - @types/mongoose sucks
				{ $match: {
					$or: [{ nameHits: { $gt: 0 } }, { textHits: { $gt: 0 } }],
					...(!allowPrivate ? { secret: false } : {}),
				} },
				// @ts-expect-error - @types/mongoose sucks
				{ $sort: { nameHits: -1, textHits: -1 } },
				// @ts-expect-error - @types/mongoose sucks
				{ $limit: bound(parseInt(limit, 10), { min: 0 }) },
			],
			castAsModel: false,
		})

		const results = articles.map<IArticleSearchResult>(
			({ nameMatches, plainText, textMatches, ...article }) => ({
				...article,
				preview: textMatches.map(({ idx, match }: ITextMatch) => [
					`...${plainText.substr(idx - 25, 25)}`,
					`<span class="highlight">${match}</span>`,
					`${plainText.substr(idx + match.length, 25)}`,
				].join('')),
			}),
		)

		return response.status(200).json(results)
	}
)
export const searchCampaigns = (
	async (request: ISearchRequest, response: Response): Promise<Response> => {
		const { limit = 10, searchTerm = '' } = request.params
		const $regex = searchTerm ? new RegExp(deburr(searchTerm), 'i') : /./
		const matches = await Campaign.find(
			{
				$and: [
					{
						$or: [
							{ secret: false },
							// @ts-expect-error - @types/mongoose sucks
							{ editors: request.user._id },
							// @ts-expect-error - @types/mongoose sucks
							{ owners: request.user._id },
							// @ts-expect-error - @types/mongoose sucks
							{ players: request.user._id },
						],
					},
					{ $or: [{ slug: $regex }, { title: $regex }] },
				],
			},
			{ subdomain: 1, title: 1 },
		).sort('title').limit(bound(limit, { min: 1 }))

		return response.status(200).json(matches)
	}
)
export const searchFonts = (
	async (request: ISearchRequest, response: Response): Promise<Response> => {
		const { searchTerm = '' } = request.params
		const { limit = 10 } = request.query
		const $regex = searchTerm ? new RegExp(searchTerm, 'i') : /./
		const matches = (await FONTS)
			.filter(font => font.family.match($regex)).slice(0, limit)
		return response.status(200).json(matches)
	}
)
export const searchUsers = (
	async (request: ISearchRequest, response: Response): Promise<Response> => {
		const { searchTerm = '' } = request.params
		const { limit = 10 } = request.query
		const $regex = searchTerm ? new RegExp(`^${deburr(searchTerm)}`, 'i') : /./
		const matches = await UserSchema.find(
			{ $or: [{ searchKeys: $regex }, { email: searchTerm }] },
			{ isAdmin: 1, lastLogin: 1, name: 1, username: 1 },
		).sort('name').limit(bound(limit, { min: 1 }))

		return response.status(200).json(matches)
	}
)

export default express()
	// @ts-expect-error - stupid TS typings
	.get('/articles/:searchTerm', Campaign404, campaignPermissions, searchArticles)
	// @ts-expect-error - stupid TS typings
	.get('/campaigns/:searchTerm', searchCampaigns)
	// @ts-expect-error - stupid TS typings
	.get('/fonts/:searchTerm?', searchFonts)
	// @ts-expect-error - stupid TS typings
	.get('/users/:searchTerm?', searchUsers)
