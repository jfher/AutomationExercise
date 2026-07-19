import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '@core/pages/base-page';
import { HeaderComponent } from '@components/header-component';
import { User } from '@models/user';

export class RegisterPage extends BasePage {
    readonly header: HeaderComponent;

    private readonly nameInput: Locator;
    private readonly emailInput: Locator;
    private readonly signupButton: Locator;
    private readonly signupErrorMessage: Locator;

    // account information
    private readonly nameRegisterInput: Locator;
    private readonly emailRegisterInput: Locator;
    private readonly passwordInput: Locator;
    private readonly dayOfBirthSelect: Locator;
    private readonly monthOfBirthSelect: Locator;
    private readonly yearOfBirthSelect: Locator;

    // address information
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly companyInput: Locator;
    private readonly addressInput: Locator;
    private readonly address2Input: Locator;
    private readonly countrySelect: Locator;
    private readonly stateInput: Locator;
    private readonly cityInput: Locator;
    private readonly zipCodeInput: Locator;
    private readonly mobileNumberInput: Locator;
    private readonly createAccountButton: Locator;

    constructor(page: Page) {
        super(page);
        this.header = new HeaderComponent(page);
        this.nameInput = page.locator("input[data-qa='signup-name']");
        this.emailInput = page.locator("input[data-qa='signup-email']");
        this.signupButton = page.locator("button[data-qa='signup-button']");
        this.signupErrorMessage = page.locator("form[action='/signup'] p");

        this.nameRegisterInput = page.locator("input[data-qa='name']");
        this.emailRegisterInput = page.locator("input[data-qa='email']");
        this.passwordInput = page.locator("input[data-qa='password']");
        this.dayOfBirthSelect = page.locator("select[data-qa='days']");
        this.monthOfBirthSelect = page.locator("select[data-qa='months']");
        this.yearOfBirthSelect = page.locator("select[data-qa='years']");

        this.firstNameInput = page.locator("input[data-qa='first_name']");
        this.lastNameInput = page.locator("input[data-qa='last_name']");
        this.companyInput = page.locator("input[data-qa='company']");
        this.addressInput = page.locator("input[data-qa='address']");
        this.address2Input = page.locator("input[data-qa='address2']");
        this.countrySelect = page.locator("select[data-qa='country']");
        this.stateInput = page.locator("input[data-qa='state']");
        this.cityInput = page.locator("input[data-qa='city']");
        this.zipCodeInput = page.locator("input[data-qa='zipcode']");
        this.mobileNumberInput = page.locator("input[data-qa='mobile_number']");
        this.createAccountButton = page.locator("button[data-qa='create-account']");
    }

    async open(): Promise<void> {
        await this.navigate('/signup');
    }

    async enterName(name: string): Promise<void> {
        await this.nameInput.fill(name);
    }

    async enterEmail(email: string): Promise<void> {
        await this.emailInput.fill(email);
    }

    async clickSignup(): Promise<void> {
        await this.signupButton.click();
    }

    async fillAccountInformation(user: User): Promise<void> {
        await this.passwordInput.fill(user.password);
        await this.dayOfBirthSelect.selectOption(user.dayOfBirth);
        await this.monthOfBirthSelect.selectOption(user.monthOfBirth);
        await this.yearOfBirthSelect.selectOption(user.yearOfBirth);
    }

    async fillAddressInformation(user: User): Promise<void> {
        await this.firstNameInput.fill(user.addressInformation.firstName);
        await this.lastNameInput.fill(user.addressInformation.lastName);
        await this.companyInput.fill(user.addressInformation.company ?? '');
        await this.addressInput.fill(user.addressInformation.address);
        await this.address2Input.fill(user.addressInformation.address2 ?? '');
        await this.countrySelect.selectOption(user.addressInformation.country);
        await this.stateInput.fill(user.addressInformation.state);
        await this.cityInput.fill(user.addressInformation.city);
        await this.zipCodeInput.fill(user.addressInformation.zipCode);
        await this.mobileNumberInput.fill(user.addressInformation.mobileNumber);
    }

    async clickCreateAccount(): Promise<void> {
        await this.createAccountButton.click();
    }

    getSignupErrorMessage(): Locator {
        return this.signupErrorMessage;
    }

    async isDisplayed(): Promise<void> {
        await expect(this.nameRegisterInput).toBeVisible();
        await expect(this.emailRegisterInput).toBeVisible();
    }
}