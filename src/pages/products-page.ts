import { Locator, Page } from '@playwright/test';

import { BasePage } from '@core/pages/base-page';
import { ProductCardComponent } from '@components/product-card-component';
import { SidebarComponent } from '@components/sidebar-component';

export class ProductsPage extends BasePage {

    readonly sidebarComponent: SidebarComponent;
    private readonly productCards: Locator;
    private readonly searchInput: Locator;
    private readonly searchButton: Locator;
    private readonly searchedProductsTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.sidebarComponent = new SidebarComponent(page);
        this.productCards = page.locator('.features_items .col-sm-4');
        this.searchInput = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');
        this.searchedProductsTitle = page.locator('.features_items h2.title');
    }

    async open(): Promise<void> {
        await this.navigate('/products');
    }

    async search(product: string): Promise<void> {
        await this.searchInput.fill(product);
        await this.searchButton.click();
    }

    async selectCategory(category: string, subCategory: string): Promise<void> {
        await this.sidebarComponent.selectCategory(category, subCategory);
    }

    getCategoryTitle(): Locator {
        return this.page.locator(".features_items .title");
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

    getSearchedProductsTitle(): Locator {
        return this.searchedProductsTitle;
    }

}