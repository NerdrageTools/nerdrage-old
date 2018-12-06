/* eslint-disable no-console */
import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import next from 'next'
import WikiController from './controllers/Wiki'
import database from './database'
import ByCampaign from './middleware/ByCampaign'
import routes from './routes'

dotenv.config()

const PRODUCTION = process.env.NODE_ENV === 'production'
const app = next({ dev: !PRODUCTION })
const handler = routes.getRequestHandler(app)

const server = express()
  .use(compression())
  .use(cors())
  .options('*', cors())

Promise.all([
  database.connect(),
  app.prepare(),
]).then(async ([db]) => {
  server.use((request, response, nextMiddleware) => {
    request.db = db
    nextMiddleware()
  })

  server.get('/api/campaign', ByCampaign, async (request, response) => {
    const slug = request.params.campaign
    const campaign = await db.collection('campaigns').findOne({ slug }) || {}
    return response.status(200).json(campaign)
  })

  server.use('/api/wiki', ByCampaign, WikiController)

  server.get('*', (request, response) => handler(request, response))
  server.listen(3000, (error) => {
    if (error) throw error
    console.log('~> Listening on port 3000')
  })
}).catch((exception) => {
  console.error(exception.stack)
  process.exit(1)
})
/* eslint-enable no-console */
