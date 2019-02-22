const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([withSass, withCSS], {
  distDir: '../.next',

  webpack(nextConfig, options) {
    const config = { ...nextConfig }

    config.module.rules.forEach((rule) => {
      if (!Array.isArray(rule.use)) return

      const cssLoader = rule.use.find(use => use.loader && use.loader === 'css-loader')
      if (!cssLoader || !cssLoader.options) return

      delete cssLoader.options.minimize
    })

    config.module.rules.push({
      loader: 'url-loader',
      options: {
        fallback: 'file-loader',
        limit: 100000,
        name: '[name].[ext]',
        outputPath: 'static/fonts/',
        publicPath: '/_next/static/fonts/',
      },
      test: /\.(gif|png|woff2?|eot|ttf)$/,
    }, {
      loader: 'svg-react-loader',
      test: /\.svg$/,
    })

    config.resolve.alias['@'] = __dirname
    config.resolve.plugins = [new DirectoryNamedWebpackPlugin(true)]
    config.resolve.symlinks = true

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }

    return config
  },
})
