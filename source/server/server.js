/* eslint-disable no-console */
import compression from 'compression'
import cookieSession from 'cookie-session'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import next from 'next'
import nocache from 'nocache'
import ArticleController from './controllers/ArticleController'
import CampaignController from './controllers/CampaignController'
import SheetController from './controllers/SheetController'
import UserController from './controllers/UserController'
import ByCampaign from './middleware/ByCampaign'
import SessionSettings from './middleware/SessionSettings'
import routes from './routes'
import './models'

dotenv.config()

const PRODUCTION = process.env.NODE_ENV === 'production'
const app = next({ dev: !PRODUCTION, dir: './source' })
const routeHandler = routes.getRequestHandler(app)
const { DB_HOSTNAME, DB_NAME, DB_PASSWORD, DB_USERNAME } = process.env

app.prepare().then(async () => {
  mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  mongoose.Promise = global.Promise

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

  server.use('/api/article', nocache(), ByCampaign, ArticleController)
  server.use('/api/campaign', nocache(), ByCampaign, CampaignController)
  server.use('/api/sheet', nocache(), ByCampaign, SheetController)
  server.use('/api/user', nocache(), UserController)

  server.get('*', routeHandler)
  server.listen(3000, error => {
    if (error) throw error
    console.log('~> Listening on port 3000')
  })
}).catch(exception => {
  console.error(exception.stack)
  process.exit(1)
})
/* eslint-enable no-console */
