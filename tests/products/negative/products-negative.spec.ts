import { Products } from '@data/static/products';
import { test, expect } from '@fixtures/test.fixture';

test.describe('Products Module', () => {

    test.describe('Negative Scenarios', () => {

        /**
         * Requirement : FR-PROD-006
         * Test Case   : PROD-006
         * Priority    : Medium
         */
        test('[PROD-006] User can search a non existing product', { tag: ['@products', '@regression'] },
            async ({ productFlow, productsPage }) => {
                await test.step('Search product', async () => {
                    await productFlow.searchProduct(Products.missingProduct);
                });

                await test.step('Verify search results', async () => {
                    await expect(productsPage.getSearchedProductsTitle()).toContainText('Searched Products');
                    await expect(productsPage.getProductCards()).toHaveCount(0)
                });
            }
        );
    });
});