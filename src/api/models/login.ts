export interface VerifyLoginRequest {
    email: string;
    password: string;
}

export interface Response {
    responseCode: number;
    message: string;
}

export interface CreateAccountRequest {
    name: string;
    email: string;
    password: string;
    dayOfBirth: string;
    monthOfBirth: string;
    yearOfBirth: string;
    firstname: string;
    lastname: string;
    company?: string;
    address1: string;
    address2?: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobile_number: string;
}

export interface DeleteAccountRequest {
    email: string;
    password: string;
}