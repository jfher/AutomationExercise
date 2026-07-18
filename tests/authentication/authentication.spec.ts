import { test } from '@fixtures/test.fixture';

test.describe('Authentication', { tag: ['@smoke', '@authentication'] }, () => {

    test('Registered user can login', async ({ authenticationFlow, validUser }) => {
        await authenticationFlow.login(validUser);
    });
});