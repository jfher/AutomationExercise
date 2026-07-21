import { Locator, Page } from "@playwright/test";

import { BaseComponent } from "@core/components/base-component";

export class ModalComponent extends BaseComponent {

    private readonly title: Locator;
    private readonly message: Locator;
    private readonly viewCartLink: Locator;
    private readonly continueButton: Locator;

    constructor(page: Page) {
        super(page, page.locator("#cartModal"));
        this.title = page.locator(".modal-title");
        this.message = page.locator(".modal-body");
        this.viewCartLink = page.getByRole("link", { name: "View Cart" });
        this.continueButton = page.locator(".close-modal");
    }

    async viewCart(): Promise<void> {
        await this.viewCartLink.click();
    }

    async continueShopping(): Promise<void> {
        await this.continueButton.click();
    }

    getMessage(): Locator {
        return this.message;
    }

    getTitle(): Locator {
        return this.title;
    }
}