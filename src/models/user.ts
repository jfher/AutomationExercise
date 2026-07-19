export interface User {
    title: string;
    name: string;
    email: string;
    password: string;
    dayOfBirth: string;
    monthOfBirth: string;
    yearOfBirth: string;
    addressInformation: AddressInfo;
}

export interface AddressInfo {
    firstName: string;
    lastName: string;
    company?: string;
    address: string;
    address2?: string;
    country: Countries;
    state: string;
    city: string;
    zipCode: string;
    mobileNumber: string;
}

export enum Countries {
    None = '',
    India = "India",
    UnitedStates = "United States",
    Canada = "Canada",
    Australia = "Australia",
    Israel = "Israel",
    NewZealand = "New Zealand",
    Singapore = "Singapore",
}