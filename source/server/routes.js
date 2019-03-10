const routes = require('next-routes')

module.exports = routes()
  .add('article', '/article/:slug')
  .add('login')
  .add('sheet', '/sheet/:slug')
