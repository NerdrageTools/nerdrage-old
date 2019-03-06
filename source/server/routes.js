const routes = require('next-routes')

module.exports = routes()
  .add('about')
  .add('article', '/article/:slug')
  .add('sheet', '/sheet/:slug')
