export default class PaymentSelectors {
    selectors = {
        PAYMENTS_NAV_BTN: '#nav-payments',
        PAGE_TITLE: 'h1',
        TAB_BUTTON: '.v-btn__content > .content-container > span',
        PAYMENTS_TABLE: '.v-table',
        TABLE_ROW: 'tbody.v-data-table__tbody tr',
        TABLE_CELL: 'td .v-chip__content',
        SEARCH_PAYMENTS: 'input[placeholder="Search payments"]',
        GLOBAL_SEARCH: 'input[placeholder="Search By Contact"]',
        DISPUTE_CENTER_BTN: '.dispute-center-link > .v-btn',
    };

    /* ---------- Navigation ---------- */

    openPaymentsPage() {
        cy.get(this.selectors.PAYMENTS_NAV_BTN)
            .should('be.visible')
            .click();
    }

    /* ---------- Tabs ---------- */

    openTab(tabName) {
        cy.get(this.selectors.TAB_BUTTON)
            .contains(tabName)
            .should('be.visible')
            .click();
        cy.wait(3000)
    }

    /* ---------- Search ---------- */

    searchPayment(value) {
        cy.get(this.selectors.SEARCH_PAYMENTS)
            .should('be.visible')
            .clear()
            .type(value);
    }

    searchGlobal(value) {
        cy.get(this.selectors.GLOBAL_SEARCH)
            .should('be.visible')
            .clear()
            .type(value);
    }

    /* ---------- Actions ---------- */

    openDisputeCenter() {
        cy.get(this.selectors.DISPUTE_CENTER_BTN)
            .should('be.visible')
            .click();
    }

    /* ---------- Assertions ---------- */

    verifyPaymentsPageLoaded() {
        cy.get(this.selectors.PAGE_TITLE)
            .contains('Payments')
            .should('be.visible');
    }

    verifyPaymentsTableVisible() {
        cy.get(this.selectors.PAYMENTS_TABLE)
            .should('be.visible');
    }

    verifyPaymentsTableHasRows() {
        cy.get(this.selectors.TABLE_ROW)
            .should('have.length.greaterThan', 0);
    }

    verifyStatusExistsInTable(status) {
        cy.get(this.selectors.TABLE_ROW).each(($row) => {
            cy.wrap($row)
                .find(this.selectors.TABLE_CELL)
                .invoke('text')
                .then((text) => {
                    expect(text.trim().toLowerCase()).to.eq(status.toLowerCase());
                });
        });
    }

    verifyNoResultsFound() {
        cy.get(this.selectors.TABLE_ROW)
            .should('have.length', 1);
    }
}

