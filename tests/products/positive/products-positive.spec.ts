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
    });
});