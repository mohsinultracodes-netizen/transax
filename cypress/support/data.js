import { faker } from '@faker-js/faker';

export const generateContact = () => {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email().toLowerCase(),
        phone: `402${faker.number.int({ min: 1000000, max: 9999999 })}`
    };
};

export const generateUpdatedContact = () => {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
    };
};
