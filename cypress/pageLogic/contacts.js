import ContactsSelectors from "../selectors/contactsSelectors";

const contacts = new ContactsSelectors;

export default class ContactsPage {

    navigateToContactsPage() {
        contacts.openContactsPage()
        contacts.verifyContactsPageAccessed()
    }

    addContact({ firstName, lastName, email, phone }) {
        contacts.clickAddContact();
        contacts.typeFirstName(firstName);
        contacts.typeLastName(lastName);
        contacts.typeEmail(email);
        contacts.typePhone(phone);
        contacts.clickSave();
    }

    editContact({ firstName, lastName }) {
        contacts.openFirstContactMenu();
        contacts.clickEdit();
        contacts.typeFirstName(firstName);
        contacts.typeLastName(lastName);
        contacts.clickSave();
    }

    archiveContact() {
        contacts.openFirstContactMenu();
        contacts.clickArchive();
    }

    verifyContactExists(name) {
        contacts.searchContact(name)
        contacts.assertContactVisible(name);
    }

    verifyContactNotExists(name) {
        contacts.assertContactNotVisible(name);
    }
}

