import { ProductsPage } from '@pages/products-page';

export class ProductFlow {

    constructor(
        private readonly productsPage: ProductsPage
    ) { }

    async openProducts(): Promise<void> {
        await this.productsPage.open();
    }
}