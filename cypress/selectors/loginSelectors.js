export default class LoginSelectors {

////////////////////*****************  SELECTORS ***********************///////////////////////
selectors = {
EMAIL : "#input-v-0-1",
PASSWORD : "input[type='password']",
LOGINBTN : "button",
TITLE : "[data-test='title']",
}
////////////////////*****************  RAW FUNCTIONS ***********************//////////////////
    enterEmail(email){
    cy.get (this.selectors.EMAIL).click().type(email)
    }

    enterPassword(password){
    cy.get(this.selectors.PASSWORD).click().type(password)
    }

    performLogin(){
    cy.get(this.selectors.LOGINBTN).contains("LOG IN").click()  
    }

    // assertSuccessfulLogin(){
    //     //wait until page loads and logo is visible
    //     cy.get(this.TITLE, {timeout :60000}).contains('Products').should('be.visible')
    //     //assert that page is accessed via url
    //     cy.url().should('include', '/inventory.html')
    // }

}