module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./setupTest.js'],
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/App.tsx',
    '!src/Navigation.tsx',
    '!src/shared/**/*.{ts,tsx}',
  ],
};
