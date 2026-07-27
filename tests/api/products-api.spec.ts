import { expect } from "@playwright/test";

import { test } from "@fixtures/api.fixture";

test.describe('API Test', async () => {
    test.describe('Positive Scenarios', () => {
        test("[API-001] Get all products", { tag: ["@api", "@smoke", "@regression"] },
            async ({ productsApi }) => {
                const response = await productsApi.getProducts();
                expect(response.responseCode).toBe(200);
                expect(response.products.length).toBeGreaterThan(0);
            }
        );
    })
})
