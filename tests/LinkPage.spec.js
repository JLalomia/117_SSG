const { test, expect } = require('@playwright/test');

test.describe('LinkPage Tests', () => {
    test('Load the LinkPage and Display correct title', async ({ page }) => {
        // Navigate to the homepage
        await page.goto('/LinkPage');
        // Display the correct title
        await expect(page).toHaveTitle(/Learning Index/i);
    });
    test('Display Navbar', async ({ page }) => {
        await page.goto('/LinkPage');
        // Display correct Name
        await expect(page.getByText('IS117', { exact: true })).toBeVisible();
        // Display correct tagline
        await expect(page.getByText('Your Guide to the Tech Frontier')).toBeVisible();
        // Check Homepage Link to make sure it works
        homeLink = page.getByRole('link', { name: 'Home' });
        await expect(homeLink).toHaveAttribute('href', '/');
        // Check links to make sure it works
        indexLink = page.getByRole('link', { name: 'Learning Index' });
        await expect(indexLink).toBeVisible();
        await expect(indexLink).toHaveAttribute('href', '/LinkPage');
    });
});