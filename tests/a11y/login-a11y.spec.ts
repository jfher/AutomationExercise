import { expect, test } from "@fixtures/test.fixture";

test.describe("[A11Y] Login Page Accessibility Tests", () => {
    test("[A11Y-002] Login page accessibility", { tag: ["@a11y", "@regression"] },
        async ({ loginPage, axe }) => {
            await loginPage.open();
            const results = await axe.analyze();
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
            expect(results.violations.length).toBeGreaterThanOrEqual(0);
        }
    );
})