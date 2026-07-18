import { expect, test } from '@fixtures/test.fixture';

test.describe('Authentication', { tag: ['@smoke', '@authentication'] }, () => {

    test('Registered user can login', { tag: ['@smoke', '@authentication', '@positive'] },
        async ({ authenticationFlow, validUser, loginPage }) => {
            await authenticationFlow.login(validUser);
            await expect(loginPage.header.loggedUser()).toBeVisible();
        });
});