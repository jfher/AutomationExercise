import { test } from '@playwright/test';

import { LoginPage } from '@pages/login-page';
import { AuthenticationFlow } from '@flows/authentication-flow';

test.describe('Authentication', { tag: ['@smoke', '@authentication'] }, () => {

    test('Registered user can login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const authenticationFlow = new AuthenticationFlow(loginPage);
        await authenticationFlow.login({
            email: 'qa@example.com',
            password: '123456'
        });
    });
});