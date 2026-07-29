import { test as base, expect, request } from '@playwright/test';

import { LoginPage } from '@pages/login-page';
import { AuthenticationFlow } from '@flows/authentication-flow';

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
import { ContactPage } from '@pages/contact-page';
import { ContactFlow } from '@flows/contact-flow';

import { users } from '@data/static/users';
import { contacts } from '@data/static/contact';
import { ProductsApi } from '@api/endpoints/products-api';
import { AuthApi } from '@api/endpoints/auth-api';
import { Environment } from '@config/environment';
import { AxeHelper } from '@utils/axe/axe-helper';

type Fixtures = {
    loginPage: LoginPage;
    registerPage: RegisterPage;
    productsPage: ProductsPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    paymentPage: PaymentPage;
    contactPage: ContactPage;

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
    contactFlow: ContactFlow;

    validUser: typeof users.validUser;
    randomUser: typeof users.randomUser;
    testUser: typeof users.testUser;
    staticUser: typeof users.staticUser;
    contactStatic: typeof contacts.valid;


    //* API FIXTURES *//
    productsApi: ProductsApi;
    authApi: AuthApi;
    userApi: typeof users.apiUser;

    axe: AxeHelper;
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

    contactPage: async ({ page }, use) => {
        await use(new ContactPage(page));
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

    checkoutFlow: async ({ checkoutPage, cartFlow }, use) => {
        await use(new CheckoutFlow(cartFlow, checkoutPage));
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

    contactFlow: async ({ contactPage }, use) => {
        await use(new ContactFlow(contactPage));
    },

    validUser: async ({ }, use) => {
        await use(users.validUser);
    },

    randomUser: async ({ }, use) => {
        await use(users.randomUser);
    },

    staticUser: async ({ }, use) => {
        await use(users.staticUser);
    },

    testUser: async ({ }, use) => {
        await use(users.testUser);
    },

    contactStatic: async ({ }, use) => {
        await use(contacts.valid);
    },

    //* API FIXTURES*/

    productsApi: async ({ }, use) => {
        const context = await request.newContext({
            baseURL: Environment.apiBaseUrl
        });
        await use(new ProductsApi(context));
        await context.dispose();
    },

    authApi: async ({ request }, use) => {
        await use(new AuthApi(request));
    },

    userApi: async ({ }, use) => {
        await use(users.apiUser);
    },

    axe: async ({ page }, use) => {
        await use(new AxeHelper(page));
    },
});

export { expect };