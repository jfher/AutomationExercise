import { Locator, Page } from '@playwright/test';
import { BasePage } from '@core/pages/base-page';

export class LoginPage extends BasePage {
    private readonly signupLoginLink: Locator;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly loggedUserLabel: Locator;

    constructor(page: Page) {
        super(page);
        this.signupLoginLink = page.locator("a[href='/login']");
        this.emailInput = page.locator("input[data-qa='login-email']");
        this.passwordInput = page.locator("input[data-qa='login-password']");
        this.loginButton = page.locator("button[data-qa='login-button']");
        this.loggedUserLabel = page.locator("a b");
    }

    async open(): Promise<void> {
        await this.navigate('/login');
    }

    async clickSignupLogin(): Promise<void> {
        await this.signupLoginLink.click();
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

    async getLoggedUsername(): Promise<string> {
        return (await this.loggedUserLabel.textContent())?.trim() ?? '';
    }
}