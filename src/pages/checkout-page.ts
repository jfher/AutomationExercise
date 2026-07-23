import { Locator, Page } from "@playwright/test";
import { BasePage } from "@core/pages/base-page";
import { CheckoutItemComponent } from "@components/checkout-item-component";

export class CheckoutPage extends BasePage {
    readonly addressDetails: Locator;
    readonly billingDetails: Locator;
    readonly reviewOrder: Locator;
    readonly placeOrderButton: Locator;

    constructor(page: Page) {
        super(page);
        this.addressDetails = page.locator("#address_delivery");
        this.billingDetails = page.locator("#address_invoice");
        this.reviewOrder = page.locator("#cart_info");
        this.placeOrderButton = page.locator('[href="/payment"]');
    }

    async proceedToPayment(): Promise<void> {
        await this.placeOrderButton.click();
    }

    getOrderProducts(): Locator {
        return this.reviewOrder.locator("tbody tr");
    }

    getOrderItem(index: number): CheckoutItemComponent {
        return new CheckoutItemComponent(
            this.page,
            this.reviewOrder.locator("tbody tr").nth(index)
        );
    }

    getAddressFullName(): Locator {
        return this.addressDetails.locator('.address_lastname')
    }

    getAddressCountry(): Locator {
        return this.addressDetails.locator('.address_country_name')
    }

    getAddressCompany(): Locator {
        return this.addressDetails.locator('.address_address1').first();
    }

    getAddressAddress(): Locator {
        return this.addressDetails.locator('.address_address1').nth(1);
    }

    getAddressAddress2(): Locator {
        return this.addressDetails.locator('.address_address1').last();
    }

    getAddressPhone(): Locator {
        return this.addressDetails.locator('.address_phone')
    }

    getBillingFullName(): Locator {
        return this.billingDetails.locator('.address_lastname')
    }

    getBillingCountry(): Locator {
        return this.billingDetails.locator('.address_country_name')
    }

    getBillingCompany(): Locator {
        return this.billingDetails.locator('.address_address1').first();
    }

    getBillingAddress(): Locator {
        return this.billingDetails.locator('.address_address1').nth(1);
    }

    getBillingAddress2(): Locator {
        return this.billingDetails.locator('.address_address1').last();
    }

    getBillingPhone(): Locator {
        return this.billingDetails.locator('.address_phone')
    }
}