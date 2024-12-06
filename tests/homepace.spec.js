const { test, expect } = require('@playwright/test');

test.describe('Homepage Tests', () => {
   test('has title', async ({ page }) => {
      await page.goto('/');
      await expect(page).toHaveTitle(/Tech Survival Guide/i);
    });

    /*test.beforeEach(async ({ page }) => {
        // Navigate to homepage before each test
        await page.goto('/');
    })
    test('Display correct title', async ({ page }) => {
        // Display the correct title
        await expect(page).toHaveTitle(/Tech Survival Guide/i);
    });
    test('Display Navbar', async ({ page }) => {
        // Display correct Name
        await expect(page.getByText('IS117')).toBeVisible();
        // Display correct tagline
        await expect(page.getByText('Your Guide to the Tech Frontier')).toBeVisible();
        // Check link to make sure it works
        const link = page.getByRole('link', { name: 'Learning Index' });
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute('href', '/LinkPage');
    });
    test('Hero Section', async ({ page }) => {
       // Check heading
       await expect(page.getByRole('heading', { name: 'Uncover the Foundations of the Digital Age' })).toBeVisible();
       // Check tagline
       await expect(page.getByText('Empower yourself with ')).toBeVisible();
       // Check button
       const link = page.getByRole('link', { name: 'Access Content Now' });
       await expect(link).toBeVisible();
       await expect(link).toHaveAttribute('href', '/LinkPage');
    });
    test('Topics Section', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Our Guides Strive To Teach The Fundamentals Of' })).toBeVisible();
          // Verify the presence of topic cards
          const topicCards = page.locator('.topic-card');
          await expect(topicCards).toHaveCount(4); // Update `3` based on the actual number of topics
          // Check the content of each topic card
          await expect(topicCards.nth(0).getByRole('heading', { name: 'History' })).toBeVisible();
          await expect(topicCards.nth(0).locator('p', { hasText: 'Explore the evolution of the Internet' })).toBeVisible();
          // Check the "Learn More" link in the first card
          const firstCardLink = topicCards.nth(0).locator('a.topic-btn');
          await expect(firstCardLink).toBeVisible();
          await expect(firstCardLink).toHaveAttribute('href', '/LinkPage');
     });
     test('Call to Action Section', async ({ page }) => {
        // Check heading
        await expect(page.getByRole('heading', { name: 'Get Your Free Tech Cheat Sheet' })).toBeVisible();
        // Check button
        const link = page.getByRole('link', { name: 'Download Now' });
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute('href', '#');
     });
     test('WWS Section', async ({ page }) => {
        // Check Image
        const founderImage = page.locator('img[src="images/Founder.png"]');
        await expect(founderImage).toBeVisible();
        await expect(founderImage).toHaveAttribute('src', 'images/Founder.png');
        // Check heading
        await expect(page.getByRole('heading', { name: 'Why We Started' })).toBeVisible();
        // Check Content
        await expect(page.getByText('At the heart of our philosophy ')).toBeVisible();
        await expect(page.getByText('Our Founder believes that everyone ')).toBeVisible();
     });
     test('Impact Section', async ({ page }) => {
        const impactSection = page.locator('.Impact');
        // Check heading
        await expect(impactSection.locator('h1')).toHaveText('Our Impact');
        // Check subheading
        await expect(impactSection.locator('h3', { hasText: 'User Reviews From Students And Professors' })).toBeVisible();
        // Check Content
        await expect(impactSection.getByText('“Using this service has')).toBeVisible();
     });
     test('Tutor Section', async ({ page }) => {
        // Check Image
        const founderImage = page.locator('img[src="images/Tutor.png"]');
        await expect(founderImage).toBeVisible();
        await expect(founderImage).toHaveAttribute('src', 'images/Tutor.png');
        // Check heading
        await expect(page.getByRole('heading', { name: 'Top Rated Tutors' })).toBeVisible();
        // Check Content
        await expect(page.getByText('Our team of tutors isn')).toBeVisible();
        await expect(page.getByText('Beyond qualifications, our tutors')).toBeVisible();
     });
     test('Footer Section', async ({ page }) => {
        // Check heading
        await expect(page.getByRole('heading', { name: 'Track Your Learning Progression' })).toBeVisible();
        // Check button
        const link = page.getByRole('link', { name: 'Progress Tracker' });
        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute('href', '#');
     });*/
});