import PaymentSelectors from "../selectors/paymentsSelectors"
const payments = new PaymentSelectors

export default class PaymentsPage {

    navigateToPaymentsPage() {
        payments.openPaymentsPage()
        payments.verifyPaymentsPageLoaded()
        payments.verifyPaymentsTableVisible()
    }

    verifyPaymentsPageLoaded() {
        payments.verifyPaymentsPageLoaded()
        payments.verifyPaymentsTableVisible()
    }

    openTab(tabName) {
        payments.openTab(tabName)
        payments.verifyPaymentsTableVisible()
    }

    verifyCompletedPayments() {
        payments.openTab('Completed')
        cy.wait(1000)
        payments.verifyStatusExistsInTable('COMPLETED')
    }

    verifyIncompletePayments() {
        payments.openTab('Incomplete')
        cy.wait(1000)
        payments.verifyStatusExistsInTable('PROCESSED')
    }

    searchByTransactionId(transactionId) {
        payments.searchPayment(transactionId)
        cy.wait(1000)
        payments.verifyPaymentsTableHasRows()
    }

    searchByCustomerName(customerName) {
        payments.searchPayment(customerName)
        cy.wait(1000)
        payments.verifyPaymentsTableHasRows()
    }

    verifyEmptySearch() {
        payments.searchPayment('invalid-data-123')
        cy.wait(1000)
        payments.verifyNoResultsFound()
    }

    verifyGlobalSearch(value) {
        payments.searchGlobal(value)
    }

    openDisputeCenter() {
        payments.openDisputeCenter()
    }
}
