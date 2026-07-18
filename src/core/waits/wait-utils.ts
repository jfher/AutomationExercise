import { Locator, Page } from '@playwright/test';

export class WaitUtils {
    static async forUrl(page: Page, url: RegExp | string): Promise<void> {
        await page.waitForURL(url);
    }

    static async forLoad(page: Page): Promise<void> {
        await page.waitForLoadState('load');
    }

    static async forNetwork(page: Page): Promise<void> {
        await page.waitForLoadState('networkidle');
    }

    static async forVisible(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible' });
    }
}