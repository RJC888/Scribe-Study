// tests/analysis.spec.js
import { test, expect } from '@playwright/test';

test('generates an analysis for a passage', async ({ page }) => {
  await page.goto('/');

  await page.fill('#scriptureInput', 'John 3:16');
  await page.click('#generateBtn');

  const result = page.locator('#analysisDisplayDynamic');
  await expect(result).toContainText('John 3:16', { timeout: 10_000 });
});
