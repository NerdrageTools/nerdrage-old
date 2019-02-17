const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([withSass, withCSS], {
  webpack(nextConfig, options) {
    const config = { ...nextConfig }

    config.externals = config.externals.map(external => (
      (context, request, callback) => {
        if (/nerdrage\/projects/.test(request)) return callback()
        return external(context, request, callback)
      }
    ))

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
      test: /\.(gif|png|woff2?|eot|ttf|svg)$/,
    }, {
      include: [/nerdrage\/projects/],
      loader: options.defaultLoaders.babel,
      test: /\.+(js)$/,
    })

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': __dirname,
    }
    config.resolve.plugins = [new DirectoryNamedWebpackPlugin(true)]
    config.resolve.symlinks = true

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }

    return config
  },
})
