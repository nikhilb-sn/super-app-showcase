// module.exports = {
//   preset: 'react-native',
//   rootDir: '..',
//   testMatch: ['<rootDir>/host/e2e/**/*.test.js'],
//   testTimeout: 120000,
//   maxWorkers: 1,
//   globalSetup: 'detox/runners/jest/globalSetup',
//   globalTeardown: 'detox/runners/jest/globalTeardown',
//   reporters: ['detox/runners/jest/reporter'],
//   testEnvironment: 'detox/runners/jest/testEnvironment',
//   verbose: true,
//   transform: {
//     '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use babel-jest for JavaScript and TypeScript files
//   },
//   transformIgnorePatterns: [
//     'node_modules/(?!(react-native|@react-native|@react-native-community|@react-native/polyfills)/)', // Transform specific node_modules
//   ],
//   moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'], // Ensure all file extensions are included
//   globals: {
//     'ts-jest': {
//       tsconfig: 'tsconfig.json', // Point to your tsconfig.json
//     },
//   },
// };

module.exports = {
  preset: 'react-native',
  fakeTimers: {
    enableGlobally: true,
  },
  setupFiles: ['./jest.setup.js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest for TypeScript files
  },
  transformIgnorePatterns: [
    'node_modules/(?!(?:.pnpm/)?((jest-)?react-native|@react-native(-community)?|react-navigation|@react-navigation|react-native-svg))',
  ],
  testRunner: 'jest-circus/runner',
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  reporters: ['detox/runners/jest/reporter'],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  // setupFilesAfterEnv: ['./detox.setup.js'],
  verbose: true,
  testMatch: ['**/e2e/**/*.e2e.js'],
};

