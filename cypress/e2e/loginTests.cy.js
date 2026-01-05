import LoginPage from "../pageLogic/login";
const login = new LoginPage;

describe("Environment-based Login", () => {
  it("logs in with dev admin", () => {
    cy.login("dev");   // 👈 only reference environment name
    login.verifyLogin();
  });

//   it("logs in with staging admin", () => {
//     cy.login("staging");   // 👈 only reference environment name
//     login.verifyLogin();
//   });
});


