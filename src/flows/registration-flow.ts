import { User } from '@models/user';
import { RegisterPage } from '@pages/register-page';

export class RegistrationFlow {
    constructor(
        private readonly registerPage: RegisterPage
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
}