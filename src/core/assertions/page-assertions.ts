import { expect, Locator, Page } from '@playwright/test';

export class PageAssertions {
    static async hasTitle(page: Page, title: RegExp | string): Promise<void> {
        await expect(page).toHaveTitle(title);
    }

    static async hasUrl(page: Page, url: RegExp | string): Promise<void> {
        await expect(page).toHaveURL(url);
    }

    static async isVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }

    static async containsText(locator: Locator, text: string): Promise<void> {
        await expect(locator).toContainText(text);
    }

    static async hasText(locator: Locator, text: string): Promise<void> {
        await expect(locator).toHaveText(text);
    }
}