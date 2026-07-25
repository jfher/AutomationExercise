import { ContactForm } from "@models/contact";
import { ContactPage } from "@pages/contact-page";
import { FileUtils } from "@utils/resourcesManager";

export class ContactFlow {
    constructor(
        private readonly contactPage: ContactPage
    ) { }

    async openContact(): Promise<void> {
        await this.contactPage.open();
    }

    async fillContactForm(contactData: ContactForm): Promise<void> {
        await this.contactPage.nameInput.fill(contactData.name);
        await this.contactPage.emailInput.fill(contactData.email);
        await this.contactPage.subjectInput.fill(contactData.subject);
        await this.contactPage.messageInput.fill(contactData.message);
    }

    async attachFileToForm(): Promise<void> {
        const path = new FileUtils().getResourcesPath('files/sample-message.txt');
        await this.contactPage.uploadFile(path);
    }

    async attachFakeFile(name: string): Promise<void> {
        this.contactPage.uploadFileInput.setInputFiles({
            name,
            mimeType: 'text/plain',
            buffer: Buffer.from("Hey, this is the first file's content!")
        })
    }

    async getUploadedFileCount(): Promise<number | undefined> {
        return await this.contactPage.uploadFileInput.evaluate(
            (input: HTMLInputElement) => input.files?.length
        );
    }

    async getUploadedFileInfo(): Promise<any> {
        return this.contactPage.uploadFileInput.evaluate((input: HTMLInputElement) => {
            const file = input.files?.[0];

            return file
                ? {
                    name: file.name,
                    size: file.size,
                    type: file.type,
                }
                : null;
        });
    }

    async submitForm(): Promise<void> {
        await this.contactPage.submitButton.click();
    }
}