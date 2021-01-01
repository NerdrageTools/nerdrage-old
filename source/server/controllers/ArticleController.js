import express from 'express'
import Article from '~/server/models/Article'
import loadByCampaign from '~/server/utilities/loadByCampaign'
import omit from '~/utilities/omit'
import { pluck } from '~/utilities/pluck'

const loadArticle = async (slug, campaign) => (
	loadByCampaign('Article', campaign, { filter: { $or: [{ aliases: slug }, { slug }] } })
		.then(articles => {
			if (!articles || !articles.length) return null
			return articles.shift()
				.populate('campaign', 'subdomain title')
				.populate('createdBy lastUpdatedBy', 'name username')
				.execPopulate()
		})
)

export const permissions = (...required) => async (request, response, next) => {
	const { campaign, subdomain, params: { slug } } = request
	const article = await loadArticle(slug, campaign)
	const { isEditor, isOwner, isViewer } = campaign

	if (required.includes('view') && !isViewer) {
		return response.status(401).json({
			message: `This content is private to the ${subdomain} campaign.`,
		})
	}
	if (required.includes('edit') && !isEditor) {
		return response.status(401).json({
			message: `You do not have permission to edit the ${subdomain} campaign.`,
		})
	}
	if (article && article.secret && !isOwner) {
		return response.status(401).json({
			message: `This article is secret! Only owners of the ${campaign.subdomain} campaign can see or edit it.`,
		})
	}

	Object.assign(request, {
		article,
		campaign,
		isEditable: isEditor,
		isOwner,
		isVisible: isViewer,
		slug,
	})

	return next()
}

export const getArticle = async (request, response) => {
	const { template: templateSlug } = request.query
	const { campaign, isEditable, isOwner, slug } = request
	let { article } = request

	if (!article) {
		article = omit(await new Article({ slug }).render(campaign), '_id')
		if (templateSlug) {
			const template = await loadArticle(templateSlug, campaign)
			Object.assign(article, pluck(template ? template.toJSON() : {}, 'html', 'tags'))
		}
	} else {
		article = await article.render(campaign)
	}

	return response.status(200).json({
		...article,
		campaign: pluck(article.campaign, '_id', 'subdomain', 'title'),
		isEditable,
		isOwner,
	})
}
export const upsertArticle = async (request, response) => {
	const {
		campaign,
		isEditable,
		isOwner,
		slug,
		user: { _id: userId },
	} = request
	let { article, body: updates } = request
	updates = {
		...omit(updates, '_id', 'slug'),
		campaign: campaign._id,
		lastUpdatedBy: userId,
		slug,
	}
	if (!request.isOwner) {
		delete updates.secret // Only owners can set this field
	}

	if (article && article.campaign && article.campaign._id.equals(campaign._id)) {
		article.set(updates)
	} else {
		article = new Article(updates)
	}

	const { _id } = await article.save()
	const saved = await Article.findOne({ _id })
		.populate('campaign', 'subdomain title')
		.populate('createdBy lastUpdatedBy', 'name username')
		.exec()
	return response.status(200).json({ ...await saved.render(), isEditable, isOwner })
}
export const deleteArticle = async (request, response) => {
	const { article } = request
	if (article) { await article.delete() }
	return response.status(204).send()
}

const controller = express()
controller.get('/:slug', permissions('view'), getArticle)
controller.post('/:slug', permissions('edit'), upsertArticle)
controller.delete('/:slug', permissions('edit'), deleteArticle)
export default controller
