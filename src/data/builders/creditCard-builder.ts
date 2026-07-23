import { Countries, User } from '@models/user';
import { faker } from '@faker-js/faker';
import { CreditCard } from '@models/payment';

export class CreditCardBuilder {
    private readonly creditCard: CreditCard = {
        cardName: '',
        cardNumber: '',
        cvc: '',
        expiryMonth: '',
        expiryYear: ''
    };

    withFakerCreditCard(): CreditCardBuilder {
        this.creditCard.cardName = faker.finance.creditCardIssuer();
        this.creditCard.cardNumber = faker.finance.creditCardNumber();
        this.creditCard.cvc = faker.finance.creditCardCVV();
        this.creditCard.expiryMonth = faker.date.month();
        this.creditCard.expiryYear = faker.date.past().getFullYear().toString();
        return this;
    }

    build(): CreditCard {
        return { ...this.creditCard };
    }

}