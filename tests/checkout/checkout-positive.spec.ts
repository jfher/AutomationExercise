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

        /**
         * Requirement : FR-CHK-002
         * Test Case   : CHK-002
         * Priority: High
         */
        test("[CHK-002] Checkout delivery address should match the registration user data", { tag: ["@checkout", "@regression"] },
            async ({ checkoutFlow, checkoutPage, staticUser }) => {

                await test.step("Access to checkout page", async () => {
                    await checkoutFlow.completeCheckout(staticUser);
                });

                await test.step("Verify delivery address data", async () => {
                    await expect(checkoutPage.getAddressFullName()).toContainText(`${staticUser.addressInformation.firstName} ${staticUser.addressInformation.lastName}`);
                    await expect(checkoutPage.getAddressAddress()).toHaveText(staticUser.addressInformation.address);
                    await expect(checkoutPage.getAddressAddress2()).toHaveText(staticUser.addressInformation.address2 || '');
                    await expect(checkoutPage.getAddressCompany()).toHaveText(staticUser.addressInformation.company || '');
                    await expect(checkoutPage.getAddressCountry()).toHaveText(staticUser.addressInformation.country);
                    await expect(checkoutPage.getAddressPhone()).toHaveText(staticUser.addressInformation.mobileNumber);
                });
            }
        );

        /**
         * Requirement : FR-CHK-003
         * Test Case   : CHK-003
         * Priority: High
         */
        test("[CHK-003] Checkout billing address should match the registration user data", { tag: ["@checkout", "@regression"] },
            async ({ checkoutFlow, checkoutPage, staticUser }) => {

                await test.step("Access to checkout page", async () => {
                    await checkoutFlow.completeCheckout(staticUser);
                });

                await test.step("Verify billing address data", async () => {
                    await expect(checkoutPage.getBillingFullName()).toContainText(`${staticUser.addressInformation.firstName} ${staticUser.addressInformation.lastName}`);
                    await expect(checkoutPage.getBillingAddress()).toHaveText(staticUser.addressInformation.address);
                    await expect(checkoutPage.getBillingAddress2()).toHaveText(staticUser.addressInformation.address2 || '');
                    await expect(checkoutPage.getBillingCompany()).toHaveText(staticUser.addressInformation.company || '');
                    await expect(checkoutPage.getBillingCountry()).toHaveText(staticUser.addressInformation.country);
                    await expect(checkoutPage.getBillingPhone()).toHaveText(staticUser.addressInformation.mobileNumber);
                });
            }
        );

        /**
         * Requirement : FR-CHK-004
         * Test Case   : CHK-004
         * Priority: High
         */
        test("[CHK-004] Checkout review order should match the cart products", { tag: ["@checkout", "@regression"] },
            async ({ checkoutFlow, checkoutPage, staticUser }) => {

                await test.step("Access to checkout page", async () => {
                    await checkoutFlow.completeCheckout(staticUser);
                });

                await test.step("Verify products data", async () => {
                    await expect(checkoutPage.getOrderItem(0).getDescription()).toContainText("Blue Top");
                    await expect(checkoutPage.getOrderItem(0).getQuantity()).toContainText("1");
                    await expect(checkoutPage.getOrderItem(0).getPrice()).toContainText("500");
                    await expect(checkoutPage.getOrderItem(0).getTotal()).toContainText("500");
                });
            }
        );

    });
});