/* eslint-disable @typescript-eslint/no-var-requires */
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const withPlugins = require('next-compose-plugins')
const babelConfig = require('../babel.config')

module.exports = withPlugins([withSass, withCSS], {
	distDir: '../.next',

	webpack(nextConfig, options) {
		const config = { ...nextConfig }

		// config.module.rules.forEach(rule => {
		// 	if (!Array.isArray(rule.use)) return

		// 	const cssLoader = rule.use.find(use => use.loader && use.loader === 'css-loader')
		// 	if (!cssLoader || !cssLoader.options) return

		// 	delete cssLoader.options.minimize
		// })

		// delete options.defaultLoaders.babel // .options.babelPresetPlugins = babelConfig.presets
		// console.log(options.defaultLoaders)

		// const jsRule = config.module.rules
		// 	.find(rule => rule.test.toString() === '/\\.(tsx|ts|js|mjs|jsx)$/')
		// jsRule.use.push('babel-loader')

		config.module.rules.unshift({
			exclude: /node_modules/,
			loader: 'babel-loader',
			options: babelConfig,
			test: /\.[jt]sx?$/,
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
			test: /\.(woff2?|eot|ttf)$/,
		}, {
			loader: 'url-loader',
			options: {
				fallback: 'file-loader',
				limit: 100000,
				name: '[name].[ext]',
				outputPath: 'static/images',
				publicPath: '/_next/static/images/',
			},
			test: /\.(gif|jpe?g|png)$/,
		}, {
			loader: 'svg-react-loader',
			test: /\.svg$/,
		})

		config.resolve.alias['@'] = __dirname
		config.resolve.plugins = [
			new DirectoryNamedWebpackPlugin({
				honorIndex: true,
				honorPackage: true,
			}),
		]
		config.resolve.symlinks = true

		if (typeof nextConfig.webpack === 'function') {
			return nextConfig.webpack(config, options)
		}

		return config
	},
})
