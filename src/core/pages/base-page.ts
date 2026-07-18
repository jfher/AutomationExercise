import { Page } from '@playwright/test';

export abstract class BasePage {
    protected constructor(protected readonly page: Page) { }

    async navigate(path = ''): Promise<void> {
        await this.page.goto(path);
    }

    async reload(): Promise<void> {
        await this.page.reload();
    }

    async waitUntilLoaded(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
    }

    getPage(): Page {
        return this.page;
    }
}