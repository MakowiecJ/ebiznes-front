module.exports = {
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    moduleNameMapper: {
      "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"]
  };