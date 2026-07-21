import { Locator, Page } from '@playwright/test';

import { BasePage } from '@core/pages/base-page';
import { ProductCardComponent } from '@components/product-card-component';
import { SidebarComponent } from '@components/sidebar-component';
import { ModalComponent } from '@components/modal-component';

export class ProductsPage extends BasePage {

    readonly sidebarComponent: SidebarComponent;
    readonly modalComponent: ModalComponent;
    private readonly productCards: Locator;
    private readonly searchInput: Locator;
    private readonly searchButton: Locator;
    private readonly searchedProductsTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.sidebarComponent = new SidebarComponent(page);
        this.modalComponent = new ModalComponent(page);
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

    async selectBrand(brand: string): Promise<void> {
        await this.sidebarComponent.selectBrand(brand);
    }

    async addFirstProduct(): Promise<void> {
        await this.getProductCard(0).addToCart();
    }

    async continueShopping(): Promise<void> {
        await this.modalComponent.continueShopping();
    }

    async viewCart(): Promise<void> {
        await this.page.locator("a[href='/view_cart']").click();
    }

    async viewCartModal(): Promise<void> {
        await this.modalComponent.viewCart();
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