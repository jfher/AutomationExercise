import { expect, test } from '@fixtures/test.fixture';

test.describe('Authentication', { tag: ['@smoke', '@authentication'] }, () => {

    test('Registered user can login', { tag: ['@smoke', '@authentication', '@positive'] },
        async ({ authenticationFlow, loginPage, validUser }) => {
            await authenticationFlow.login(validUser);
            await expect(loginPage.getPage()).toHaveURL(/.*logged_in/);
        });
});