module.exports = {
  preset: 'jest-puppeteer',
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: 'e2e/.*',
  transform: {
    "^.+\\.ts?$": "ts-jest"
  }
};
