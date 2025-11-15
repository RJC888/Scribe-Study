// tests/smoke.spec.js
import { test, expect } from '@playwright/test';

test('Scribe Study loads with no major console errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto('/');

  // Check key UI elements
  await expect(page.locator('.header')).toBeVisible();
  await expect(page.locator('#scriptureInput')).toBeVisible();
  await expect(page.locator('#generateBtn')).toBeVisible();
  await expect(page.locator('#modulesContainer')).toBeVisible();
  await expect(page.locator('#analysisDisplayDynamic')).toBeVisible();

  expect(errors, 'Console errors detected').toEqual([]);
});
