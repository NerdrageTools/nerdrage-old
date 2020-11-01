import routes from 'next-routes'

export default routes()
	.add('article', '/article/:slug')
	.add('error', '/error/:statusCode?')
	.add('map', '/map/:slug')
	.add('sheet', '/sheet/:slug')
	.add('user', '/user/:slug')
