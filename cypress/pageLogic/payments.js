// cypress/pageLogic/payments.js

import PaymentsSelectors from '../selectors/paymentsSelectors'

export default class PaymentsPage {

  payments = new PaymentsSelectors()

  navigateToPaymentsPage(){
    this.payments.getPaymentsNavBtn()
    this.payments.clickOnPaymentsSideNavBtn()
  }

  verifyPaymentsPageLoaded() {
    this.payments.assertPageTitle()
    this.payments.assertTableVisible()
  }

  openTab(tabName) {
    this.payments.clickTab(tabName)
    this.payments.assertTableVisible()
  }

  verifyCompletedPayments() {
    this.openTab('Completed')
    cy.wait(1000)
    this.payments.assertStatusInRow('COMPLETED')
  }

  verifyIncompletePayments() {
    this.openTab('Incomplete')
    cy.wait(1000)
    this.payments.assertStatusInRow('PROCESSED')
  }

  searchByTransactionId(id) {
    this.payments.searchPayment(id)
    cy.wait(1000)
    this.payments.assertRowsExist()
  }

  searchByCustomerName(name) {
    this.payments.searchPayment(name)
    cy.wait(1000)
    this.payments.assertRowsExist()
  }

  verifyEmptySearch() {
    this.payments.searchPayment('invalid-data-123')
    cy.wait(1000)
    this.payments.assertNoResults()
  }

  verifyGlobalSearch(name) {
    this.payments.searchGlobal(name)
  }

  openDisputeCenter() {
    this.payments.clickDisputeCenter()
  }
}
