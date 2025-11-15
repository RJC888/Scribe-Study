// tests/ui.spec.js
import { test, expect } from '@playwright/test';

test('sidebar collapses and expands', async ({ page }) => {
  await page.goto('/');

  const sidebar = page.locator('#sidebar');
  const toggle = page.locator('#sidebarToggle');

  await expect(sidebar).toBeVisible();
  await toggle.click();
  await expect(sidebar).toHaveClass(/collapsed/);

  await toggle.click();
  await expect(sidebar).not.toHaveClass(/collapsed/);
});
