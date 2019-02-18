const path = require('path')

module.exports = {
  plugins: [
    ['module-resolver', {
      alias: {
        common: path.resolve(__dirname, 'projects/common'),
        core: path.resolve(__dirname, 'projects/core'),
        sheetforge: path.resolve(__dirname, 'projects/sheetforge'),
        wiki: path.resolve(__dirname, 'projects/wiki'),
      },
    }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-object-rest-spread',
    '@babel/plugin-transform-runtime',
    'inline-react-svg',
  ],
  presets: [
    '@babel/preset-react',
    ['@babel/env', { useBuiltIns: 'entry' }],
  ],
}
