import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Access Content Now' }).click();
  /*await page.getByText('Empower yourself with').click();
  await page.getByRole('heading', { name: 'Our Guides Strive To Teach' }).click();
  await page.getByText('History Explore the evolution of the Internet Learn More').click();
  await page.getByRole('link', { name: 'Learn More' }).first().click();
  await page.getByRole('heading', { name: 'Get Your Free Tech Cheat Sheet' }).click();
  await page.locator('section').filter({ hasText: 'Why We Started At the heart' }).getByRole('img').click();
  await page.getByRole('heading', { name: 'Why We Started' }).click();
  await page.getByText('At the heart of our').click();
  await page.getByText('Our Founder believes that').click();
  await page.getByRole('heading', { name: 'Our Impact' }).click();
  await page.getByRole('heading', { name: 'User Reviews From Students' }).click();
  await page.locator('div').filter({ hasText: '“Using this service has' }).nth(1).click();
  await page.getByText('“Using this service has').click();
  await page.locator('section').filter({ hasText: 'Top Rated Tutors Our team of' }).getByRole('img').click();
  await page.getByRole('heading', { name: 'Top Rated Tutors' }).click();
  await page.getByRole('heading', { name: 'Track Your Learning' }).click();*/
});