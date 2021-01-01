import deburr from 'lodash.deburr'
import express, { IRequest, Response } from 'express'
import fetch from 'isomorphic-unfetch'
import { Article, Campaign, Users } from '~/server/models'
import { IFontSearchResult } from '~/server/schema/IFont'
import { bound } from '~/utilities/bound'

interface ISearchRequest extends IRequest {
	allowPrivate: boolean,
	allowPublic: boolean,
	params: { searchTerm: string },
	query: { limit: string },
}

const FONTS = fetch('https://fonts.google.com/metadata/fonts').then(async response => {
	if (response.status === 200) {
		const text = await response.text()
		const { familyMetadataList: fonts } = JSON.parse(text.slice(text.indexOf('{')))
		return fonts as IFontSearchResult[]
	}

	return [] as IFontSearchResult[]
})

export async function searchArticles(request: ISearchRequest, response: Response): Promise<void> {
	const { params: { searchTerm }, subdomain, user } = request
	const results = await Article.search(searchTerm, subdomain, user?.id)

	if (results === null) {
		response.status(401).send({
			message: 'You are not authorized to view articles in this campaign.',
		})
	} else {
		response.status(200).json(results)
	}
}
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
							{ editors: request.user.id },
							// @ts-expect-error - @types/mongoose sucks
							{ owners: request.user.id },
							// @ts-expect-error - @types/mongoose sucks
							{ players: request.user.id },
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
export async function searchUsers(request: ISearchRequest, response: Response): Promise<void> {
	const $regex = new RegExp(`^${deburr(request.params.searchTerm ?? '.')}`, 'i')
	response.status(200).json(await Users.search($regex))
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
