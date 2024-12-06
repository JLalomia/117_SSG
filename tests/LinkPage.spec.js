const { test, expect } = require('@playwright/test');
test.describe('LinkPage Tests', () => {
  test('has title', async ({ page }) => {
    await page.goto('/LinkPage');
    await expect(page).toHaveTitle(/Learning Index/i);
  });

  /*test.beforeEach(async ({ page }) => {
    // Navigate to LinkPage before each test
    await page.goto('/LinkPage');
  });
  test('Verify LinkPage title and navbar', async ({ page }) => {
    // Verify the page title
    await expect(page).toHaveTitle(/Learning Index/i);
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
  });
  test('Verify PageTitle and categories with links', async ({ page }) => {
    // Verify the page content title
    await expect(page.getByText('IS117-007 Project Index')).toBeVisible();
    // Locate all categories
    const categories = page.locator('h2');
    const categoryCount = await categories.count();
    // Iterate through each category
    for (let i = 0; i < categoryCount; i++) {
      const categoryTitle = await categories.nth(i).textContent();
      console.log(`Category ${i + 1}: ${categoryTitle}`);
      // Locate sections and links within the current category
      const sections = categories.nth(i).locator('~ h3');
      const links = sections.locator('~ ul li a');
      // Verify all links in this category
      const linkCount = await links.count();
      for (let k = 0; k < linkCount; k++) {
        const linkText = await links.nth(k).textContent();
        const linkHref = await links.nth(k).getAttribute('href');
        console.log(`  Link ${k + 1}: ${linkText} (URL: ${linkHref})`);
        // Assertions
        await expect(links.nth(k)).toBeVisible();
        await expect(links.nth(k)).toHaveAttribute('href', linkHref);
      }
    }
  });*/
});