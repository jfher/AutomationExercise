import { Locator, Page } from '@playwright/test';
import { BasePage } from '@core/pages/base-page';
import { HeaderComponent } from '@components/header-component';
import { SidebarComponent } from '@components/sidebar-component';

export class HomePage extends BasePage {
    readonly header: HeaderComponent;
    readonly sidebar: SidebarComponent;
    readonly productCards: Locator;

    constructor(page: Page) {
        super(page);
        this.header = new HeaderComponent(page);
        this.sidebar = new SidebarComponent(page);
        this.productCards = page.locator('.features_items .col-sm-4');
    }

    async open(): Promise<void> {
        await this.navigate('/');
    }
}