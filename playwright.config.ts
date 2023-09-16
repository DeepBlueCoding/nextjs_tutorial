/* eslint-disable import/no-extraneous-dependencies */
import type {PlaywrightTestConfig} from '@playwright/test';
import {devices} from '@playwright/test';

// Use a distinct port on CI to avoid conflicts during concurrent tests
const PORT = process.env.CI ? 3002 : 3000;

const config: PlaywrightTestConfig = {
  testDir: './e2e',
  projects: [
    {
      name: 'chromium',
      use: devices['Desktop Chrome']
    }
  ],
  webServer: {
    command: `PORT=${PORT} yarn start`,
    port: PORT,
    reuseExistingServer: true
  },
  use: {
    baseURL: 'http://127.0.0.1:3000',
  },
};

export default config;
