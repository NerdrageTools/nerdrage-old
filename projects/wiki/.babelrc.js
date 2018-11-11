const baseConfig = require('../../.babelrc.js')

module.exports = {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    'inline-react-svg'
  ]
}
