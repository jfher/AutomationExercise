import { test, expect } from '@fixtures/test.fixture';

test.describe('Cart Module', () => {

    test.describe('Positive Scenarios', () => {
        /**
         * Requirement : FR-CART-001
         * Test Case   : CART-001
         * Priority: Critical
         */
        test("[CART-001] User can add product to cart", { tag: ["@cart", "@smoke", "@regression"] },
            async ({ cartFlow, cartPage }) => {
                await test.step("Add product", async () => {
                    await cartFlow.addFirstProductToCart();
                });

                await test.step("Verify cart", async () => {
                    await expect(cartPage.getItems()).toHaveCount(1);
                });

                await test.step("Verify product information", async () => {
                    const item = cartPage.getItem(0);
                    await expect(item.getName()).toBeVisible();
                    await expect(item.getPrice()).toBeVisible();
                    await expect(item.getQuantity()).toContainText("1");
                    await expect(item.getTotal()).toBeVisible();
                });
            }
        );

        /**
         * Requirement : FR-CART-002
         * Test Case   : CART-002
         * Priority: High
         */
        test("[CART-002] User can view products inside cart", { tag: ["@cart", "@regression"] },
            async ({ cartFlow, cartPage }) => {
                await cartFlow.addFirstProductToCart();
                await expect(cartPage.getItems()).not.toHaveCount(0);
            }
        );


        /**
         * Requirement : FR-CART-003
         * Test Case   : CART-003
         * Priority: High
         */
        test("[CART-003] User can remove products", { tag: ["@cart", "@regression"] },
            async ({ cartFlow, cartPage }) => {
                await cartFlow.addFirstProductToCart();
                await cartPage.removeFirstItem();
                await expect(cartPage.getItems()).toHaveCount(0);
            }
        );

        /**
         * Requirement : FR-CART-004
         * Test Case   : CART-004
         * Priority: High
         */
        test("[CART-004] User can add product with custom quantity", { tag: ["@cart", "@regression"] },
            async ({ productFlow, cartPage }) => {
                await productFlow.addProductWithQuantity(4);
                const item = cartPage.getItem(0);
                await expect(item.getQuantity()).toContainText("4");
            }
        );

        /**
         * Requirement : FR-CART-005
         * Test Case   : CART-005
         * Priority: Medium
         */
        test("[CART-005] User can continue shopping", { tag: ["@cart", "@regression"] },
            async ({ productsPage }) => {
                await productsPage.open();
                await productsPage.addFirstProduct();
                await productsPage.continueShopping();
                await expect(productsPage.getProductCards()).not.toHaveCount(0);
            }
        );

        /**
         * Requirement : FR-CART-006
         * Test Case   : CART-006
         * Priority: Critical
         */

        test("[CART-006] User can proceed to checkout", { tag: ["@cart", "@smoke", "@regression"] },
            async ({ cartFlow, checkoutPage }) => {
                await cartFlow.proceedCheckout();
                await expect(checkoutPage.reviewOrder).toBeVisible();
            }
        );
    });
});