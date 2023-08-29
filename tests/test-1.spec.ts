import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:9292/');
  await page.getByRole('link', { name: 'A/B Testing' }).click();
  await expect(page.getByText('Also known as split testing. This is a way in which businesses are able to simul')).toHaveCount(1)
});