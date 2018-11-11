/* eslint-disable no-console */
import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { MongoClient } from 'mongodb'
import next from 'next'
import ByCampaign from './middleware/ByCampaign'
import routes from './routes'

dotenv.config()

const { DB_HOSTNAME, DB_NAME, DB_PASSWORD, DB_USERNAME } = process.env
const PRODUCTION = process.env.NODE_ENV === 'production'
const app = next({ dev: !PRODUCTION })
const url = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}/${DB_NAME}?retryWrites=true`
const handler = routes.getRequestHandler(app)

const server = express()
  .use(compression())
  .use(cors())
  .options('*', cors())

app.prepare().then(async () => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true })
  const db = client.db(DB_NAME)

  server.get('/api/wiki/:slug', ByCampaign, async (request, response) => {
    const article = await db.collection('articles').findOne(request.params) || {}
    return response.status(200).json(article)
  })

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
