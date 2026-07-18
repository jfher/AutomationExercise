import { User } from '@models/user';

export class UserBuilder {

    private readonly user: User = {
        email: '',
        password: ''
    };

    withEmail(email: string): UserBuilder {
        this.user.email = email;
        return this;
    }

    withPassword(password: string): UserBuilder {
        this.user.password = password;
        return this;
    }

    withInvalidPassword(): UserBuilder {
        this.user.password = 'InvalidPassword123';
        return this;
    }

    withNonExistingEmail(): UserBuilder {
        this.user.email = `qa_${Date.now()}@mailinator.com`;
        return this;
    }

    build(): User {
        return { ...this.user };
    }

}