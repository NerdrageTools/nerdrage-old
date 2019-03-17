import express from 'express'
import Campaign from '../models/Campaign'
import defaultTheme from '@/data/defaultTheme'
import Campaign404 from '@/server/errors/Campaign404'
import NoAnonymous from '@/server/middleware/NoAnonymous'

const controller = express()

controller.get('/:domain?', async (request, response) => {
  const domain = request.params.domain || request.domain
  const campaign = await Campaign.findOne({ domain })
    .populate('editors players owners', 'name username')
    .exec()

  return response.status(200).json(campaign)
})

controller.put('/:domain?', NoAnonymous, async (request, response) => {
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
})

controller.post('/:domain?', async (request, response) => {
  try {
    const updates = { ...request.body }
    const domain = request.params.domain || request.domain
    const campaign = await Campaign.findOne({ domain })
    if (!campaign) return Campaign404({ domain }, response)

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
