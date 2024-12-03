const { test, expect } = require('@playwright/test');

test.describe('LinkPage Tests', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to homepage before each test
        await page.goto('/LinkPage');
    })
    test('Load the LinkPage and Display correct title', async ({ page }) => {
        // Display the correct title
        await expect(page).toHaveTitle(/Learning Index/i);
    });
    test('Display Navbar', async ({ page }) => {
        // Display correct Name
        await expect(page.getByText('IS117', { exact: true })).toBeVisible();
        // Display correct tagline
        await expect(page.getByText('Your Guide to the Tech Frontier')).toBeVisible();
        // Check Homepage Link to make sure it works
        const homeLink = page.getByRole('link', { name: 'Home' });
        await expect(homeLink).toBeVisible();
        await expect(homeLink).toHaveAttribute('href', '/');
        // Check links to make sure it works
        const indexLink = page.getByRole('link', { name: 'Learning Index' });
        await expect(indexLink).toBeVisible();
        await expect(indexLink).toHaveAttribute('href', '/LinkPage');
    });
});