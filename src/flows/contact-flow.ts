import { ContactForm } from "@models/contact";
import { ContactPage } from "@pages/contact-page";

export class ContactFlow {
    constructor(
        private readonly contactPage: ContactPage
    ) { }

    async openContact() {
        await this.contactPage.open();
    }

    async fillContactForm(contactData: ContactForm) {
        await this.contactPage.nameInput.fill(contactData.name);
        await this.contactPage.emailInput.fill(contactData.email);
        await this.contactPage.subjectInput.fill(contactData.subject);
        await this.contactPage.messageInput.fill(contactData.message);
    }

    async attachFileToForm(url: string) {
    }

    async submitForm() {
        await this.contactPage.submitButton.click();
    }
}