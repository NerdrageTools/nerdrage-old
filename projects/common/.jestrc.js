const baseConfig = require('../../.jestrc.js')
const packageJSON = require('./package.json')
const path = require('path')

module.exports = {
  ...baseConfig,
  moduleNameMapper: {
    ...baseConfig.moduleNameMapper,
    '@/(.*)$': `${__dirname}/$1`,
  },
  name: packageJSON.name,
  testMatch: [`${__dirname}/**/*.test.js`],
}
