import { Page } from '@playwright/test';
import { BasePage } from '@core/pages/base-page';

export class LoginPage extends BasePage {
    private readonly signupLoginLink = this.page.locator("a[href='/login']");
    private readonly emailInput = this.page.locator("input[data-qa='login-email']");
    private readonly passwordInput = this.page.locator("input[data-qa='login-password']");
    private readonly loginButton = this.page.locator("button[data-qa='login-button']");
    private readonly loggedUserLabel = this.page.locator('a b');

    constructor(page: Page) {
        super(page);
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

    async submitLogin(): Promise<void> {
        await this.loginButton.click();
    }

    async getLoggedUsername(): Promise<string> {
        return (await this.loggedUserLabel.textContent()) ?? '';
    }
}