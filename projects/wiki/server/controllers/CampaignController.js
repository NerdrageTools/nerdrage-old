import express from 'express'
import Campaign from '../models/Campaign'

const controller = express()

controller.get('/', async (request, response) => {
  const campaign = await Campaign.findOne({ domain: request.campaign }) || {}
  return response.status(200).json(campaign)
})

controller.put('/', async (request, response) => {
  try {
    const campaign = new Campaign({
      ...request.body,
      createdBy: request.session._id,
      owners: [request.session._id],
    })
    const saved = await campaign.save()
    return response.status(201).send(saved)
  } catch (error) {
    switch (error.code) {
      case 11000:
        return response.status(409).send({ message: `Domain '${request.body.domain}' is already in use.` })
      default:
        console.error(`Error in PUT /api/campaigns: ${error}`) // eslint-disable-line
        return response.status(500).send({ message: error.message || 'Unknown error.' })
    }
  }
})

export default controller
