import { UserBuilder } from '@data/builders/user-builder';
import { User } from '@models/user';

export const users = {
    validUser:
        new UserBuilder()
            .withEmail(process.env.LOGIN_EMAIL ?? '')
            .withPassword(process.env.LOGIN_PASSWORD ?? '')
            .build()
};