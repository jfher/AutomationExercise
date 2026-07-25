import { ContactForm } from "@models/contact";

export const contacts = {
    valid: {
        name: "QA Automation",
        email: "qa@test.com",
        subject: "Automation Test",
        message:
            "This message was sent using Playwright."
    } as ContactForm,

    invalid: {
        name: "",
        email: "invalid-email",
        subject: "",
        message: ""
    } as ContactForm
};