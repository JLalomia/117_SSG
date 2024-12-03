import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/LinkPage');
  await page.getByText('Your Guide to the Tech').click();
  /*await page.getByText('IS117', { exact: true }).click();
  await page.getByRole('link', { name: ' Home' }).click();
  await page.getByRole('link', { name: 'Learning Index' }).click();
  await page.getByText('IS117 Your Guide to the Tech Frontier Home Learning Index').click();
  await page.getByRole('heading', { name: 'IS117-007 Project Index' }).click();
  await page.getByRole('heading', { name: 'Git and Linux Commands' }).click();*/
});