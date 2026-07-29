import AxeBuilder from "@axe-core/playwright";
import { Page } from "@playwright/test";

export class AxeHelper {

    constructor(
        private readonly page: Page
    ) { }

    async analyze(exclude: string[] = []) {
        let builder = new AxeBuilder({ page: this.page }).withTags(['wcag21aa', 'wcag21a', 'wcag2a']);

        exclude.forEach(selector => {
            builder = builder.exclude(selector);
        });

        return builder.analyze();
        // return new AxeBuilder({ page: this.page }).analyze();
    }
}