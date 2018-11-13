const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([withSass, withCSS], {
  webpack(nextConfig) {
    const config = { ...nextConfig }

    config.module.rules.push({
      loader: 'url-loader',
      options: {
        fallback: 'file-loader',
        limit: 100000,
        name: '[name].[ext]',
        outputPath: 'static/fonts/',
        publicPath: '/_next/static/fonts/',
      },
      test: /\.(gif|png|woff2?|eot|ttf|svg)$/,
    })
    config.resolve.alias = { '@': __dirname }
    config.resolve.plugins = [new DirectoryNamedWebpackPlugin(true)]

    return config
  },
})
