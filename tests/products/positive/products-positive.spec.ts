import { Categories } from '@data/static/categories';
import { Products } from '@data/static/products';
import { test, expect } from '@fixtures/test.fixture';

test.describe('Products Module', () => {

    test.describe('Positive Scenarios', () => {

        /**
         * Requirement : FR-PROD-001
         * Test Case   : PROD-001
         * Priority    : Critical
         */
        test('[PROD-001] User can view all available products', { tag: ['@products', '@smoke', '@regression'] },
            async ({ productFlow, productsPage }) => {
                await test.step('Open Products page', async () => {
                    await productFlow.openProducts();
                });

                await test.step('Verify product list', async () => {
                    await expect(productsPage.getProductCards()).not.toHaveCount(0);
                });

                await test.step('Verify first product information', async () => {
                    const firstProduct = productsPage.getProductCard(0);
                    await expect(firstProduct.getName()).toBeVisible();
                    await expect(firstProduct.getPrice()).toBeVisible();
                    await expect(firstProduct.getViewProductButton()).toBeVisible();
                });
            }
        );

        /**
         * Requirement : FR-PROD-002
         * Test Case   : PROD-002
         * Priority    : High
         */
        test('[PROD-002] User can search an existing product', { tag: ['@products', '@regression'] },
            async ({ productFlow, productsPage }) => {
                await test.step('Search product', async () => {
                    await productFlow.searchProduct(Products.blueTop);
                });

                await test.step('Verify search results', async () => {
                    await expect(productsPage.getSearchedProductsTitle()).toContainText('Searched Products');
                    await expect(productsPage.getProductCards()).not.toHaveCount(0)
                });
            }
        );

        /**
         * Requirement : FR-PROD-003
         * Test Case   : PROD-003
         * Priority    : High
         */
        test('[PROD-003] User can view product details', { tag: ['@products', '@regression'] },
            async ({ productFlow, productDetailsPage }) => {
                await test.step('Open product details', async () => {
                    await productFlow.openFirstProductDetails();
                });

                await test.step('Verify product information', async () => {
                    await expect(productDetailsPage.getProductName()).toBeVisible();
                    await expect(productDetailsPage.getProductPrice()).toBeVisible();
                    await expect(productDetailsPage.getAvailability()).toBeVisible();
                    await expect(productDetailsPage.getCategory()).toBeVisible();
                    await expect(productDetailsPage.getBrand()).toBeVisible();
                });
            }
        );


        /**
         * Requirement : FR-PROD-004
         * Test Case   : PROD-004
         * Priority    : Medium
         */
        test("[PROD-004] User can filter by category", { tag: ["@products", "@regression"] },
            async ({ productFlow, productsPage }) => {
                await productFlow.filterByCategory(Categories.women, Categories.dress);
                await expect(productsPage.getCategoryTitle()).toContainText(Categories.women);
                await expect(productsPage.getCategoryTitle()).toContainText(Categories.dress);
            }
        );
    });
});