const path = require('path')
const withSass = require('@zeit/next-sass')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')

module.exports = withPlugins([withFonts, withSass], {
  webpack(config) {
    // const output = Object.assign({}, config)

    // output.module.rules = config.module.rules.forEach((rule) => {
    //   if (['next-babel-loader', 'hot-self-accept-loader'].includes(rule.use.loader)) {
    //     rule.include = [path.resolve(__dirname, '../..')]
    //   }
    // })

    // output.resolve.alias = { '@': __dirname }
    // output.resolve.plugins = [new DirectoryNamedWebpackPlugin(true)]
    // // console.log(JSON.stringify(config))
    return {
      ...config,
      module: {
        ...config.module,
        rules: config.module.rules.map(rule => ({
          ...rule,
          include: rule.use.loader === 'next-babel-loader'
            ? [path.resolve(__dirname, '../..')]
            : rule.include,
        })),
        // [
        //   ...config.module.rules,
        //   {
        //     include: [path.resolve(__dirname, '../core')],
        //     use: {
        //       loader: 'next-babel-loader',
        //       options: { cwd: __dirname, dev: true, isServer: false },
        //     },
        //   },
        // ],
      },
      resolve: {
        ...config.resolve,
        alias: { '@': __dirname },
        plugins: [new DirectoryNamedWebpackPlugin(true)],
      },
    }

    // return output
  },
})
