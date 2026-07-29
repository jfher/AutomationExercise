import { test, expect } from "@fixtures/test.fixture";

test.describe("[A11Y] Home Page Accessibility Tests", () => {
    test("[A11Y-001] Home page accessibility", { tag: ["@a11y", "@smoke"] },
        async ({ page, axe }) => {
            await page.goto("/");
            const results = await axe.analyze([
                "#google_ads",
                ".chat-widget"
            ]);
            if (results.violations.length > 0) {
                console.log('Accessibility Violations found:');
                results.violations.forEach(violation => {
                    console.log(`- ${violation.id}: ${violation.description}`);
                    console.log(` Help: ${violation.helpUrl}`);
                    console.log(' Nodes:', violation.nodes.map(node => node.html).
                        join('\n'));
                    console.log('---');
                });
            }
            expect(results.violations.length).toBeGreaterThan(0);
        }
    );
})

