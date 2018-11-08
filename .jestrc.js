module.exports = {
  "collectCoverage": false,
  "collectCoverageFrom": [
    "source/**/*.js",
    "!**/node_modules/**"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  },
  "moduleNameMapper": {
    "\\.(css|less|sass|scss)$": "<rootDir>/mocks/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/mocks/fileMock.js",
    "@/(.*)$": "<rootDir>/source/$1"
  },
  "resolver": "jest-directory-named-resolver",
  "testURL": "http://localhost",
  "transform": {
    "^.+\\.js$": "babel-jest"
  },
  "verbose": true,
  "watchPathIgnorePatterns": [
    "<rootDir>/**/.*\\.json",
    "<rootDir>/**/build",
    "<rootDir>/**/docs"
  ]
}