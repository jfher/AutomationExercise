import { UserBuilder } from '@data/builders/user-builder';

export const users = {
    validUser:
        new UserBuilder()
            .withEmail(process.env.LOGIN_EMAIL ?? '')
            .withPassword(process.env.LOGIN_PASSWORD ?? '')
            .build(),

    randomUser: new UserBuilder()
        .withFakerUser()
        .build(),

    staticUser: {
        title: '',
        name: 'Carlton Gislason',
        email: 'Thelma_Kshlerin7@gmail.com',
        password: 'QoDk8UUYJ4PLiyC',
        dayOfBirth: '6',
        monthOfBirth: '5',
        yearOfBirth: '1993',
        addressInformation: {
            firstName: 'Alma',
            lastName: 'Borer',
            company: 'Botsford - Feeney',
            address: '214 Fritsch Alley',
            address2: 'Apt. 369',
            country: 'Singapore',
            state: 'New Jersey',
            city: 'Arlieworth',
            zipCode: '19190',
            mobileNumber: '1-536-276-3445 x247'
        }
    }
};