const path = require('path')

module.exports = {
	plugins: [
		'@babel/plugin-transform-typescript',
		['module-resolver', {
			alias: { '@': path.resolve(__dirname, 'source') },
		}],
		['@babel/plugin-proposal-decorators', { legacy: true }],
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-syntax-object-rest-spread',
		'@babel/plugin-transform-runtime',
		['inline-react-svg', {
			svgo: {
				plugins: [
					{ removeAttrs: { attrs: '(data-name)|(width)|(height)' } },
					{ cleanupIDs: true },
				],
			},
		}],
	],
	presets: [
		'@babel/preset-typescript',
		'@babel/preset-react',
		['@babel/env', {
			corejs: '3.0.0',
			targets: {
				esmodules: true,
				ie: '11',
				node: 'current',
			},
			useBuiltIns: 'entry',
		}],
	],
}
