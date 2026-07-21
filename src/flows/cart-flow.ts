import { CartPage } from "@pages/cart-page";
import { ProductsPage } from "@pages/products-page";

export class CartFlow {

    constructor(
        private readonly productsPage: ProductsPage,
        private readonly cartPage: CartPage
    ) { }

    async addFirstProductToCart(): Promise<void> {
        await this.productsPage.open();
        await this.productsPage.addFirstProduct();
        await this.productsPage.viewCartModal();
    }

    async openCart(): Promise<void> {
        await this.cartPage.open();
    }
}