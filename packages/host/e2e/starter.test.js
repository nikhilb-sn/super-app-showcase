describe('Appointments Screen', () => {

  beforeAll(async () => {
    await device.launchApp();
  });
  
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should tap the See All button', async () => {
    // Check if the "See All" button is visible
    await expect(element(by.id('seeAllButton'))).toBeVisible();

    // Tap the "See All" button
    await element(by.id('seeAllButton')).tap();
    
    // Optionally, check if the navigation happened by verifying the new screen
    await expect(element(by.text('Upcoming'))).toBeVisible();
  });
});
