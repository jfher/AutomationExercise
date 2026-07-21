import { Locator, Page } from '@playwright/test';
import { BaseComponent } from '@core/components/base-component';

export class ProductCardComponent extends BaseComponent {

    private readonly name: Locator;
    private readonly price: Locator;
    private readonly detailsProductButton: Locator;
    private readonly addToCartButton: Locator;

    constructor(page: Page, root: Locator) {
        super(page, root);
        this.name = root.locator('.productinfo p');
        this.price = root.locator('.productinfo h2');
        this.detailsProductButton = root.locator("a[href*='/product_details/']");
        this.addToCartButton = root.locator("a.add-to-cart").first();
    }

    getName(): Locator {
        return this.name;
    }

    getPrice(): Locator {
        return this.price;
    }

    getViewProductButton(): Locator {
        return this.detailsProductButton;
    }

    async addToCart(): Promise<void> {
        await this.addToCartButton.click();
    }

    async openDetails(): Promise<void> {
        await this.detailsProductButton.click();
    }

}