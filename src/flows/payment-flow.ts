import { PaymentPage } from "@pages/payment-page";
import { CheckoutFlow } from "./checkout-flow";
import { users } from '@data/static/users';
import { CreditCardBuilder } from "@data/builders/creditCard-builder";
import { CheckoutPage } from "@pages/checkout-page";

export class PaymentFlow {

    constructor(
        private readonly paymentPage: PaymentPage,
        private readonly checkoutPage: CheckoutPage,
        private readonly checkoutFlow: CheckoutFlow
    ) { }

    async paymentConfirmation(): Promise<void> {
        await this.checkoutFlow.completeCheckout(users.staticUser);
        await this.checkoutPage.proceedToPayment();
        await this.paymentPage.fillCardDetails(new CreditCardBuilder().withFakerCreditCard().build());
    }

    async openPayment(): Promise<void> {
        await this.paymentPage.open();
    }

    async proceedInvoice(): Promise<void> {
        await this.paymentPage.clickConfirmButton();
    }
}