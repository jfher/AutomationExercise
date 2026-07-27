import { expect } from "@playwright/test";

import { test } from "@fixtures/api.fixture";
import { users } from "@data/static/users";
import { API_MESSAGES, STATUS_CODES } from "@data/constants/api-responses";

test.describe('API Test', async () => {
    test.describe('Positive Scenarios', () => {
        /**
         * Requirement : FR-API-001
         * Test Case   : API-001
         * Priority: Critical
         */
        test("[API-001] Get all products", { tag: ["@api", "@smoke", "@regression"] },
            async ({ productsApi }) => {
                const response = await productsApi.getProducts();
                expect(response.responseCode).toBe(STATUS_CODES.OK);
                expect(response.products.length).toBeGreaterThan(0);
            }
        );

        /**
         * Requirement : FR-API-002
         * Test Case   : API-002
         * Priority: High
         */
        test("[API-002] Search products", { tag: ["@api", "@regression"] },
            async ({ productsApi }) => {
                const response = await productsApi.searchProducts({ search_product: "Blue" });
                expect(response.responseCode).toBe(STATUS_CODES.OK);
                expect(response.products.length).toBeGreaterThan(0);
                expect(response.products.some(p => p.name.includes("Blue"))).toBeTruthy();
            }
        );

        /**
        * Requirement : FR-API-003
        * Test Case   : API-003
        * Priority: Critical
        */
        test("[API-003] Verify login", { tag: ["@api", "@smoke", "@regression"] },
            async ({ authApi }) => {
                const response = await authApi.verifyLogin({
                    email: users.staticUser.email,
                    password: users.staticUser.password
                });

                expect(response.responseCode).toBe(STATUS_CODES.OK);
                expect(response.message).toContain(API_MESSAGES.USER_EXISTS);
            }
        );

        /**
        * Requirement : FR-API-004
        * Test Case   : API-004
        * Priority: High
        */
        test("[API-004] Create account", { tag: ["@api", "@regression"] },
            async ({ authApi, userApi }) => {
                const response = await authApi.createAccount(userApi);
                expect(response.responseCode).toBe(STATUS_CODES.CREATED);
                expect(response.message).toContain(API_MESSAGES.USER_CREATED);
            }
        );


        /**
        * Requirement : FR-API-005
        * Test Case   : API-005
        * Priority: High
        */
        test("[API-005] Delete account", { tag: ["@api", "@regression"] },
            async ({ authApi, userApi }) => {
                const response = await authApi.deleteAccount(userApi);
                expect(response.responseCode).toBe(STATUS_CODES.OK);
                expect(response.message).toContain(API_MESSAGES.ACCOUNT_DELETED);
            }
        );
    })
})
