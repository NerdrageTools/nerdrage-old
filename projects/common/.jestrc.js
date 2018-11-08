const baseConfig = require('../../.jestrc.js')
const packageJSON = require('./package.json')

module.exports = {
  ...baseConfig,
  moduleNameMapper: {
    ...baseConfig.moduleNameMapper,
    '@/(.*)$': `<rootDir>/projects/${packageJSON.name}/$1`,
  },
  name: packageJSON.name,
  testMatch: [`<rootDir>/projects/${packageJSON.name}/**/*.test.js`],
}
