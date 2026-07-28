import { users } from "@data/static/users";

export class UserFactory {
    static create() {
        const id = Date.now();
        return {
            name: `QA ${id}`,
            email: `qa-${id}@mail.com`,
            password: users.apiUser.password,
            firstname: "QA",
            lastname: "Automation",
            address1: "Automation Street",
            country: "Canada",
            zipcode: "0000",
            state: "QA",
            city: "Playwright",
            mobile_number: "123456789"
        };
    }
}