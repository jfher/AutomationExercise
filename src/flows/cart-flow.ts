import { CartPage } from "@pages/cart-page";
import { ProductsPage } from "@pages/products-page";

export class CartFlow {

    constructor(
        private readonly productsPage: ProductsPage,
        private readonly cartPage: CartPage
    ) { }

    async addFirstProductToCart(): Promise<void> {
        await this.productsPage.open();
        await this.clearCart();
        await this.productsPage.addFirstProduct();
        await this.productsPage.viewCartModal();
    }

    async openCart(): Promise<void> {
        await this.cartPage.open();
    }

    async proceedCheckout(): Promise<void> {
        await this.cartPage.proceedToCheckout();
    }

    async clearCart(): Promise<void> {
        if (await this.cartPage.getItems().count() > 0) {
            await this.cartPage.clearCart();
        }
    }
}