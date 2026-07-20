import { Locator, Page } from '@playwright/test';

import { BasePage } from '@core/pages/base-page';
import { ProductCardComponent } from '@components/product-card-component';

export class ProductsPage extends BasePage {

    private readonly productCards: Locator;

    constructor(page: Page) {
        super(page);
        this.productCards = page.locator('.features_items .col-sm-4');
    }

    async open(): Promise<void> {
        await this.navigate('/products');
    }

    getProductCards(): Locator {
        return this.productCards;
    }

    getProductCard(index: number): ProductCardComponent {
        return new ProductCardComponent(
            this.page,
            this.productCards.nth(index)
        );
    }

}