import express from 'express'
import Campaign404 from '@/server/errors/Campaign404'
import ContextLoader from '@/server/middleware/ContextLoader'
import NoAnonymous from '@/server/middleware/NoAnonymous'
import Article from '@/server/models/Article'
import Sheet from '@/server/models/Sheet'
import createCampaignFilter from '@/utilities/createCampaignFilter'

const controller = express().use(Campaign404).use(NoAnonymous).use(ContextLoader)

/* eslint-disable no-console */
export async function createTemplateFilters(campaign, user, filter = {}) {
	const { isEditor, isViewer } = campaign
	if (!isViewer) return []

	const campaignFilter = createCampaignFilter(campaign, user)
	const publicFilter = isEditor ? {} : { private: false }
	const templateFilter = { template: true }

	return { $and: [campaignFilter, publicFilter, templateFilter, filter] }
}
export async function getTemplates(campaign, user, type = Article) {
	const filters = await createTemplateFilters(campaign, user)
	return (await type.find(filters, '_id slug title')
		.populate('campaign', '_id subdomain title')
		.exec()
	).map(sheet => Object.assign(sheet, { type: 'sheet' }))
		.sort((a, b) => a.title.localeCompare(b.title))
}
export const createTemplateRequest = Type => async (request, response) => {
	const templates = await getTemplates(request.campaign, request.user, Type)
	response.status(200).json(templates)
}
/* eslint-enable no-console */

controller.get('/article', createTemplateRequest(Article))
controller.get('/sheet', createTemplateRequest(Sheet))

export default controller
