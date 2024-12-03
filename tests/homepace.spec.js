const { test, expect } = require('@playwright/test');

test.describe('Homepage Tests', () => {
    test('Load the homepage and Display correct title', async ({ page }) => {
        // Navigate to the homepage
        await page.goto('/');
        // Display the correct title
        await expect(page).toHaveTitle(/Tech Survival Guide/i);
    });
    test('Display Navbar', async ({ page }) => {
        await page.goto('/');
        // Display correct Name
        await expect(page.getByText('IS117')).toBeVisible();
        // Display correct tagline
        await expect(page.getByText('Your Guide to the Tech Frontier')).toBeVisible();
        // Check link to make sure it works
        link = page.getByRole('link', { name: 'Learning Index' });
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute('href', '/LinkPage');
    });
    test('Hero Test', async ({ page }) => {
        await page.goto('/');
        // Check Header
        await expect(page.getByRole('heading', { name: 'Uncover the Foundations of the Digital Age' })).toBeVisible();
        // Check tagline
        await expect(page.getByText('Empower yourself with essential commands and knowledge to excel in tech and coding')).toBeVisible();
        // Check Button
        link = page.getByRole('link', { name: 'Access Content Now' });
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute('href', '/LinkPage');
    });
});