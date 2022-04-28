const { test, expect } = require('@playwright/test');
test('google test', async ({ page }) => {

    // Go to google.com
    await page.goto('https://google.com');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Google/);
  });