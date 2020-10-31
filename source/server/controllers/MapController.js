import express from 'express'
import nocache from 'nocache'
import { Map } from '@/server/models'
import { loadByCampaign } from '@/server/utilities/loadByCampaign'
import { omit } from '@/utilities/omit'
import { pluck } from '@/utilities/pluck'

const loadMap = (slug, campaign) => (
	loadByCampaign('Map', campaign, { filter: { slug } })
		.then(maps => maps.shift())
)

export const permissions = (...required) => async (request, response, next) => {
	const { campaign, subdomain, params: { slug } } = request
	const map = await loadMap(slug, campaign)
		.select('-data')
		.populate('campaign', 'subdomain title')
		.exec()
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
	if (map && map.secret && !isOwner) {
		return response.status(401).json({
			message: `This content is secret! Only owners of the ${campaign.subdomain} campaign can see or edit it.`,
		})
	}

	Object.assign(request, {
		campaign,
		isEditable: isEditor,
		isOwner,
		isVisible: isViewer,
		map,
		slug,
	})

	return next()
}

export const getMap = async (request, response) => {
	const {
		campaign, isEditable, isOwner, slug,
	} = request
	let { map } = request

	if (!map) {
		map = omit(await new Map({ slug }).toJSON(), '_id')
	} else {
		map = await map.toJSON(campaign)
	}

	return response.status(200).json({
		...omit(map, 'data'),
		campaign: pluck(map.campaign, '_id', 'subdomain', 'title'),
		isEditable,
		isOwner,
	})
}
export const getMapData = async (request, response) => {
	const { map } = request
	if (map && map._id) {
		response.set('Cache-Control', 'public, max-age=31557600')
		response.set('ETag', map.checksum)

		map.data = (await Map.findOne({ _id: map._id }, { data: 1 })).data
		response.status(200).json(map.toJSON())
	} else {
		response.status(404).send()
	}
}
export const upsertMap = async (request, response) => {
	const {
		campaign,
		isOwner,
		slug,
	} = request
	let { map, body: updates } = request
	updates = {
		...omit(updates, '_id', 'slug', 'version'),
		campaign: campaign._id,
		slug,
	}
	if (!isOwner) {
		delete updates.secret // Only owners can set this field
	}

	if (map && map.campaign && map.campaign._id.equals(campaign._id)) {
		map.set(updates)
	} else {
		map = new Map(updates)
	}

	await map.save()
	return response.status(200).json(map.toJSON())
}
export const deleteMap = async (request, response) => {
	const { map } = request
	if (map) { await map.delete() }
	return response.status(204).send()
}

const controller = express()
controller.get('/:slug', nocache(), permissions('view'), getMap)
controller.get('/:slug/:checksum', permissions('view'), getMapData)
controller.post('/:slug', nocache(), permissions('edit'), upsertMap)
controller.delete('/:slug', nocache(), permissions('edit'), deleteMap)
export default controller
