import { Locator, Page } from "@playwright/test";
import { BasePage } from "@core/pages/base-page";
import { CreditCard } from "@models/payment";

export class CheckoutPage extends BasePage {
    readonly addressDetails: Locator;
    readonly reviewOrder: Locator;
    readonly placeOrderButton: Locator;

    constructor(page: Page) {
        super(page);
        this.addressDetails = page.locator("#address_delivery");
        this.reviewOrder = page.locator("#cart_info");
        this.placeOrderButton = page.locator('[href="/payment"]');
    }

    async proceedToPayment(): Promise<void> {
        await this.placeOrderButton.click();
    }

    getOrderProducts(): Locator {
        return this.reviewOrder.locator("tbody tr");
    }
}