const { test, expect } = require('@playwright/test');
test('google test', async ({ page }) => {

    // Go to google.com
    await page.goto('https://google.com');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Google/);

    // Fill in google search box with cats
    await page.fill('.gLFyf', 'cats');

    // Click search button
    await page.click('.gNO89b');

    // Assert cats 2019 film
    const locator = page.locator('xpath=//*[@id="rso"]/div[1]/div/div/div[2]//div/a/h3');
    await expect(locator).toContainText('Cats (2019 film) - Wikipedia');

    // Close page
    await page.close()

  });


  