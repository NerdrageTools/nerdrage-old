import { titleCase } from 'title-case'
import express, { IRequest, NextFunction, Response } from 'express'
import { ArticleClass, Article, IArticleData, IArticleRendered } from '~/server/models'
import { omit } from '~/utilities/omit'
import { pluck } from '~/utilities/pluck'
import { DocumentType } from '@typegoose/typegoose'

const loadArticle = async (slug: string, sources: string[]): Promise<ArticleClass | null> => {
	const article = <IArticleData><unknown>(
		await Article.find()
			.byCampaign(sources)
			.findOne({ $or: [{ aliases: slug }, { slug }] })
			.populate('campaign', 'id subdomain title')
			.populate('createdBy lastUpdatedBy', 'name username')
			.exec()
	)

	return article ? new Article(article) : null
}

export const permissions = (...required: string[]) => (
	async (request: IRequest, response: Response, next: NextFunction): Promise<void> => {
		const { campaign, subdomain, params: { slug } } = request
		const article = await loadArticle(slug, [campaign.id, ...campaign.sources])
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
			return next()
		}
	}
)

interface IGetRequest extends IRequest {
	document?: ArticleClass,
	params: { slug: string },
	query: { template?: string },
}
export const getArticle = (
	async (request: IGetRequest, response: Response): Promise<void> => {
		const templateSlug = request.query.template as string
		const { campaign, isEditable, isOwner, slug } = request
		let rendered: IArticleRendered

		if (!request.document) {
			const article = new Article({ id: undefined, slug, title: titleCase(slug) })
			if (templateSlug) {
				const template = await loadArticle(templateSlug, [campaign.id, ...campaign.sources])
				Object.assign(article, pluck(template?.render(), 'html', 'tags'))
			}

			rendered = await article.render(campaign)
		} else {
			rendered = await request.document.render(campaign)
		}

		response.status(200).json({
			...rendered,
			isEditable,
			isOwner,
		})
	}
)

interface IUpsertRequest extends IRequest {
	body: Partial<IArticleData>,
	document?: DocumentType<ArticleClass>,
}
export const upsertArticle = (
	async (request: IUpsertRequest, response: Response): Promise<void> => {
		const { campaign, isEditable, isOwner, slug, user } = request
		let { document } = request

		const updates: Partial<IArticleData> = {
			...omit(request.body, 'id', 'slug'),
			campaign: campaign.id,
			lastUpdatedBy: user!.id,
			slug,
		}
		if (!request.isOwner) {
			delete updates.secret // Only owners can set this field
		}

		if (document?.campaign?.id?.equals!(campaign.id)) {
			document.set(updates)
		} else {
			document = new ArticleClass(updates)
		}

		const { id } = await document.save()
		const saved = await Article.findOne({ id })
			.populate('campaign', 'subdomain title')
			.populate('createdBy lastUpdatedBy', 'name username')
			.exec()

		response.status(200).json({ ...await saved!.render(), isEditable, isOwner })
	}
)

interface IDeleteRequest extends IRequest {
	document?: ArticleClass,
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
