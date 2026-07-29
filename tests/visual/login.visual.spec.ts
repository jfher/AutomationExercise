import { test } from '@fixtures/test.fixture';

test.describe('Login Visual Module', () => {
    test('[VISUAL-002] Login page should match baseline', { tag: ['@visual'] },
        async ({ loginPage, visual }) => {
            await loginPage.open();
            await visual.comparePage('login-page.png');
        }
    );
});