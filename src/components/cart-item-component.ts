import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "@core/components/base-component";

export class CartItemComponent extends BaseComponent {

    constructor(page: Page, root: Locator) {
        super(page, root);
    }

    getName(): Locator {
        return this.root.locator(".cart_description h4");
    }

    getPrice(): Locator {
        return this.root.locator(".cart_price");
    }

    getQuantity(): Locator {
        return this.root.locator(".cart_quantity");
    }

    getTotal(): Locator {
        return this.root.locator(".cart_total");
    }

    async remove(): Promise<void> {
        await this.root.locator(".cart_delete a").click();
    }
}