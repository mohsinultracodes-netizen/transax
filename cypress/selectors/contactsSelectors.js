// support/selectors/contacts.selectors.js

export default class ContactsSelectors {
    selectors = {
        CONTACTS_NAV_BTN: '#nav-contacts',
        PAGE_TITLE: 'h1',
        addContactBtn: '#__nuxt button',
        searchContact: 'input[placeholder="Search contact"]',
        firstName: 'input[placeholder="John"]',
        lastName: 'input[placeholder="Doe"]',
        email: 'input[placeholder="email@email.com"]',
        phone: 'input[placeholder="(123) 345-6789"]',
        saveBtn: '[data-testid="contact-modal-section.submit-button"]',
        cancelBtn: '[data-testid="contact-modal-section.cancel-button"]',
        contactTable: '.v-data-table',
        threeDotMenu: 'tbody tr:first-child td:last-child button',
        editMenuItem: '.v-list-item:contains("Edit")',
        archiveMenuItem: '.v-list-item:contains("Archive")',
        modalHeader: '.v-dialog h1',
        archiveModal: '[data-testid="v-dialog-modal-section.dialog-container"]',
        archiveTab: '.v-btn__content > .content-container > span',
    };

    openContactsPage(){
        cy.get(this.selectors.CONTACTS_NAV_BTN).should('be.visible').click()
    }

    verifyContactsPageAccessed(){
        cy.get(this.selectors.PAGE_TITLE)
            .contains('Contacts')
            .should('be.visible');
    }

    clickAddContact() {
        cy.get(this.selectors.addContactBtn).contains('Add').click({ force: true });
    }

    typeFirstName(value) {
        cy.get(this.selectors.firstName).clear().type(value);
    }

    typeLastName(value) {
        cy.get(this.selectors.lastName).clear().type(value);
    }

    typeEmail(value) {
        cy.get(this.selectors.email).clear().type(value);
    }

    typePhone(value) {
        cy.get(this.selectors.phone).clear().type(value);
    }

    clickSave() {
        cy.get(this.selectors.saveBtn).should('not.be.disabled').click();
    }

    openFirstContactMenu() {
        cy.get(this.selectors.threeDotMenu).click({ force: true });
    }

    clickEdit() {
        cy.contains('Edit').click();
    }

    clickArchive() {
        cy.contains('Archive').click();
    }

    openArchive() {
        cy.get(this.selectors.archiveTab).click();
    }

    searchContact(name){
        cy.get(this.selectors.searchContact).type(name)
    }

    assertContactVisible(name) {
        cy.wait(1000)
        cy.contains(name).should('be.visible');
    }

    assertContactNotVisible(name) {
        cy.contains(name).should('not.exist');
    }
}

