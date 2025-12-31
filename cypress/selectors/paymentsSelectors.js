import Global from "./globalSelectors";

export default class Payments {

selectors = {
PAGE_TITLE : ".page-title", // .contains("Payments")
TAB_BUTTON : ".button", // .contains tab name
SEARCH_PAYMENTS :"input['placeholder='Search payments']",
DISPUTE_CENTER : ".v-btn__content", // .contains("DISPUTE CENTER")
PAYMENTS_TABLE : ".v-table__wrapper",
TABLE_ROW : ".v-data-table__tr", // use .contains("Customer Name") to access the row
TABLE_COLUMN: ".v-data-table__td" //  use .contains("Created date, ID ,...") to access the relevant column
}

assertPageTitle(){
    cy.get(this.selectors.PAGE_TITLE).contains("Payments").should('be.visible');
}

clickAllTab(){
    cy.get(this.selectors.TAB_BUTTON).contains("All").click()
}

clickIncompleteTab(){
    cy.get(this.selectors.TAB_BUTTON).contains("Incomplete").click()
}

clickCompletedTab(){
    cy.get(this.selectors.TAB_BUTTON).contains("Completed").click()
}

clickRefundsTab(){
    cy.get(this.selectors.TAB_BUTTON).contains("Refunds").click()
}



}