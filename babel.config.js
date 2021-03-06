const path = require('path') // eslint-disable-line

module.exports = {
	env: {
		development: { compact: false },
		production: { compact: true },
	},
	plugins: [
		['@babel/plugin-transform-typescript', { allowDeclareFields: true }],
		['babel-plugin-module-resolver', {
			alias: { '~': path.resolve(__dirname, 'source') },
			extensions: ['.ts', '.tsx', '.js', '.scss'],
		}],
		['@babel/plugin-proposal-decorators', { legacy: true }],
		'babel-plugin-transform-typescript-metadata',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-syntax-object-rest-spread',
		'@babel/plugin-transform-runtime',
		['babel-plugin-inline-react-svg', {
			svgo: {
				plugins: [
					{ removeAttrs: { attrs: '(data-name)|(width)|(height)' } },
					{ cleanupIDs: true },
				],
			},
		}],
	],
	presets: [
		['@babel/preset-typescript', { allowDeclareFields: true }],
		'@babel/preset-react',
		['@babel/preset-env', { corejs: '3.6.5', modules: 'auto', useBuiltIns: 'entry' }],
	],
}
