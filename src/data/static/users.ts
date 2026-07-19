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
        .build()
};