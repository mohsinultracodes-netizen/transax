// cypress/selectors/paymentsSelectors.js

export default class PaymentsSelectors {

    selectors = {
        PAYMENTS_NAV_BTN: '#nav-payments > .v-list-item__content > .tw-flex > img',
        PAGE_TITLE: '.page-title',
        TAB_BUTTON: 'button',
        SEARCH_PAYMENTS: 'input[placeholder="Search payments"]',
        GLOBAL_SEARCH: 'input[placeholder="Search By Contact"]',
        PAYMENTS_TABLE: '.v-table__wrapper',
        TABLE_ROW: '.v-data-table__tr',
        TABLE_CELL: '.v-data-table__td',
        STATUS_BADGE: '[class*="status"]',
        DISPUTE_CENTER_BTN: '.dispute-center-link > .v-btn > .v-btn__content',
        PAGINATION_NEXT: 'button[aria-label="Next page"]',
        THREE_DOTS: 'button'
    }

    /* ---------- Getters ---------- */
    getPaymentsNavBtn() {
        return cy.get(this.selectors.PAYMENTS_NAV_BTN)
    }
    getPageTitle() {
        return cy.get(this.selectors.PAGE_TITLE)
    }

    getTab(tabName) {
        return cy.get(this.selectors.TAB_BUTTON).contains(tabName)
    }

    getPaymentsTable() {
        return cy.get(this.selectors.PAYMENTS_TABLE)
    }

    getTableRows() {
        return cy.get(this.selectors.TABLE_ROW)
    }

    getTableCell() {
        return cy.get(this.selectors.TABLE_CELL)

    }

    getSearchPayments() {
        return cy.get(this.selectors.SEARCH_PAYMENTS)
    }

    getGlobalSearch() {
        return cy.get(this.selectors.GLOBAL_SEARCH)
    }

    /* ---------- Actions ---------- */

    clickOnPaymentsSideNavBtn() {
        this.getPaymentsNavBtn().should('be.visible').click().click()
        this.getPaymentsNavBtn().click().click()

    }

    clickTab(tabName) {
        this.getTab(tabName).click()
    }

    searchPayment(value) {
        this.getSearchPayments().clear().type(value)
    }

    searchGlobal(value) {
        this.getGlobalSearch().clear().type(value)
    }

    clickDisputeCenter() {
        cy.get(this.selectors.DISPUTE_CENTER_BTN).click()
    }

    /* ---------- Assertions ---------- */
    assertPageTitle() {
        this.getPageTitle().contains('Payments').should('be.visible')
    }

    assertTableVisible() {
        this.getPaymentsTable().should('be.visible')
    }

    assertRowsExist() {
        this.getTableRows().its('length').should('be.greaterThan', 0)
    }

    assertStatusInRow(status) {
        this.getTableRows().each(row => {
            cy.wrap(row)
                .invoke('text')
                .then(rowText => {
                    expect(rowText.toLowerCase()).to.include(status.toLowerCase())
                })
        })
    }

    assertNoResults() {
        this.getTableRows().should('have.length', 0)
    }
}
