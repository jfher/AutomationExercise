import { devices } from "@playwright/test";

export const Browsers = {
    setup: {
        name: 'setup',
        testMatch: /auth\.setup\.ts/
    },


    visualTests: {
        name: 'visualTests',
        testMatch: /visual\/.*\.spec\.ts/,
        use: {
            ...devices["Desktop Chrome"],
            storageState: undefined
        }
    },

    authTests: {
        name: 'authTests',
        testMatch: /authentication\/(positive|negative)\/.*\.spec\.ts/,
        use: {
            ...devices["Desktop Chrome"],
            storageState: undefined
        }
    },

    a11yTests: {
        name: 'a11yTests',
        testMatch: /a11y\/.*\.spec\.ts/,
        use: {
            ...devices["Desktop Chrome"],
            storageState: undefined
        }
    },

    contactTests: {
        name: 'contactTests',
        testMatch: /contact\/.*\.spec\.ts/,
        use: {
            ...devices["Desktop Chrome"],
            storageState: undefined
        }
    },

    integrationTests: {
        name: 'integrationTests',
        testMatch: /integration\/.*\.spec\.ts/,
        use: {
            ...devices["Desktop Chrome"],
            storageState: undefined
        }
    },

    apiTests: {
        name: 'apiTests',
        testMatch: /api\/.*\.spec\.ts/,
        use: {
            ...devices["Desktop Chrome"],
            storageState: undefined
        }
    },

    chromium: {
        name: "chromium",
        testIgnore: [
            /authentication\/.*/,
            /contact\/.*/,
            /api\/.*/,
            /integration\/.*/,
            /a11y\/.*/,
            /visual\/.*/
        ],
        use: {
            ...devices["Desktop Chrome"],
            storageState: 'playwright/.auth/customer.json'
        },
        dependencies: ['setup']
    },

    firefox: {
        name: "firefox",
        testIgnore: [
            /authentication\/.*/,
            /contact\/.*/,
            /api\/.*/,
            /integration\/.*/,
            /a11y\/.*/,
            /visual\/.*/
        ],
        use: {
            ...devices["Desktop Firefox"],
            storageState: 'playwright/.auth/customer.json'
        },
        dependencies: ['setup']
    },

    webkit: {
        name: "webkit",
        testIgnore: [
            /authentication\/.*/,
            /contact\/.*/,
            /api\/.*/,
            /integration\/.*/,
            /a11y\/.*/,
            /visual\/.*/
        ],
        use: {
            ...devices["Desktop Safari"],
            storageState: 'playwright/.auth/customer.json'
        },
        dependencies: ['setup']
    },
};