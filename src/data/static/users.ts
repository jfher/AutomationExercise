import { UserBuilder } from '@data/builders/user-builder';
import { Countries, User } from '@models/user';

export const users = {
    validUser:
        new UserBuilder()
            .withEmail(process.env.LOGIN_EMAIL ?? '')
            .withPassword(process.env.LOGIN_PASSWORD ?? '')
            .build(),

    randomUser: new UserBuilder()
        .withFakerUser()
        .build(),

    staticUser: new UserBuilder()
        .withAllUserData(JSON.parse(process.env.USER_VALID!) as User)
        .build(),

    testUser: new UserBuilder()
        .withAllUserData(JSON.parse(process.env.USER_TEST!) as User)
        .build(),

    apiUser: {
        name: "John Doe",
        email: "tes222t@gmail.com",
        password: "12345ASB",
        dayOfBirth: "1",
        monthOfBirth: "1",
        yearOfBirth: "2000",
        firstname: "John",
        lastname: "Doe",
        company: "Example",
        address1: "123 Main St",
        address2: "Apt 4B",
        country: "USA",
        state: "California",
        city: "Los Angeles",
        zipcode: "90001",
        mobile_number: "1234567890"
    }
};