import express from 'express'
import { Sheet } from '~/server/models'
import { createCampaignFilter } from '~/server/utilities/createCampaignFilter'
import { pluck } from '~/utilities/pluck'

export const getSheet = async (slug, campaign, user = {}) => {
	const { isAdmin } = user
	const sheet = await Sheet.findOne({ campaign, slug })
		.populate('campaign', 'subdomain title')
		.populate('ownedBy', 'name username')
		.exec()

	const isOwner = Boolean(
		isAdmin || !sheet
    || (user.id && user.id.equals(sheet.ownedBy.id))
    || campaign.isOwner,
	)
	const isEditor = isOwner
	const isVisible = Boolean(
		isAdmin || isOwner
    || (sheet && !sheet.secret && (campaign.isParticipant || !campaign.secret)),
	)

	return {
		...(sheet ? sheet.toJSON() : {}),
		isEditor,
		isOwner,
		isVisible,
	}
}

export const permissions = (...required) => async (request, response, next) => {
	const {
		campaign, params: { slug }, subdomain, user,
	} = request
	const sheet = await getSheet(slug, campaign, user)

	if (sheet.id) {
		if (required.includes('view') && !sheet.isVisible) {
			return response.status(401).json({
				message: `This content is private to the ${subdomain} campaign.`,
			})
		}
		if (required.includes('edit') && !sheet.isEditor) {
			return response.status(401).json({
				message: `You do not have permission to edit the ${subdomain} campaign.`,
			})
		}
		if (sheet.secret && !sheet.isEditor) {
			return response.status(401).json({
				message: `This sheet is secret! Only its owner and owners of the ${campaign.subdomain} campaign can see or edit it.`,
			})
		}
	}

	request.sheet = sheet
	request.slug = slug
	return next()
}
export const getSheetRequest = async (request, response) => {
	const {
		campaign = {}, query, sheet = {}, slug, subdomain,
	} = request
	if (!sheet.id && !campaign.isParticipant) {
		return response.status(404).json({
			...sheet,
			message: `Unable to find sheet '${slug}' in the ${subdomain} campaign.`,
		})
	}

	if (!sheet.id && query.template) {
		const campaignFilter = createCampaignFilter(campaign)
		const template = (
			await Sheet.findOne({
				$and: [campaignFilter, { slug: query.template }],
			}, 'data layout')
		).toJSON()
		if (template.id) Object.assign(sheet, pluck(template, 'data', 'layout'))
	}

	return response.status(200).json(sheet)
}
export const upsertSheet = async (request, response) => {
	const {
		body, campaign, sheet, slug, user,
	} = request
	const creating = !sheet.id

	const updates = {
		...pluck(body, 'data', 'layout', 'secret', 'template', 'title'),
	}

	if (creating) {
		await Sheet.create({
			...updates,
			campaign: campaign.id,
			ownedBy: user.id,
			slug,
		})
	} else {
		const saved = await Sheet.findOne({ id: sheet.id })
		Object.assign(saved, updates)
		await saved.save()
	}

	return response.status(200).json({
		...(await getSheet(slug, campaign.id, user)),
		isEditor: creating ? true : sheet.isEditor,
		isOwner: creating ? true : sheet.isOwner,
	})
}
export const deleteSheet = async (request, response) => {
	const { campaign, slug } = request
	await Sheet.findOneAndDelete({ campaign: campaign.id, slug })

	return response.status(204).send()
}
export const listByCampaign = async (request, response) => {
	const { isOwner, isParticipant, subdomain } = request.campaign
	if (!isParticipant) {
		return response.status(401).json({
			message: `This content is private to the ${subdomain} campaign.`,
		})
	}

	const sheets = await Sheet.find({
		$and: [
			{ campaign: request.campaign.id },
			isOwner ? {} : { private: false },
		],
	}, 'id secret slug template title')

	return response.status(200).json(sheets)
}

const controller = express()
controller.get('/list-by/campaign', listByCampaign)
controller.get('/:slug', permissions('view'), getSheetRequest)
controller.post('/:slug', permissions('edit'), upsertSheet)
controller.delete('/:slug', permissions('edit'), deleteSheet)

export default controller
