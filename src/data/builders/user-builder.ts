import { Countries, User } from '@models/user';
import { faker } from '@faker-js/faker';

export class UserBuilder {
    private readonly user: User = {
        title: '',
        name: '',
        email: '',
        password: '',
        dayOfBirth: '',
        monthOfBirth: '',
        yearOfBirth: '',
        addressInformation: {
            firstName: '',
            lastName: '',
            company: '',
            address: '',
            address2: '',
            country: Countries.None,
            state: '',
            city: '',
            zipCode: '',
            mobileNumber: ''
        }
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

    withFakerUser(): UserBuilder {
        this.user.name = faker.person.fullName();
        this.user.email = faker.internet.email();
        this.user.password = faker.internet.password();
        this.user.dayOfBirth = faker.date.soon({ refDate: '1993-06-06T05:00:00.000Z' }).getDate().toString();
        this.user.monthOfBirth = faker.date.soon({ refDate: '1993-06-06T05:00:00.000Z' }).getMonth().toString();
        this.user.yearOfBirth = faker.date.soon({ refDate: '1993-06-06T05:00:00.000Z' }).getFullYear().toString();
        this.user.addressInformation.firstName = faker.person.firstName();
        this.user.addressInformation.lastName = faker.person.lastName();
        this.user.addressInformation.company = faker.company.name();
        this.user.addressInformation.address = faker.location.streetAddress();
        this.user.addressInformation.address2 = faker.location.secondaryAddress();
        this.user.addressInformation.country = faker.helpers.arrayElement(Object.values(Countries));
        this.user.addressInformation.state = faker.location.state();
        this.user.addressInformation.city = faker.location.city();
        this.user.addressInformation.zipCode = faker.location.zipCode();
        this.user.addressInformation.mobileNumber = faker.phone.number();
        return this;
    }

    build(): User {
        console.log(this.user);
        return { ...this.user };
    }

}