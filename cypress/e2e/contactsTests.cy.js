import ContactsPage from '../pageLogic/contacts';
import { generateContact , generateUpdatedContact } from '../support/data';

describe('Contacts CRUD Operations', () => {
    const contacts = new ContactsPage;
    
    const data = generateContact();
    const updatedData = generateUpdatedContact();

    beforeEach(() => {
        cy.login("dev");
        contacts.navigateToContactsPage()
    });

    it('CREATE: should add a new contact', () => {
        contacts.addContact(data);
        contacts.verifyContactExists(
            `${data.firstName} ${data.lastName}`
        );
    });

    it('UPDATE: should edit an existing contact', () => {
        contacts.editContact(updatedData);
        contacts.verifyContactExists(
            `${updatedData.firstName} ${updatedData.lastName}`
        );
    });

    it('DELETE (Archive): should archive a contact', () => {
        contacts.archiveContact();
        contacts.verifyContactNotExists(
            `${updatedData.firstName} ${updatedData.lastName}`
        );
    });
});
