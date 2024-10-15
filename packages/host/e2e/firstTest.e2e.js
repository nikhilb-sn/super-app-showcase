const { device, element, by, expect } = require('detox');

describe('First Test', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
    console.log("App Launched")
  });

  afterAll(async () => {
    await device.terminateApp();
  });

  it('should navigate to the main screen after login', async () => {
    // Wait for the login button to be visible
    await expect(element(by.text('Login'))).toBeVisible();
    
    // Tap the login button
    await element(by.text('Login')).tap();
    
    // Add an assertion to verify that the main screen is displayed
    // This could be any text or component that is only present on the main screen
    await expect(element(by.text('Welcome to the Main Screen'))).toBeVisible();
  });
});
