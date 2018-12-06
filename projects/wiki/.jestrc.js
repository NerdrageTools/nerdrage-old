const baseConfig = require('../../.jestrc.js')
const packageJSON = require('./package.json')

module.exports = {
  ...baseConfig,
  globalSetup: `${__dirname}/testing/setup.js`,
  globalTeardown: `${__dirname}/testing/teardown.js`,
  moduleNameMapper: {
    ...baseConfig.moduleNameMapper,
    '@/(.*)$': `${__dirname}/$1`,
  },
  name: packageJSON.name,
  testEnvironment: `${__dirname}/testing/mongo-environment.js`,
  testMatch: [`${__dirname}/**/*.test.js`],
}
