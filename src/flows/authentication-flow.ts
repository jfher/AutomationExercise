import { LoginPage } from '@pages/login-page';
import { User } from '@models/user';

export class AuthenticationFlow {
    constructor(
        private readonly loginPage: LoginPage
    ) { }

    async login(user: User): Promise<void> {
        await this.loginPage.open();
        await this.loginPage.enterEmail(user.email);
        await this.loginPage.enterPassword(user.password);
        await this.loginPage.submitLogin();
    }
}