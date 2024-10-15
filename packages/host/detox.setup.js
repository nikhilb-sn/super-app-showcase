// const detox = require('detox');
// const config = require('../.detoxrc.json');  // Point to your Detox configuration file
// const adapter = require('detox/runners/jest/adapter');  // Use Detox Jest adapter

// jest.setTimeout(120000);  // Extend Jest timeout for Detox tests

// beforeAll(async () => {
//   await detox.init(config);  // Initialize Detox with the proper config
// }, 120000);

// beforeEach(async () => {
//   await beforeEach();  // Detox adapter setup for each test
// });

// afterAll(async () => {
//   await detox.cleanup();  // Cleanup Detox after tests
// });

const detox = require('detox');
const config = require('../.detoxrc.json');  // Point to your Detox configuration file
const adapter = require('detox/runners/jest/adapter');  // Use Detox Jest adapter
const { init, cleanup } = require('detox');

jest.setTimeout(120000);  // Extend Jest timeout for Detox tests

beforeAll(async () => {
  await init(config);  // Initialize Detox with the proper config
}, 120000);

beforeEach(async () => {
  await adapter.beforeEach();  // Properly setup Detox adapter for each test
});

afterAll(async () => {
  await cleanup();  // Cleanup Detox after tests
});
