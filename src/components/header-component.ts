import { Locator, Page } from "@playwright/test";

import { BaseComponent } from "@core/components/base-component";

export class HeaderComponent extends BaseComponent {

    private readonly loggedUserLabel: Locator;
    private readonly logoutLink: Locator;
    private readonly loginLink: Locator;

    constructor(page: Page) {
        super(page, page.locator("header"));
        this.loggedUserLabel = page.locator("a b");
        this.logoutLink = page.locator("a[href='/logout']");
        this.loginLink = page.locator("a[href='/login']");
    }

    getLoggedUser(): Locator {
        return this.loggedUserLabel;
    }

    getLogoutLink(): Locator {
        return this.logoutLink;
    }

    getLoginLink(): Locator {
        return this.loginLink;
    }

    async logout(): Promise<void> {
        await this.logoutLink.click();
    }

}