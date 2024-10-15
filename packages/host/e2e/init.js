const { device, element, by, expect } = require('detox');

beforeAll(async () => {
  await device.launchApp({ newInstance: true });
});

afterAll(async () => {
  await device.terminateApp();
});

global.device = device;
global.element = element;
global.by = by;
global.expect = expect;