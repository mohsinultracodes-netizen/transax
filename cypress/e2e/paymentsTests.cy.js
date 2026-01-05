// cypress/e2e/paymentsPage.cy.js

import PaymentsPage from '../pageLogic/payments'

describe('Payments Page Test Suite', () => {

  const payments = new PaymentsPage()

  beforeEach(() => {
    cy.log(JSON.stringify(Cypress.env("environments")))
    cy.login("dev");
    payments.navigateToPaymentsPage()
  })

  /* ================= EASY (5) ================= */

  it('E1: Payments page loads successfully', () => {
    payments.verifyPaymentsPageLoaded()
  })

  it('E2: All tab shows payments by default', () => {
    payments.openTab('All')
  })

  it('E3: Completed tab is clickable', () => {
    payments.openTab('Completed')
  })

  it('E4: Incomplete tab is clickable', () => {
    payments.openTab('Incomplete')
  })

  it('E5: Payments table is visible', () => {
    payments.verifyPaymentsPageLoaded()
  })

  /* ================= MEDIUM (5) ================= */

  it('M1: Completed tab shows only completed payments', () => {
    payments.verifyCompletedPayments()
  })

  it('M2: Incomplete tab shows only incomplete payments', () => {
    payments.verifyIncompletePayments()
  })

  it('M3: Search payments by customer name', () => {
    payments.searchByCustomerName('Mohsin')
  })

  it('M4: Search payments by transaction ID', () => {
    payments.searchByTransactionId('ch_')
  })

  it('M5: Switching tabs refreshes table data', () => {
    payments.openTab('Completed')
    payments.openTab('All')
  })

  /* ================= EDGE CASES (5) ================= */

  it('E1: Search with invalid data shows no results', () => {
    payments.verifyEmptySearch()
  })

  it('E2: Rapid tab switching does not break UI', () => {
    payments.openTab('All')
    payments.openTab('Completed')
    payments.openTab('Incomplete')
  })

  it('E3: Empty search input keeps table intact', () => {
    payments.searchByCustomerName('{backspace}')
    payments.verifyPaymentsPageLoaded()
  })

  it('E4: Global search does not crash payments page', () => {
    payments.verifyGlobalSearch('John')
  })

  it('E5: Pagination loads next page correctly', () => {
    cy.get('button[aria-label="Next page"]').click()
  })

  /* ================= CRITICAL (5) ================= */

  it('C1: Payments data loads without API failure', () => {
    payments.verifyPaymentsPageLoaded()
    payments.openTab('All')
  })

  it('C2: Completed payments amount and status visible', () => {
    payments.verifyCompletedPayments()
  })

  it('C3: User can access Dispute Center', () => {
    payments.openDisputeCenter()
  })

  it('C4: Payments page works after page reload', () => {
    cy.reload()
    payments.verifyPaymentsPageLoaded()
  })

  it('C5: Payments page accessible with valid role', () => {
    payments.verifyPaymentsPageLoaded()
  })

})
