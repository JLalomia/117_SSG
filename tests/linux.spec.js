const { test, expect } = require('@playwright/test');
test.describe('git Tests', () => {
  test('has title', async ({ page }) => {
    await page.goto('/linux');
    await expect(page).toHaveTitle(/Top 10 Linux Commands/i);
  });
    /*test.beforeEach(async ({ page }) => {
      // Navigate to git page before each test
      await page.goto('/linux');
    });
    test('Verify Linux title, navbar, and content title', async ({ page }) => {
        // Verify the page title
        await expect(page).toHaveTitle(/Top 10 Linux Commands/i);
        // Check Navbar content
        await expect(page.getByText('IS117', { exact: true })).toBeVisible();
        await expect(page.getByText('Your Guide to the Tech Frontier')).toBeVisible();
        // Check Homepage link
        const homeLink = page.getByRole('link', { name: 'Home' });
        await expect(homeLink).toBeVisible();
        await expect(homeLink).toHaveAttribute('href', '/');
        // Check Learning Index link
        const indexLink = page.getByRole('link', { name: 'Learning Index' });
        await expect(indexLink).toBeVisible();
        await expect(indexLink).toHaveAttribute('href', '/LinkPage');
        // Check content title
        await expect(page.getByText('Commands, What They Do, and Examples')).toBeVisible();
      });*/
});