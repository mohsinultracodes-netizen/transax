import LoginPage from "../pageLogic/login";

const loginPage = new LoginPage();

Cypress.Commands.add("Safelogin", (envKey = "dev") => {
// Pick environment dynamically (default = dev)
    const currentEnv = Cypress.env("environments")[envKey];
    // Navigate to host
    cy.visit(currentEnv.host);

    // Perform login using LoginPage class
    loginPage.performLogin(currentEnv.admin.email, currentEnv.admin.password);
});

Cypress.Commands.add("login", (envKey = "dev") => {
  const currentEnv = Cypress.env("environments")[envKey];

  // Inject token into localStorage
  cy.window().then((win) => {
    win.localStorage.setItem("accessToken", currentEnv.access_token);
  });

  // Navigate to the dashboard root (not /auth/login)
  cy.visit(currentEnv.host.replace("/auth/login", "/"));
  cy.wait(1000)
  // Perform login using LoginPage class
    loginPage.performLogin(currentEnv.admin.email, currentEnv.admin.password);
});

