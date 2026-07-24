import { CheckoutPage } from "@pages/checkout-page";
import { CartFlow } from "./cart-flow"

export class CheckoutFlow {

    constructor(
        private readonly cartFlow: CartFlow,
        private readonly checkoutPage: CheckoutPage,
    ) { }

    async completeCheckout(): Promise<void> {
        await this.cartFlow.addFirstProductToCart();
        await this.cartFlow.proceedCheckout();
    }

    async addComment(comment: string): Promise<void> {
        await this.checkoutPage.enterComment(comment);
    }

    async clearCart(): Promise<void> {
        await this.cartFlow.openCart();
        await this.cartFlow.clearCart();
    }

}