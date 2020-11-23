import deburr from 'lodash.deburr'
import * as entities from 'entities'
import express, { IRequest, Response } from 'express'
import fetch from 'isomorphic-unfetch'
import { Campaign404 } from '~/server/errors/Campaign404'
import { Campaign, IArticleSearchResult, Users } from '~/server/models'
import { IFontSearchResult } from '~/server/schema/IFont'
import { loadByCampaign } from '~/server/utilities/loadByCampaign'
import { bound } from '~/utilities/bound'

interface ISearchRequest extends IRequest {
	allowPrivate: boolean,
	allowPublic: boolean,
	params: { searchTerm: string },
	query: { limit: string },
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

interface IArticleResult extends IArticleSearchResult {
	nameMatches: ITextMatch[],
	plainText: string,
	textMatches: ITextMatch[],
}
export const searchArticles = (
	async (request: ISearchRequest, response: Response): Promise<Response> => {
		const { campaign, subdomain, user } = request
		if (!campaign) {
			Campaign404({ campaign, subdomain }, response)
			return response
		}

		const userIsViewer = Boolean(user?.isAdmin || campaign.isViewer)
		const userIsOwner = Boolean(user?.isAdmin || campaign.isOwner)
		if (!userIsViewer) {
			return response.status(401).send({
				message: 'You are not authorized to view articles in this campaign.',
			})
		}

		const words = deburr(entities.decodeHTML(request.params.searchTerm ?? ''))
			.split(/\b/)
			.map(word => word.trim()).filter(Boolean)
		const regex = new RegExp(`(?<match>${words.join('|')})`, 'gim')
		const projection = { campaign: 1, plainText: 1, secret: 1, slug: 1, template: 1, title: 1 }
		const articles = await loadByCampaign<IArticleResult>('Article', campaign, {
			aggregation: [
				{ $project: {
					...projection,
					slugMatches: { $regexFindAll: { input: '$slug', regex } },
					textMatches: { $regexFindAll: { input: '$plainText', regex } },
					titleMatches: { $regexFindAll: { input: '$title', regex } },
				} },
				{ $addFields: { aliasMatches: { $regexFindAll: { input: '$aliases', regex } } } },
				{ $project: {
					...projection,
					// eslint-disable-next-line max-len
					nameHits: { $size: { $concatArrays: ['$slugMatches', '$aliasMatches', '$titleMatches'] } },
					nameMatches: { $concatArrays: ['$slugMatches', '$aliasMatches', '$titleMatches'] },
					textHits: { $size: '$textMatches' },
					textMatches: 1,
				} },
				{ $match: {
					$or: [{ nameHits: { $gt: 0 } }, { textHits: { $gt: 0 } }],
					...(!userIsOwner ? { secret: false } : {}),
				} },
				{ $sort: { nameHits: -1, textHits: -1 } },
				{ $limit: bound(parseInt(request.query.limit, 10), { min: 0 }) },
			],
			castAsModel: false,
		})

		const results = articles.map<IArticleSearchResult>(
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
		const $regex = new RegExp(deburr(request.params.searchTerm ?? '.'), 'i')
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
		).sort('title').limit(bound(parseInt(request.query.limit ?? 10, 10), { min: 1 }))

		return response.status(200).json(matches)
	}
)
export const searchFonts = (
	async (request: ISearchRequest, response: Response): Promise<Response> => {
		const $regex = new RegExp(request.params.searchTerm ?? '.', 'i')
		const matches = (await FONTS)
			.filter(font => font.family.match($regex))
			.slice(0, parseInt(request.query.limit ?? 10, 10))
		return response.status(200).json(matches)
	}
)
export async function searchUsers(request: ISearchRequest, response: Response): Promise<Response> {
	const $regex = new RegExp(`^${deburr(request.params.searchTerm ?? '.')}`, 'i')
	return response.status(200).json(await Users.search($regex))
}

export default express()
	// @ts-expect-error - stupid TS typings
	.get('/articles/:searchTerm', searchArticles)
	// @ts-expect-error - stupid TS typings
	.get('/campaigns/:searchTerm', searchCampaigns)
	// @ts-expect-error - stupid TS typings
	.get('/fonts/:searchTerm?', searchFonts)
	// @ts-expect-error - stupid TS typings
	.get('/users/:searchTerm?', searchUsers)
