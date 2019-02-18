import express from 'express'

const controller = express()

controller.get('/', async (request, response) => {
  const campaign = await request.db.collection('campaigns')
    .findOne({ slug: request.params.campaign }) || {}
  return response.status(200).json(campaign)
})

export default controller
