import { Locator, Page } from "@playwright/test";
import { BasePage } from "@core/pages/base-page";
import { CreditCard } from "@models/payment";

export class PaymentPage extends BasePage {
    readonly title: Locator;
    readonly cardName: Locator;
    readonly cardNumber: Locator;
    readonly cvc: Locator;
    readonly expiryMonth: Locator;
    readonly year: Locator;
    readonly confirmButton: Locator;

    constructor(page: Page) {
        super(page);
        this.title = page.locator('.heading');
        this.cardName = page.locator("[data-qa='name-on-card']");
        this.cardNumber = page.locator("[data-qa='card-number']");
        this.cvc = page.locator("[data-qa='cvc']");
        this.expiryMonth = page.locator("[data-qa='expiry-month']");
        this.year = page.locator("[data-qa='expiry-year']");
        this.confirmButton = page.locator("[data-qa='pay-button']");
    }


    getTitle(): Locator {
        return this.title;
    }

    async open(): Promise<void> {
        await this.navigate("/payment");
    }

    async fillCardDetails(card: CreditCard) {
        await this.cardName.fill(card.cardName);
        await this.cardNumber.fill(card.cardNumber);
        await this.cvc.fill(card.cvc);
        await this.expiryMonth.fill(card.expiryMonth);
        await this.year.fill(card.expiryYear);
    }

    async clickConfirmButton() {
        await this.confirmButton.click();
    }
}