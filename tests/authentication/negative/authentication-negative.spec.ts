import { UserBuilder } from '@data/builders/user-builder';
import { test, expect } from '@fixtures/test.fixture';

test.describe('Authentication Module', () => {
    test.describe('Negative Scenarios', () => {

        /**
         * Requirement : FR-002
         * Test Case  : AUTH-002
         * Priority   : High
         */
        test('[AUTH-002] User cannot login with invalid password', { tag: ['@regression', '@authentication', '@negative'] },
            async ({ authenticationFlow, loginPage, validUser }) => {

                const invalidUser = new UserBuilder()
                    .withEmail(validUser.email)
                    .withInvalidPassword()
                    .build();

                await test.step('Execute login', async () => {
                    await authenticationFlow.login(invalidUser);
                });

                await test.step('Verify validation message', async () => {
                    await expect(loginPage.getLoginErrorMessage()).toContainText('Your email or password is incorrect!');
                });
            }
        );

        /**
         * Requirement : FR-002
         * Test Case   : AUTH-003
         * Priority    : High
         */
        test('[AUTH-003] User cannot login with a non-existing email', { tag: ['@authentication', '@negative', '@regression'] },
            async ({ authenticationFlow, loginPage, validUser }) => {
                const user = new UserBuilder()
                    .withNonExistingEmail()
                    .withPassword(validUser.password)
                    .build();

                await test.step('Execute login', async () => {
                    await authenticationFlow.login(user);
                });

                await test.step('Verify error message', async () => {
                    await expect(loginPage.getLoginErrorMessage()).toContainText('Your email or password is incorrect!');
                });

            }
        );
    });
})