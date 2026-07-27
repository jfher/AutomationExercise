import { test as base, request } from "@playwright/test";
import { Environment } from "@config/environment";

import { ProductsApi } from "@api/endpoints/products-api";

type ApiFixtures = {
    productsApi: ProductsApi;
};

export const test = base.extend<ApiFixtures>({
    productsApi: async ({ }, use) => {
        const context = await request.newContext({
            baseURL: Environment.apiBaseUrl
        });
        await use(new ProductsApi(context));
        await context.dispose();
    }
});