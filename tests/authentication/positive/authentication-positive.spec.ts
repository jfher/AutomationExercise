import { test, expect } from '@fixtures/test.fixture';
import { RegisterPage } from '@pages/register-page';

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

        /**
         * Requirement : FR-003
         * Test Case  : AUTH-004
         * Priority   : Medium
         */
        test("[AUTH-004] Authenticated user can logout successfully", { tag: ["@authentication", "@regression"] },
            async ({ authenticationFlow, loginPage, validUser }) => {
                await test.step("Login", async () => {
                    await authenticationFlow.login(validUser);
                });

                await test.step("Logout", async () => {
                    await authenticationFlow.logout(validUser);
                });

                await test.step("Verify", async () => {
                    await loginPage.isDisplayed();
                });
            }
        );

        /**
         * Requirement : FR-004
         * Test Case  : AUTH-005
         * Priority   : High
         */
        test('[AUTH-005] New users must be able to register', { tag: ['@regression', '@authentication'] },
            async ({ registrationFlow, registerPage, accountCreatedPage, randomUser }) => {

                await test.step('Signup', async () => {
                    await registrationFlow.signup(randomUser);
                    await registerPage.isDisplayed();
                })

                await test.step('Create Account', async () => {
                    await registrationFlow.createAccount(randomUser);
                    await expect(accountCreatedPage.getTitle()).toBeVisible();
                })

                await test.step('Continue', async () => {
                    await accountCreatedPage.continue();
                    await expect(registerPage.header.getLoggedUser()).toBeVisible();
                    await expect(registerPage.header.getLogoutLink()).toBeVisible();
                    await expect(registerPage.header.getLoginLink()).toBeHidden();
                })
            }
        );
    });
});