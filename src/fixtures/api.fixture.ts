import { test as base, request } from "@playwright/test";
import { Environment } from "@config/environment";

import { ProductsApi } from "@api/endpoints/products-api";
import { AuthApi } from "@api/endpoints/auth-api";
import { users } from "@data/static/users";

type ApiFixtures = {
    productsApi: ProductsApi;
    authApi: AuthApi;
    userApi: typeof users.apiUser;
};

export const test = base.extend<ApiFixtures>({
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
});