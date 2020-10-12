const path = require('path')

module.exports = {
	coverageDirectory: path.resolve(__dirname, 'tests', 'coverage'),
	moduleDirectories: ['node_modules'],
	moduleNameMapper: {
		'^(.*).(css|eot|gif|jpg|otf|png|svg|ttf|woff2?)$': path.resolve(__dirname, 'mocks/fileMock.js'),
		'^(.*).s?css$': path.resolve(__dirname, 'mocks/styleMock.js'),
	},
	modulePathIgnorePatterns: ['build', 'coverage', 'docs'],
	resolver: 'jest-directory-named-resolver',
	rootDir: __dirname,
	testEnvironment: 'jsdom',
	testURL: 'http://localhost',
	transform: {
		'^.+\\.[jt]sx?$': 'babel-jest',
	},
	verbose: true,
	watchPathIgnorePatterns: [
		'.*.json',
		'<rootDir>/.*/build',
		'<rootDir>/.*/docs',
	],
}
