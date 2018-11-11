const routes = require('next-routes')

module.exports = routes()
  .add('about')
  .add('article', '/wiki/:slug')
