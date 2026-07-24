import { devices } from "@playwright/test";

export const Browsers = {
    setup: {
        name: 'setup',
        testMatch: /auth\.setup\.ts/
    },

    authTests: {
        name: 'authTests',
        testMatch: /authentication\/(positive|negative)\/.*\.spec\.ts/,
        use: {
            ...devices["Desktop Chrome"],
            storageState: undefined
        }
    },

    chromium: {
        name: "chromium",
        testIgnore: /authentication\/.*/,
        use: {
            ...devices["Desktop Chrome"],
            storageState: 'playwright/.auth/customer.json'
        },
        dependencies: ['setup']
    },

    firefox: {
        name: "firefox",
        testIgnore: /authentication\/.*/,
        use: {
            ...devices["Desktop Firefox"],
            storageState: 'playwright/.auth/customer.json'
        },
        dependencies: ['setup']
    },

    webkit: {
        name: "webkit",
        testIgnore: /authentication\/.*/,
        use: {
            ...devices["Desktop Safari"],
            storageState: 'playwright/.auth/customer.json'
        },
        dependencies: ['setup']
    },
};