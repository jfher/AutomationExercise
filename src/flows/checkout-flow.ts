import { CheckoutPage } from "@pages/checkout-page";
import { AuthenticationFlow } from "./authentication-flow";
import { CartFlow } from "./cart-flow";
import { User } from "@models/user";

export class CheckoutFlow {

    constructor(
        private readonly authenticationFlow: AuthenticationFlow,
        private readonly cartFlow: CartFlow,
        private readonly checkoutPage: CheckoutPage,
        // private readonly paymentPage: PaymentPage
    ) { }

    async completeCheckout(user: User): Promise<void> {
        await this.authenticationFlow.login(user);
        await this.cartFlow.addFirstProductToCart();
        await this.cartFlow.proceedCheckout();
    }

    async addComment(comment: string): Promise<void> {
        await this.checkoutPage.enterComment(comment);
    }

}