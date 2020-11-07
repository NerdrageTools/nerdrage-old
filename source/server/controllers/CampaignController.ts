import express, { IRequest, Response } from 'express'
import { defaultTheme } from '~/data/Theme'
import { Campaign404 } from '~/server/errors/Campaign404'
import { ContextLoader } from '~/server/middleware/ContextLoader'
import { NoAnonymous } from '~/server/middleware/NoAnonymous'
import { Campaign, ICampaignModel } from '~/server/models'
import { ICampaign } from '~/server/schema/ICampaign'
import { IUser } from '~/server/schema/IUser'

const controller = express()

/* eslint-disable no-console */
export async function loadCampaign(subdomain: string, user: IUser): Promise<ICampaign | null> {
	if (!subdomain) return null

	try {
		const campaign = await Campaign.findOne({ subdomain })
			.populate('createdBy editors lastUpdatedBy players owners', '_id name username')
			.populate('sources', '_id subdomain title')
			.exec()

		if (!campaign) return null

		const json: ICampaign = Object.assign(campaign.toJSON(), {
			isEditor: Boolean(user.isAdmin || campaign.isEditableBy(user._id)),
			isOwner: Boolean(user.isAdmin || campaign.isOwnedBy(user._id)),
			isParticipant: Boolean(user.isAdmin || campaign.isParticipant(user._id)),
			isViewer: Boolean(user.isAdmin || campaign.isVisibleTo(user._id)),
		})

		return json
	} catch (error) {
		console.error('CampaignController#getCampaign', error)
		return null
	}
}

interface IGetRequest extends IRequest {
	document?: ICampaignModel,
	params: { subdomain: string },
}
export const getCampaign = async (request: IGetRequest, response: Response): Promise<void> => {
	const { subdomain } = request.params || {}
	const campaign = await loadCampaign(subdomain, request.user)

	if (!campaign || !campaign._id) {
		Campaign404({ campaign, subdomain }, response)
	} else {
		response.status(200).json(campaign)
	}
}

interface IUpsertRequest extends IRequest {
	document?: ICampaignModel,
	params: { subdomain: string },
}
const createCampaign = async (request: IUpsertRequest, response: Response) => {
	const userId = request.user._id
	if (!userId) {
		return response.status(401).send({
			message: 'Your account is not authorized to create campaigns.',
		})
	}
	const subdomain = request.params.subdomain || request.subdomain

	try {
		const campaign = await new Campaign({
			...request.body,
			subdomain,
			// eslint-disable-next-line sort-keys
			createdBy: userId,
			editors: [userId],
			owners: [userId],
			// eslint-disable-next-line sort-keys
			navigation: request.body.navigation || [{ slug: 'home', title: 'Home' }],
			sources: [],
			theme: {
				...defaultTheme,
				...(request.body.theme || {}),
			},
		}).save()
		return response.status(201).send(campaign)
	} catch (error) {
		switch (error.code) {
			case 11000:
				return response.status(409).send({
					message: `Subdomain '${subdomain}' is already in use.`,
				})
			default:
        console.error(`Error in PUT /api/campaigns: ${error}`) // eslint-disable-line
				return response.status(500).send({
					message: error.message || 'Unknown error.',
				})
		}
	}
}
const updateCampaign = async (request: IUpsertRequest, response: Response) => {
	try {
		const updates = { ...request.body }
		let campaign
		let subdomain
		if (request.params.subdomain) {
      subdomain = request.params.subdomain // eslint-disable-line
			campaign = await loadCampaign(subdomain, request.user)
		} else {
      subdomain = request.subdomain // eslint-disable-line
      campaign = request.campaign // eslint-disable-line
		}

		if (!campaign) return Campaign404({ subdomain }, response)

		const userId = request.user._id

		if (!campaign.isEditor) {
			return response.status(401).json({
				message: `You don't have permission to edit campaign '${subdomain}'.`,
			})
		}

		// You cannot update these fields with this API
		delete updates.createdBy
		delete updates.subdomain

		// Only an owner can update the participant/permission fields
		if (!campaign.isOwner) {
			delete updates.editors
			delete updates.owners
			delete updates.players
			delete updates.secret
		}

		Object.assign(campaign, {
			...updates,
			lastUpdatedBy: userId,
		})
		await Campaign.updateOne({ subdomain }, { $set: updates })

		return getCampaign(request, response)
	} catch (error) {
		switch (error.code) {
			case 11000:
				return response.status(409).json({
					message: `Subdomain '${request.body.subdomain}' is already in use.`,
				})
			default:
        console.error(`Error in POST /api/campaigns: ${error}`) // eslint-disable-line
				return response.status(500).json({
					message: error.message || 'Unknown error.',
				})
		}
	}
}
/* eslint-enable no-console */

// @ts-expect-error - stupid TS typings
controller.get('/:subdomain?', ContextLoader, getCampaign)
// @ts-expect-error - stupid TS typings
controller.put('/:subdomain?', NoAnonymous, createCampaign)
// @ts-expect-error - stupid TS typings
controller.post('/:subdomain?', updateCampaign)

export default controller
