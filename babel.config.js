const path = require('path') // eslint-disable-line

module.exports = {
	env: {
		development: { compact: false },
		production: { compact: true },
	},
	plugins: [
		['@babel/plugin-transform-typescript', { allowDeclareFields: true }],
		['module-resolver', {
			alias: {
				'@': path.resolve(__dirname, 'source'),
				'~': path.resolve(__dirname, 'source'),
			},
			extensions: ['.ts', '.tsx', '.js', '.scss'],
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
		'@babel/preset-react',
		['@babel/env', { corejs: '3.6.5', modules: 'auto', useBuiltIns: 'entry' }],
		['@babel/preset-typescript', { allowDeclareFields: true }],
		// 'next/babel',
	],
}
