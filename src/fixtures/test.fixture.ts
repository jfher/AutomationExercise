import { test as base, expect } from '@playwright/test';

import { LoginPage } from '@pages/login-page';
import { AuthenticationFlow } from '@flows/authentication-flow';

import { users } from '@data/static/users';
import { RegistrationFlow } from '@flows/registration-flow';
import { RegisterPage } from '@pages/register-page';
import { AccountCreatedPage } from '@pages/accountCreated-page';
import { AccountDeletedPage } from '@pages/accountDeleted-page';

type Fixtures = {
    loginPage: LoginPage;
    registerPage: RegisterPage;
    accountCreatedPage: AccountCreatedPage;
    accountDeletedPage: AccountDeletedPage;
    authenticationFlow: AuthenticationFlow;
    registrationFlow: RegistrationFlow;
    validUser: typeof users.validUser;
    randomUser: typeof users.randomUser;
    staticUser: typeof users.staticUser;
};

export const test = base.extend<Fixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },

    accountCreatedPage: async ({ page }, use) => {
        await use(new AccountCreatedPage(page));
    },

    accountDeletedPage: async ({ page }, use) => {
        await use(new AccountDeletedPage(page));
    },

    authenticationFlow: async ({ loginPage }, use) => {
        await use(new AuthenticationFlow(loginPage));
    },

    registrationFlow: async ({ registerPage }, use) => {
        await use(new RegistrationFlow(registerPage));
    },

    validUser: async ({ }, use) => {
        await use(users.validUser);
    },

    randomUser: async ({ }, use) => {
        await use(users.randomUser);
    },

    staticUser: async ({ }, use) => {
        await use(users.staticUser);
    }
});

export { expect };