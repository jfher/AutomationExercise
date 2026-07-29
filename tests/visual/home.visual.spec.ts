import { test } from '@fixtures/test.fixture';

test.describe('Home Visual Module', () => {

    test('[VISUAL-001] Home page should match baseline', { tag: ['@visual'] },
        async ({ homePage, visual }) => {
            await homePage.open();
            await visual.comparePage('home-page.png');
        }
    );

});