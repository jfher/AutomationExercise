import { test as base, expect } from '@playwright/test';

import { LoginPage } from '@pages/login-page';
import { AuthenticationFlow } from '@flows/authentication-flow';

import { users } from '@data/static/users';

type Fixtures = {

    loginPage: LoginPage;
    authenticationFlow: AuthenticationFlow;
    validUser: typeof users.validUser;
};

export const test = base.extend<Fixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    authenticationFlow: async ({ loginPage }, use) => {
        await use(new AuthenticationFlow(loginPage));
    },

    validUser: async ({ }, use) => {
        await use(users.validUser);
    }
});

export { expect };