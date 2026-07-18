import { Locator, Page } from '@playwright/test';

import { BasePage } from '@core/pages/base-page';

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    readonly signupLoginLink = this.page.locator("a[href='/login']");

    readonly emailInput = this.page.locator(
        "input[data-qa='login-email']"
    );

    readonly passwordInput = this.page.locator(
        "input[data-qa='login-password']"
    );

    readonly loginButton = this.page.locator(
        "button[data-qa='login-button']"
    );

    readonly loggedUserLabel = this.page.locator("a b");
}