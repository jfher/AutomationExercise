import { Locator, Page } from "@playwright/test";

import { BaseComponent } from "@core/components/base-component";

export class SidebarComponent extends BaseComponent {

    private readonly categoriesContainer: Locator;
    private readonly brandsContainer: Locator;

    constructor(page: Page) {
        super(page, page.locator(".left-sidebar"));
        this.categoriesContainer = page.locator(".category-products");
        this.brandsContainer = page.locator(".brands_products");
    }

    async selectCategory(category: string, subCategory: string): Promise<void> {
        await this.categoriesContainer.locator(`a[href='#${category}']`).click();
        await this.categoriesContainer.getByRole('link').filter({ hasText: subCategory }).click();
    }

    getCategoriesContainer(): Locator {
        return this.categoriesContainer;
    }

    getBrandsContainer(): Locator {
        return this.brandsContainer;
    }
}