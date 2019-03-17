const routes = require('next-routes')

module.exports = routes()
  .add('article', '/article/:slug')
  .add('error', '/error/:statusCode?')
  .add('sheet', '/sheet/:slug')
  .add('user', '/user/:username')
