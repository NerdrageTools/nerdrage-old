import express, { IRequest, NextFunction, Response } from 'express'
import { Article, Articles, IArticleData } from '~/server/models'
import { IArticle } from '~/server/schema/IArticle'
import { ICampaign } from '~/server/schema/ICampaign'
import { loadByCampaign } from '~/server/utilities/loadByCampaign'
import { omit } from '~/utilities/omit'
import { pluck } from '~/utilities/pluck'

const loadArticle = async (slug: string, campaign: ICampaign): Promise<IArticleData | null> => {
	const articles = await loadByCampaign<IArticleData>(
		'Article', campaign,
		{ filter: { $or: [{ aliases: slug }, { slug }] } },
	)
	if (!articles?.length) return null

	return articles.shift()!
		.populate('campaign', 'subdomain title')
		.populate('createdBy lastUpdatedBy', 'name username')
		.execPopulate()
}

export const permissions = (...required: string[]) => (
	async (request: IRequest, response: Response, next: NextFunction): Promise<void> => {
		const { campaign, subdomain, params: { slug } } = request
		const article = await loadArticle(slug, campaign)
		const { isEditor, isOwner, isViewer } = campaign

		if (required.includes('view') && !isViewer) {
			response.status(401).json({
				message: `This content is private to the ${subdomain} campaign.`,
			})
		} else if (required.includes('edit') && !isEditor) {
			response.status(401).json({
				message: `You do not have permission to edit the ${subdomain} campaign.`,
			})
		} else if (article && article.secret && !isOwner) {
			response.status(401).json({
				// eslint-disable-next-line max-len
				message: `This article is secret! Only owners of the ${campaign.subdomain} campaign can see or edit it.`,
			})
		} else {
			Object.assign(request, {
				campaign,
				document: article,
				isEditable: isEditor,
				isOwner,
				isVisible: isViewer,
				slug,
			})
		}

		return next()
	}
)

interface IGetRequest extends IRequest {
	document?: Article,
	params: { slug: string },
	query: { template?: string },
}
export const getArticle = (
	async (request: IGetRequest, response: Response): Promise<void> => {
		const templateSlug = request.query.template as string
		const { campaign, isEditable, isOwner, slug } = request
		let article: Article

		if (!request.document) {
			article = omit(await new Article({ slug }).render(campaign), '_id')
			if (templateSlug) {
				const template = await loadArticle(templateSlug, campaign)
				Object.assign(article, pluck(template ? template.toJSON() : {}, 'html', 'tags'))
			}
		} else {
			article = await request.document.render(campaign)
		}

		response.status(200).json({
			...article,
			campaign: pluck(article.campaign, '_id', 'subdomain', 'title'),
			isEditable,
			isOwner,
		})
	}
)

interface IUpsertRequest extends IRequest {
	body: Partial<IArticle>,
	document?: Article,
}
export const upsertArticle = (
	async (request: IUpsertRequest, response: Response): Promise<void> => {
		const { campaign, isEditable, isOwner, slug, user } = request
		let { document } = request

		const updates: Partial<IArticleData> = {
			...omit(request.body, '_id', 'slug'),
			campaign: campaign._id,
			lastUpdatedBy: user._id,
			slug,
		}
		if (!request.isOwner) {
			delete updates.secret // Only owners can set this field
		}

		// @ts-expect-error - ts thinks _id is a string
		if (document?.campaign?._id?.equals!(campaign._id)) {
			document.set(updates)
		} else {
			document = new Article(updates)
		}

		const { _id } = await document.save()
		const saved = await Articles.findOne({ _id })
			.populate('campaign', 'subdomain title')
			.populate('createdBy lastUpdatedBy', 'name username')
			.exec()

		response.status(200).json({ ...await saved!.render(), isEditable, isOwner })
	}
)

interface IDeleteRequest extends IRequest {
	document?: Article,
}
export const deleteArticle = (
	async (request: IDeleteRequest, response: Response): Promise<void> => {
		const { document } = request
		if (document) { await document.delete() }

		response.status(204).send()
	}
)

export default express()
	// @ts-expect-error - stupid TS typings
	.get('/:slug', permissions('view'), getArticle)
	// @ts-expect-error - stupid TS typings
	.post('/:slug', permissions('edit'), upsertArticle)
	// @ts-expect-error - stupid TS typings
	.delete('/:slug', permissions('edit'), deleteArticle)
