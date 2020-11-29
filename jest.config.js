module.exports = {
	coverageDirectory: '<rootDir>/tests/coverage',
	moduleDirectories: ['node_modules'],
	moduleNameMapper: {
		'@/(.*)$': '<rootDir>/source/$1',
		'^(.*).(css|eot|gif|jpg|otf|png|svg|ttf|woff2?)$': '<rootDir>/mocks/fileMock.js',
		'^(.*).s?css$': '<rootDir>/mocks/styleMock.js',
	},
	modulePathIgnorePatterns: ['build', 'coverage', 'docs'],
	preset: '@shelf/jest-mongodb',
	resolver: 'jest-directory-named-resolver',
	rootDir: __dirname,
	setupFilesAfterEnv: [
		'<rootDir>/jest.setup.ts',
	],
	testEnvironment: 'node',
	testURL: 'http://localhost',
	transform: {
		'^.+\\.[jt]sx?$': 'babel-jest',
	},
	verbose: true,
	watchPathIgnorePatterns: [
		'.*.json',
		'<rootDir>/globalConfig.json',
		'<rootDir>/.*/build',
		'<rootDir>/.*/docs',
	],
}
