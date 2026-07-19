import { User } from '@models/user';
import { AccountCreatedPage } from '@pages/accountCreated-page';
import { AccountDeletedPage } from '@pages/accountDeleted-page';
import { RegisterPage } from '@pages/register-page';

export class RegistrationFlow {
    constructor(
        private readonly registerPage: RegisterPage,
        private readonly accountDeletedPage: AccountDeletedPage,
        private readonly createdAccountPage: AccountCreatedPage
    ) { }

    async signup(user: User): Promise<void> {
        await this.registerPage.open();
        await this.registerPage.enterName(user.name);
        await this.registerPage.enterEmail(user.email);
        await this.registerPage.clickSignup();
    }

    async createAccount(user: User): Promise<void> {
        await this.registerPage.fillAccountInformation(user);
        await this.registerPage.fillAddressInformation(user);
        await this.registerPage.clickCreateAccount();
    }

    async deleteAccount(): Promise<void> {
        await this.registerPage.header.deleteAccount();
    }

    async continueToMainPageFromDeleted(): Promise<void> {
        await this.accountDeletedPage.continue();
    }

    async continueToMainPageFromCreated(): Promise<void> {
        await this.createdAccountPage.continue();
    }
}