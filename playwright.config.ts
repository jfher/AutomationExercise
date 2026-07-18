import { defineConfig } from '@playwright/test';
import { Browsers } from '@config/browsers';
import { Environment } from '@config/environment';
import { Reporters } from '@config/reporters';
import { Timeouts } from '@config/timeouts';

import dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 2 : undefined,
    reporter: Reporters as any,

    use: {
        baseURL: Environment.baseUrl,
        headless: Environment.headless,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },

    timeout: Timeouts.default,
    expect: {
        timeout: Timeouts.expect
    },
    projects: [
        Browsers.chromium,
        Browsers.firefox,
        Browsers.webkit,
    ]
});