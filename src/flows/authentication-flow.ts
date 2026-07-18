import { LoginPage } from '@pages/login-page';
import { User } from '@models/user';

export class AuthenticationFlow {
    constructor(
        private readonly loginPage: LoginPage
    ) { }

    async login(user: User): Promise<void> {
        await this.loginPage.navigate('/login');
        await this.loginPage.emailInput.fill(user.email);
        await this.loginPage.passwordInput.fill(user.password);
        await this.loginPage.loginButton.click();
    }
}