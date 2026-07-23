import { BasePage } from "@core/pages/base-page";
import { Locator, Page } from "@playwright/test";

export class PaymentDonePage extends BasePage {

    private readonly title: Locator;
    private readonly messageText: Locator;
    private readonly downloadInvoiceButton: Locator;
    private readonly continueButton: Locator;

    constructor(page: Page) {
        super(page);
        this.title = this.page.locator('h2[data-qa="order-placed"]');
        this.messageText = this.page.locator('p').first();
        this.downloadInvoiceButton = this.page.locator('.check_out');
        this.continueButton = this.page.locator('a[data-qa="continue-button"]');
    }

    getTitle(): Locator {
        return this.title;
    }

    getMessageText(): Locator {
        return this.messageText;
    }

    async downloadInvoice(): Promise<void> {
        await this.downloadInvoiceButton.click();
    }

    async continue(): Promise<void> {
        await this.continueButton.click();
    }
}