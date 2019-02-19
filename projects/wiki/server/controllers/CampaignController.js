import express from 'express'
import Campaign from '../models/Campaign'

const controller = express()

controller.get('/', async (request, response) => {
  const campaign = await Campaign.findOne({ domain: request.campaign }) || {}
  return response.status(200).json(campaign)
})

controller.put('/', async (request, response) => {
  const userId = request.session._id

  try {
    const campaign = await new Campaign({
      ...request.body,
      createdBy: userId,
      editors: [userId],
      owners: [userId],
    }).save()
    return response.status(201).send(campaign)
  } catch (error) {
    switch (error.code) {
      case 11000:
        return response.status(409).send({
          message: `Domain '${request.body.domain}' is already in use.`,
        })
      default:
        console.error(`Error in PUT /api/campaigns: ${error}`) // eslint-disable-line
        return response.status(500).send({
          message: error.message || 'Unknown error.',
        })
    }
  }
})

controller.post('/:domain?', async (request, response) => {
  try {
    const updates = { ...request.body }
    const domain = request.params.domain || request.campaign
    const campaign = await Campaign.findOne({ domain })
    const userId = request.session._id

    if (!campaign.isEditableBy(request.session._id)) {
      return response.status(401).send({
        message: `You don't have permission to edit campaign '${domain}'.`,
      })
    }

    // You cannot update the createdBy field
    delete updates.createdBy

    // Only an owner can update the participant/permission fields
    if (!campaign.isOwnedBy(userId)) {
      delete updates.editors
      delete updates.owners
      delete updates.players
    }

    Object.assign(campaign, {
      ...updates,
      lastUpdatedBy: userId,
    })
    const updated = await campaign.save()

    return response.status(200).send(updated)
  } catch (error) {
    switch (error.code) {
      case 11000:
        return response.status(409).send({
          message: `Domain '${request.body.domain}' is already in use.`,
        })
      default:
        console.error(`Error in POST /api/campaigns: ${error}`) // eslint-disable-line
        return response.status(500).send({
          message: error.message || 'Unknown error.',
        })
    }
  }
})

export default controller
