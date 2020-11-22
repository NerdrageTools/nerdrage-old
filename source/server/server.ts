import path from 'path'
import bodyParser from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import nextApp from 'next'
import nocache from 'nocache'
import ArticleController from '~/server/controllers/ArticleController'
import CampaignController from '~/server/controllers/CampaignController'
import MapController from '~/server/controllers/MapController'
import SearchController from '~/server/controllers/SearchController'
import SheetController from '~/server/controllers/SheetController'
import TemplateController from '~/server/controllers/TemplateController'
import UserController from '~/server/controllers/UserController'
import { Campaign404 } from '~/server/errors/Campaign404'
import { ContextLoader } from '~/server/middleware/ContextLoader'
import routes from '~/server/routes'
import '~/server/models'

dotenv.config()

const PRODUCTION = process.env.NODE_ENV === 'production'
const app = nextApp({ dev: !PRODUCTION, dir: './source' })
const routeHandler = routes.getRequestHandler(app)
const { DB_HOSTNAME, DB_NAME, DB_PASSWORD, DB_USERNAME } = process.env

app.prepare().then(async () => {
	mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}/${DB_NAME}`, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	mongoose.Promise = global.Promise

	const server = express()
		.use(bodyParser.json({ limit: '10mb' }))
		.use(cookieParser())
		.use((request, response, next) => {
			response.header('Access-Control-Allow-Credentials', 'true')
			response.header(
				'Access-Control-Allow-Headers',
				'Origin, X-Requested-With, Content-Type, Accept',
			)
			response.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
			response.header('Access-Control-Allow-Origin', '*')
			if (request.method === 'OPTIONS') {
				response.status(200).send()
			} else {
				next()
			}
		})
		.use(compression())
		.use(cors())
		.use(express.urlencoded({ extended: true }))
		.use(express.json())
		.options('*', cors())

	server.get('/favicon.ico', (_, response) => {
		response.status(200).sendFile(`${__dirname}/favicon.ico`)
	})

	const modulePath = path.resolve(__dirname, '../../node_modules')
	server.use(
		'/static/fantasy-map-generator',
		express.static(`${modulePath}/@azgaar/fantasy-map-generator`, { maxAge: '1d' }),
	)

	// @ts-expect-error - typing for Campaign404
	server.use('/api/article', ContextLoader, Campaign404, nocache(), ArticleController)
	server.use('/api/campaign', ContextLoader, nocache(), CampaignController)
	server.use('/api/map', ContextLoader, MapController)
	server.use('/api/search', ContextLoader, nocache(), SearchController)
	// @ts-expect-error - typing for Campaign404
	server.use('/api/sheet', ContextLoader, Campaign404, nocache(), SheetController)
	server.use('/api/templates', ContextLoader, nocache(), TemplateController)
	server.use('/api/user', ContextLoader, nocache(), UserController)

	server.get('/', (_, response) => response.redirect(302, '/article/home'))

	server.get('/_next/*', routeHandler)
	server.get('*', nocache(), ContextLoader, routeHandler)

	server.listen(3000, () => {
		console.log('~> Listening on port 3000')
	})
}).catch(exception => {
	console.error(exception)
	process.exit(1)
})
