import loginSelectors from "../selectors/loginSelectors";

const selectors = new loginSelectors;

export default class LoginPage {

    performLogin(email, password) {
        selectors.enterEmail(email);
        selectors.enterPassword(password);
        selectors.performLogin();
    }

    verifyLogin() {

        // selectors.assertSuccessfulLogin()
    }


}