const path = require('path')

module.exports = {
  coverageDirectory: path.resolve(__dirname, 'tests', 'coverage'),
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '(.*)\.(css|eot|gif|jpg|otf|png|svg|ttf|woff2?)$': '<rootDir>/mocks/fileMock.js',
    '(.*)\.s?css$': '<rootDir>/mocks/styleMock.js',
    '@/(.*)$': '<rootDir>/source/$1',
  },
  modulePathIgnorePatterns: ['build', 'docs'],
  resolver: 'jest-directory-named-resolver',
  rootDir: __dirname,
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  verbose: true,
  watchPathIgnorePatterns: [
    '<rootDir>/**/.*\\.json',
    '<rootDir>/**/build',
    '<rootDir>/**/docs',
  ],
}
