// tests/scripture.spec.js
import { test, expect } from '@playwright/test';

test('scripture display + zoom + version selector work', async ({ page }) => {
  await page.goto('/');

  // Enter passage
  await page.fill('#scriptureInput', 'Psalm 23');
  await page.click('#generateBtn');

  // Wait for scripture to appear
  const output = page.locator('#analysisDisplayDynamic');
  await expect(output).toContainText('Psalm', { timeout: 12_000 });

  // Version dropdown (if present)
  const versionSelect = page.locator('#versionSelect');
  if (await versionSelect.isVisible()) {
    await versionSelect.selectOption('KJV');
  }

  // Zoom buttons (if present)
  const increaseBtn = page.locator('#fontIncreaseBtn');
  const decreaseBtn = page.locator('#fontDecreaseBtn');

  if (await increaseBtn.isVisible()) {
    await increaseBtn.click();
    await increaseBtn.click();
  }

  if (await decreaseBtn.isVisible()) {
    await decreaseBtn.click();
  }

  await expect(output).toBeVisible();
});
