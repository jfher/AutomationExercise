import { Locator, Page } from "@playwright/test";
import { BaseComponent } from "@core/components/base-component";

export class CheckoutItemComponent extends BaseComponent {

    constructor(page: Page, root: Locator) {
        super(page, root);
    }

    getImage(): Locator {
        return this.root.locator(".cart_product");
    }

    getDescription(): Locator {
        return this.root.locator(".cart_description");
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
}