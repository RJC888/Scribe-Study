// playwright.config.js
// =============================================
// Scribe Study — Playwright Configuration
// Clean, stable, cross-platform test harness
// =============================================

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,

  // Useful for debugging
  timeout: 30_000,
  expect: { timeout: 5000 },

  use: {
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1400, height: 900 },
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
  },

  webServer: {
    command: 'npm run dev',
    port: 3000,
    timeout: 60_000,
    reuseExistingServer: !process.env.CI,
  },
});
