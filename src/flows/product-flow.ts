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

    async openFirstProductDetails(): Promise<void> {
        await this.productsPage.open();
        await this.productsPage.getProductCard(0).openDetails();
    }

    async filterByCategory(category: string, subCategory: string): Promise<void> {
        await this.productsPage.open();
        await this.productsPage.selectCategory(category, subCategory);
    }

    async filterByBrand(brand: string): Promise<void> {
        await this.productsPage.open();
        await this.productsPage.selectBrand(brand);
    }
}