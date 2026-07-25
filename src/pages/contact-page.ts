import { BasePage } from "@core/pages/base-page";
import { Locator, Page } from "@playwright/test";

export class ContactPage extends BasePage {

    readonly title: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly subjectInput: Locator;
    readonly messageInput: Locator;
    readonly uploadFileInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        super(page);
        this.title = page.getByRole('heading', { level: 2, name: 'Contact Us' });
        this.nameInput = page.locator('[data-qa=name]');
        this.emailInput = page.locator('[data-qa=email]');
        this.subjectInput = page.locator('[data-qa=subject]');
        this.messageInput = page.locator('[data-qa=message]');
        this.uploadFileInput = page.locator('input[name="upload_file"]');
        this.submitButton = page.locator('[data-qa=submit-button]');
    }

    async open(): Promise<void> {
        await super.navigate('/contact_us');
    }

    async uploadFile(path: string) {
        await this.uploadFileInput.setInputFiles(path);
    }
}