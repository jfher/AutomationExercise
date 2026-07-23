import { test as base, expect } from '@playwright/test';

import { LoginPage } from '@pages/login-page';
import { AuthenticationFlow } from '@flows/authentication-flow';

import { users } from '@data/static/users';
import { RegistrationFlow } from '@flows/registration-flow';
import { RegisterPage } from '@pages/register-page';
import { AccountCreatedPage } from '@pages/accountCreated-page';
import { AccountDeletedPage } from '@pages/accountDeleted-page';
import { ProductsPage } from '@pages/products-page';
import { ProductDetailsPage } from '@pages/product-details-page';
import { ProductFlow } from '@flows/product-flow';
import { CartPage } from '@pages/cart-page';
import { CartFlow } from '@flows/cart-flow';
import { CheckoutPage } from '@pages/checkout-page';
import { CheckoutFlow } from '@flows/checkout-flow';
import { PaymentPage } from '@pages/payment-page';
import { PaymentFlow } from '@flows/payment-flow';
import { PaymentDonePage } from '@pages/paymentDone-page';

type Fixtures = {
    loginPage: LoginPage;
    registerPage: RegisterPage;
    productsPage: ProductsPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    paymentPage: PaymentPage;

    productDetailsPage: ProductDetailsPage;
    accountCreatedPage: AccountCreatedPage;
    accountDeletedPage: AccountDeletedPage;
    paymentDonePage: PaymentDonePage;

    authenticationFlow: AuthenticationFlow;
    registrationFlow: RegistrationFlow;
    productFlow: ProductFlow;
    cartFlow: CartFlow;
    checkoutFlow: CheckoutFlow;
    paymentFlow: PaymentFlow;

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

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },

    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },

    paymentPage: async ({ page }, use) => {
        await use(new PaymentPage(page));
    },

    productsPage: async ({ page }, use) => {
        await use(new ProductsPage(page));
    },

    productDetailsPage: async ({ page }, use) => {
        await use(new ProductDetailsPage(page));
    },

    accountCreatedPage: async ({ page }, use) => {
        await use(new AccountCreatedPage(page));
    },

    accountDeletedPage: async ({ page }, use) => {
        await use(new AccountDeletedPage(page));
    },

    paymentDonePage: async ({ page }, use) => {
        await use(new PaymentDonePage(page));
    },

    productFlow: async ({ productsPage, productDetailsPage }, use) => {
        await use(new ProductFlow(productsPage, productDetailsPage));
    },

    cartFlow: async ({ productsPage, cartPage }, use) => {
        await use(new CartFlow(productsPage, cartPage));
    },

    checkoutFlow: async ({ checkoutPage, cartFlow, authenticationFlow }, use) => {
        await use(new CheckoutFlow(authenticationFlow, cartFlow, checkoutPage));
    },

    authenticationFlow: async ({ loginPage }, use) => {
        await use(new AuthenticationFlow(loginPage));
    },

    registrationFlow: async ({ registerPage, accountDeletedPage, accountCreatedPage }, use) => {
        await use(new RegistrationFlow(registerPage, accountDeletedPage, accountCreatedPage));
    },

    paymentFlow: async ({ paymentPage, checkoutPage, checkoutFlow }, use) => {
        await use(new PaymentFlow(paymentPage, checkoutPage, checkoutFlow));
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