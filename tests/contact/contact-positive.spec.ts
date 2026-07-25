import { expect, test } from "@fixtures/test.fixture"

test.describe('Contact Module', () => {

    test.describe('Positive Scenarios', () => {

        test('[CONTACT-001] User can open Contact Us page', { tag: ['@contact, @smoke, @regression'] },
            async ({ contactFlow, contactPage, page }) => {
                await test.step('Navigate to contact us page', async () => {
                    await contactFlow.openContact();
                })

                await test.step('Verify page url', async () => {
                    await expect(page).toHaveURL(/contact_us/);
                })

                await test.step('Verify page content', async () => {
                    await expect(contactPage.title).toBeVisible();
                    await expect(contactPage.nameInput).toBeVisible();
                    await expect(contactPage.emailInput).toBeVisible();
                    await expect(contactPage.subjectInput).toBeVisible();
                    await expect(contactPage.messageInput).toBeVisible();
                    await expect(contactPage.uploadFileButton).toBeVisible();
                    await expect(contactPage.submitButton).toBeVisible();
                })
            })
    })
})