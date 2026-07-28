import { DeleteAccountRequest } from "@api/models/login";
import { expect, test } from "@fixtures/test.fixture";
import { User } from "@models/user";

test.describe('Integration UI + API', () => {
    test.describe('Positive Scenarios', async () => {
        test("[INT-001] User created by API can login through UI", { tag: ["@integration", "@smoke"] },
            async ({ authApi, authenticationFlow, loginPage, userApi }) => {
                await authApi.createAccount(userApi);
                await authenticationFlow.login({ email: userApi.email, password: userApi.password } as User);
                await expect(loginPage.header.getLoggedUser()).toBeVisible();
                await expect(loginPage.header.getLoggedUser()).toContainText(userApi.name);
                await authApi.deleteAccount({ email: userApi.email, password: userApi.password } as DeleteAccountRequest);
            });
    })
})