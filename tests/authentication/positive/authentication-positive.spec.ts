import { test, expect } from '@fixtures/test.fixture';

test.describe('Authentication Module', () => {
    test.describe('Positive Scenarios', () => {
        /**
         * Requirement : FR-001
         * Test Case  : AUTH-001
         * Priority   : Critical
         */
        test('[AUTH-001] Registered user can login successfully', { tag: ['@smoke', '@regression', '@authentication'] },
            async ({ authenticationFlow, loginPage, validUser }) => {
                await authenticationFlow.login(validUser);
                await expect(loginPage.header.getLoggedUser()).toBeVisible();
                await expect(loginPage.header.getLogoutLink()).toBeVisible();
                await expect(loginPage.header.getLoginLink()).toBeHidden();
            }
        );
    });
});