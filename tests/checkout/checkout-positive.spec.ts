import { test, expect } from '@fixtures/test.fixture';

test.describe('Checkout Module', () => {

    test.describe('Positive Scenarios', () => {
        /**
         * Requirement : FR-CHK-001
         * Test Case   : CHK-001
         * Priority: High
         */
        test("[CHK-001] Logged users can access checkout", { tag: ["@checkout", "@smoke", "@regression"] },
            async ({ checkoutFlow, checkoutPage, staticUser }) => {

                await test.step("Access to checkout page", async () => {
                    await checkoutFlow.completeCheckout(staticUser);
                });

                await test.step("Verify checkout", async () => {
                    await expect(checkoutPage.getOrderProducts()).toHaveCount(2);
                });
            }
        );

    });
});