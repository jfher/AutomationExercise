import { Locator, Page } from "@playwright/test";
import { BasePage } from "@core/pages/base-page";
import { CartItemComponent } from "@components/cart-item-component";

export class CartPage extends BasePage {

    private readonly cartItems: Locator;
    private readonly checkoutButton: Locator;

    constructor(page: Page) {
        super(page);
        this.cartItems = page.locator("#cart_info_table tbody tr");
        this.checkoutButton = page.locator(".check_out");;
    }

    async open(): Promise<void> {
        await this.navigate("/view_cart");
    }

    async removeFirstItem(): Promise<void> {
        await this.getItem(0).remove();
    }

    async checkout(): Promise<void> {
        await this.checkoutButton.click();
    }

    getItems(): Locator {
        return this.cartItems;
    }

    getItem(index: number): CartItemComponent {
        return new CartItemComponent(
            this.page,
            this.cartItems.nth(index)
        );
    }
}