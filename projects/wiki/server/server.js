/* eslint-disable no-console */
import compression from 'compression'
import cookieSession from 'cookie-session'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import next from 'next'
import ArticleController from './controllers/ArticleController'
import CampaignController from './controllers/CampaignController'
import UserController from './controllers/UserController'
import database from './database'
import ByCampaign from './middleware/ByCampaign'
import SessionSettings from './middleware/SessionSettings'
import routes from './routes'
import './models'

dotenv.config()

const PRODUCTION = process.env.NODE_ENV === 'production'
const app = next({ dev: !PRODUCTION })
const handler = routes.getRequestHandler(app)

const server = express()
  .use(compression())
  .use(cookieSession({
    httpOnly: true,
    keys: ['name', 'username'],
    name: 'session',
  }))
  .use(SessionSettings)
  .use(cors())
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .options('*', cors())

Promise.all([
  database.connect(),
  app.prepare(),
]).then(async ([db]) => {
  server.use((request, response, nextMiddleware) => {
    request.db = db
    nextMiddleware()
  })

  mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOSTNAME}/${process.env.DB_NAME}`, { useNewUrlParser: true })
  mongoose.Promise = global.Promise

  server.use('/api/article', ByCampaign, ArticleController)
  server.use('/api/campaign', ByCampaign, CampaignController)
  server.use('/api/user', UserController)

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
