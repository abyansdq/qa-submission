const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    baseURL: process.env.BASE_URL,

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  },

  projects: [
    // Google Chrome
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome'
      }
    },

    // Microsoft Edge
    {
      name: 'edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge'
      }
    },
  ]
});