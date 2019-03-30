require('@babel/register')({
  presets: ['@babel/env'],
})

module.exports = require('./server.js')
