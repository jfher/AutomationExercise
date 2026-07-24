import { test as setup } from '@playwright/test';

import { AuthenticationFlow } from '@flows/authentication-flow';
import { users } from '@data/static/users';
import { LoginPage } from '@pages/login-page';

const authFile = 'playwright/.auth/customer.json';

setup('Authenticate customer', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const authflow = new AuthenticationFlow(loginPage);
    await authflow.login(users.staticUser);

    await page.context().storageState({
        path: authFile
    });
});