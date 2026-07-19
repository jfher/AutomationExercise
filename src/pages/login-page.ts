import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '@core/pages/base-page';
import { HeaderComponent } from '@components/header-component';

export class LoginPage extends BasePage {
    readonly header: HeaderComponent;

    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly loginErrorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.header = new HeaderComponent(page);
        this.emailInput = page.locator("input[data-qa='login-email']");
        this.passwordInput = page.locator("input[data-qa='login-password']");
        this.loginButton = page.locator("button[data-qa='login-button']");
        this.loginErrorMessage = page.locator("form[action='/login'] p");
    }

    async open(): Promise<void> {
        await this.navigate('/login');
    }

    async enterEmail(email: string): Promise<void> {
        await this.emailInput.fill(email);
    }

    async enterPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    async clickLogin(): Promise<void> {
        await this.loginButton.click();
    }

    getLoginErrorMessage(): Locator {
        return this.loginErrorMessage;
    }

    async isDisplayed(): Promise<void> {
        await expect(this.emailInput).toBeVisible();
    }
}