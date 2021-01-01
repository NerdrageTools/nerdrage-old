const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([withSass, withCSS], {
	distDir: '../.next',

	webpack(nextConfig, options) {
		const config = { ...nextConfig }

		config.module.rules.unshift({
			exclude: /node_modules/,
			loader: 'babel-loader',
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

		config.resolve.alias['~'] = __dirname
		config.resolve.symlinks = true

		if (typeof nextConfig.webpack === 'function') {
			return nextConfig.webpack(config, options)
		}

		return config
	},
})
