import { Locator, Page } from "@playwright/test";
import { BasePage } from "@core/pages/base-page";

export class CheckoutPage extends BasePage {
    readonly addressDetails: Locator;
    readonly reviewOrder: Locator;

    constructor(page: Page) {
        super(page);
        this.addressDetails = page.locator("#address_delivery");
        this.reviewOrder = page.locator("#cart_info");
    }

}