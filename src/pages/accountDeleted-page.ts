import { BasePage } from "@core/pages/base-page";
import { Locator, Page } from "@playwright/test";

export class AccountDeletedPage extends BasePage {

    private readonly title: Locator;
    private readonly messageText: Locator;
    private readonly messageText2: Locator;
    private readonly continueButton: Locator;

    constructor(page: Page) {
        super(page);
        this.title = this.page.locator('h2[data-qa="account-deleted"] b');
        this.messageText = this.page.locator('p').first();
        this.messageText2 = this.page.locator('p').nth(1);
        this.continueButton = this.page.locator('a[data-qa="continue-button"]');
    }

    getTitle(): Locator {
        return this.title;
    }

    getMessageText(): Locator {
        return this.messageText;
    }

    getMessageText2(): Locator {
        return this.messageText2;
    }

    async continue(): Promise<void> {
        await this.continueButton.click();
    }
}