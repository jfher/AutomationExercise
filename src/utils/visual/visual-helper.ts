import { expect, Locator, Page } from '@playwright/test';

export class VisualHelper {
    constructor(private readonly page: Page) { }

    async comparePage(name: string, options?: {
        fullPage?: boolean;
        maxDiffPixelRatio?: number;
    }) {
        await expect(this.page).toHaveScreenshot(name, {
            fullPage: options?.fullPage ?? true,
            animations: 'disabled',
            caret: 'hide',
            scale: 'css',
            maxDiffPixelRatio: options?.maxDiffPixelRatio ?? 0.01,
        });
    }

    async compareLocator(locator: Locator, name: string) {
        await expect(locator).toHaveScreenshot(name, {
            animations: 'disabled',
            caret: 'hide',
            scale: 'css',
            maxDiffPixelRatio: 0.01,
        });
    }
}