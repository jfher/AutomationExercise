import { Locator, Page } from "@playwright/test";

import { BaseComponent } from "@core/components/base-component";

export class HeaderComponent extends BaseComponent {

    private readonly loggedUserLabel: Locator;
    private readonly logoutLink: Locator;

    constructor(page: Page) {
        super(page, page.locator("header"));
        this.loggedUserLabel = page.locator("a b");
        this.logoutLink = page.locator("a[href='/logout']");
    }

    loggedUser(): Locator {
        return this.loggedUserLabel;
    }

    async logout() {
        await this.logoutLink.click();
    }

}