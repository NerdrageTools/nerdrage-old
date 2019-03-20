import express from 'express'
import defaultTheme from '@/data/defaultTheme'
import Campaign404 from '@/server/errors/Campaign404'
import ContextLoader from '@/server/middleware/ContextLoader'
import NoAnonymous from '@/server/middleware/NoAnonymous'
import Campaign from '@/server/models/Campaign'

const controller = express()

export async function getCampaign(domain, user) {
  if (!domain) return null

  try {
    const campaign = await Campaign.findOne({ domain })
      .populate('createdBy editors lastUpdatedBy players owners', '_id name username')
      .exec()

    if (!campaign) return null

    const json = campaign.toJSON()

    if (!user.anonymous) {
      json.isEditor = Boolean(user.isAdmin || campaign.isEditableBy(user._id))
      json.isOwner = Boolean(user.isAdmin || campaign.isOwnedBy(user._id))
      json.isParticipant = Boolean(user.isAdmin || campaign.isParticipant(user._id))
      json.isViewer = Boolean(user.isAdmin || campaign.isVisibleTo(user._id))
    }

    return json
  } catch (error) {
    // console.error('CampaignController#getCampaign', error)
    return null
  }
}
export async function getCampaignRequest(request, response) {
  const { domain } = request.params || {}
  const campaign = await getCampaign(domain, request.user)

  if (!campaign || !campaign._id) {
    return Campaign404({ campaign, domain }, response)
  }

  return response.status(200).json(campaign)
}
const createCampaign = async (request, response) => {
  const userId = request.user._id
  const domain = request.params.domain || request.domain

  try {
    const campaign = await new Campaign({
      ...request.body,
      domain,
      // eslint-disable-next-line sort-keys
      createdBy: userId,
      editors: [userId],
      owners: [userId],
      // eslint-disable-next-line sort-keys
      navigation: request.body.navigation || [{ slug: 'home', title: 'Home' }],
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
          message: `Domain '${domain}' is already in use.`,
        })
      default:
        console.error(`Error in PUT /api/campaigns: ${error}`) // eslint-disable-line
        return response.status(500).send({
          message: error.message || 'Unknown error.',
        })
    }
  }
}
const updateCampaign = async (request, response) => {
  try {
    const updates = { ...request.body }
    const domain = request.params.domain || request.domain
    const campaign = await Campaign.findOne({ domain })
    if (!campaign) return Campaign404({ domain }, response)

    const userId = request.session._id

    if (!campaign.isEditableBy(request.session._id)) {
      return response.status(401).json({
        message: `You don't have permission to edit campaign '${domain}'.`,
      })
    }

    // You cannot update these fields with this API
    delete updates.createdBy
    delete updates.domain

    // Only an owner can update the participant/permission fields
    if (!campaign.isOwnedBy(userId)) {
      delete updates.editors
      delete updates.owners
      delete updates.players
      delete updates.secret
    }

    Object.assign(campaign, {
      ...updates,
      lastUpdatedBy: userId,
    })
    await campaign.save()

    getCampaignRequest(request, response)
  } catch (error) {
    switch (error.code) {
      case 11000:
        return response.status(409).json({
          message: `Domain '${request.body.domain}' is already in use.`,
        })
      default:
        console.error(`Error in POST /api/campaigns: ${error}`) // eslint-disable-line
        return response.status(500).json({
          message: error.message || 'Unknown error.',
        })
    }
  }
}

controller.get('/:domain?', ContextLoader, getCampaignRequest)
controller.put('/:domain?', NoAnonymous, createCampaign)
controller.post('/:domain?', updateCampaign)

export default controller
