import { ContactModalMessages } from "@data/constants/contact-modal"
import { expect, test } from "@fixtures/test.fixture"

test.describe('Contact Module', () => {

    test.describe('Positive Scenarios', () => {

        /**
         * Requirement : FR-CONTACT-001
         * Test Case   : CONTACT-001
         * Priority: Medium
         */
        test('[CONTACT-001] User can open Contact Us page', { tag: ['@contact', '@smoke', '@regression'] },
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
                    await expect(contactPage.uploadFileInput).toBeVisible();
                    await expect(contactPage.submitButton).toBeVisible();
                })
            }
        )

        /**
         * Requirement : FR-CONTACT-002
         * Test Case   : CONTACT-002
         * Priority: Medium
         */
        test('[CONTACT-002] User can fill the contact form and submit it', { tag: ['@contact', '@smoke', '@regression'] },
            async ({ contactFlow, contactStatic, page }) => {

                await test.step('Navigate to contact us page', async () => {
                    await contactFlow.openContact();
                })

                await test.step('Fill contact form', async () => {
                    await contactFlow.fillContactForm(contactStatic)
                })

                await test.step('Send the form', async () => {
                    await contactFlow.submitForm();
                })
            }
        )

        /**
         * Requirement : FR-CONTACT-003
         * Test Case   : CONTACT-003
         * Priority: Low
         */
        test('[CONTACT-003] User can attach a fake file to the contact form', { tag: ['@contact', '@regression'] },
            async ({ contactFlow, contactStatic }) => {

                await test.step('Navigate to contact us page', async () => {
                    await contactFlow.openContact();
                })

                await test.step('Fill contact form', async () => {
                    await contactFlow.fillContactForm(contactStatic)
                })

                await test.step('Upload fake file', async () => {
                    await contactFlow.attachFakeFile('file1.txt');
                });

                await test.step('Verify uploaded file', async () => {
                    expect(await contactFlow.getUploadedFileCount()).toBe(1);

                    const file = await contactFlow.getUploadedFileInfo();
                    expect(file?.name).toBe('file1.txt');
                    expect(file?.type).toBe('text/plain');
                })
            }
        )

        /**
         * Requirement : FR-CONTACT-003
         * Test Case   : CONTACT-003
         * Priority: Low
         */
        test('[CONTACT-003.1] User can attach a file to the contact form', { tag: ['@contact', '@regression'] },
            async ({ contactFlow, contactStatic }) => {

                await test.step('Navigate to contact us page', async () => {
                    await contactFlow.openContact();
                })

                await test.step('Fill contact form', async () => {
                    await contactFlow.fillContactForm(contactStatic)
                })

                await test.step('Upload file', async () => {
                    await contactFlow.attachFileToForm();
                });

                await test.step('Verify uploaded file', async () => {
                    expect(await contactFlow.getUploadedFileCount()).toBe(1);

                    const file = await contactFlow.getUploadedFileInfo();
                    expect(file?.name).toBe('sample-message.txt');
                    expect(file?.type).toBe('text/plain');
                })
            }
        )

        /**
         * Requirement : FR-CONTACT-004
         * Test Case   : CONTACT-004
         * Priority: Medium
         */
        test('[CONTACT-004] User can send the form and confirm the submission', { tag: ['@contact', '@regression'] },
            async ({ contactFlow, contactStatic, page }) => {

                await test.step('Navigate to contact us page', async () => {
                    await contactFlow.openContact();
                })

                await test.step('Fill contact form', async () => {
                    await contactFlow.fillContactForm(contactStatic)
                })

                await test.step('Send the form', async () => {

                    await test.step('Handle the alert and confirmation', async () => {
                        page.on('dialog', async dialog => {
                            expect(dialog.type()).toBe('confirm');
                            expect(dialog.message()).toBe(ContactModalMessages.PressOkToProceed);
                            await dialog.accept();
                        });
                    })

                    await contactFlow.submitForm();
                })
            }
        )

        /**
         * Requirement : FR-CONTACT-005
         * Test Case   : CONTACT-005
         * Priority: Medium
         */
        test('[CONTACT-005] User can verify success message after confirming submission', { tag: ['@contact', '@smoke', '@regression'] },
            async ({ contactFlow, contactStatic, page, contactPage }) => {

                await test.step('Navigate to contact us page', async () => {
                    await contactFlow.openContact();
                })

                await test.step('Fill contact form', async () => {
                    await contactFlow.fillContactForm(contactStatic)
                })

                await test.step('Send the form', async () => {

                    await test.step('Handle the alert and confirmation', async () => {
                        page.on('dialog', async dialog => {
                            expect(dialog.type()).toBe('confirm');
                            expect(dialog.message()).toBe(ContactModalMessages.PressOkToProceed);
                            await dialog.accept();
                        });
                    })

                    await contactFlow.submitForm();
                })

                await test.step('Verify success message', async () => {
                    await expect(contactPage.successMessage).toBeVisible();
                    await expect(contactPage.successMessage).toHaveText(ContactModalMessages.SuccessMessage);
                })
            }
        )

        /**
         * Requirement : FR-CONTACT-006
         * Test Case   : CONTACT-006
         * Priority: Low
         */
        test('[CONTACT-006] Contact form should verify required field validation', { tag: ['@contact', '@regression'] },
            async ({ contactFlow }) => {

                await test.step('Navigate to contact us page', async () => {
                    await contactFlow.openContact();
                })

                await test.step('Send the form', async () => {
                    await contactFlow.submitForm();
                })
            }
        )
    })
})