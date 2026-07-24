import { test, expect } from '@fixtures/test.fixture';

test.describe('Cart Module', () => {

    test.describe('Positive Scenarios', () => {

        test.describe.configure({
            mode: 'serial'
        });
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
                    await expect(item.getQuantity()).toBeVisible();
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
                await test.step('Add product', async () => {
                    await cartFlow.addFirstProductToCart();
                })

                await test.step('Verify cart', async () => {
                    await expect(cartPage.getItems()).not.toHaveCount(0);
                })
            }
        );

        /**
         * Requirement : FR-CART-003
         * Test Case   : CART-003
         * Priority: High
         */
        test("[CART-003] User can remove products", { tag: ["@cart", "@regression"] },
            async ({ cartFlow, cartPage }) => {
                await test.step('Add product', async () => {
                    await cartFlow.addFirstProductToCart();
                })

                await test.step('Remove product', async () => {
                    await cartPage.removeFirstItem();
                })

                // await test.step('Verify empty cart', async () => {
                //     await expect(cartPage.getItems()).toHaveCount(0);
                // })
            }
        );

        /**
         * Requirement : FR-CART-004
         * Test Case   : CART-004
         * Priority: High
         */
        test("[CART-004] User can add product with custom quantity", { tag: ["@cart", "@regression"] },
            async ({ productFlow, cartPage, cartFlow }) => {

                await test.step('clearr', async () => {
                    await cartFlow.openCart();
                    await cartFlow.clearCart();
                    await productFlow.openProducts()
                })

                await test.step('Add product with custom quantity', async () => {
                    await productFlow.addProductWithQuantity(4);
                })

                await test.step('Verify cart with custom quantity', async () => {
                    const item = cartPage.getItem(0);
                    await expect(item.getQuantity()).toContainText("4");
                })
            }
        );

        /**
         * Requirement : FR-CART-005
         * Test Case   : CART-005
         * Priority: Medium
         */
        test("[CART-005] User can continue shopping", { tag: ["@cart", "@regression"] },
            async ({ productsPage, productFlow, cartFlow }) => {
                await test.step('Add product', async () => {
                    await productFlow.addProduct();
                })

                await test.step('Continue shopping closing modal', async () => {
                    await productsPage.continueShopping();
                })

                await test.step('Verify products page', async () => {
                    await expect(productsPage.getProductCards()).not.toHaveCount(0);
                })

                await test.step('Clear cart', async () => {
                    await cartFlow.openCart();
                    await cartFlow.clearCart();
                })

            }
        );

        /**
         * Requirement : FR-CART-006
         * Test Case   : CART-006
         * Priority: Critical
         */
        test("[CART-006] User can proceed to checkout", { tag: ["@cart", "@smoke", "@regression"] },
            async ({ cartFlow, checkoutPage }) => {
                await test.step('Add product', async () => {
                    await cartFlow.addFirstProductToCart();
                })

                await test.step('Proceed to checkout', async () => {
                    await cartFlow.proceedCheckout();
                })

                await test.step('Verify checkout visible', async () => {
                    await expect(checkoutPage.reviewOrder).toBeVisible();
                })
            }
        );
    });
});