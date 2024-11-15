const { test, expect } = require('@playwright/test');

test.describe('Homepage Tests', () => {
    test('should load the homepage and display correct title', async ({ page }) => {
        // Navigate to the homepage
        await page.goto('/');

        // Check that the page has the correct title
        await expect(page).toHaveTitle(/Tech Survival Guide/i);
    });
});