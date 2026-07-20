import { Locator, Page } from '@playwright/test';

import { BasePage } from '@core/pages/base-page';

export class ProductDetailsPage extends BasePage {

    private readonly productName: Locator;
    private readonly productPrice: Locator;
    private readonly availability: Locator;
    private readonly category: Locator;
    private readonly brand: Locator;

    constructor(page: Page) {
        super(page);
        this.productName = page.locator('.product-information h2');
        this.productPrice = page.locator('.product-information span span');
        this.availability = page.locator('.product-information p').filter({ hasText: 'Availability' });
        this.category = page.locator('.product-information p').filter({ hasText: 'Category' });
        this.brand = page.locator('.product-information p').filter({ hasText: 'Brand' });
    }

    getProductName(): Locator {
        return this.productName;
    }

    getProductPrice(): Locator {
        return this.productPrice;
    }

    getAvailability(): Locator {
        return this.availability;
    }

    getCategory(): Locator {
        return this.category;
    }

    getBrand(): Locator {
        return this.brand;
    }
}