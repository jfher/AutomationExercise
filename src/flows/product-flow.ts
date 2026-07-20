import { ProductsPage } from '@pages/products-page';

export class ProductFlow {

    constructor(
        private readonly productsPage: ProductsPage
    ) { }

    async openProducts(): Promise<void> {
        await this.productsPage.open();
    }

    async searchProduct(product: string): Promise<void> {
        await this.productsPage.open();
        await this.productsPage.search(product);
    }
}