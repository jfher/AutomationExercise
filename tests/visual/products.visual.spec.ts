import { test } from '@fixtures/test.fixture';

test.describe('Products Visual Module', () => {
    test('[VISUAL-003] Products page should match baseline', { tag: ['@visual'] },
        async ({ productsPage, visual }) => {
            await productsPage.open();
            await visual.comparePage('products-page.png');
        }
    );
});