const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    retries: 2,
    experimentalRunAllSpecs: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 60000,
    viewportHeight: 1080,
    viewportWidth: 1800,

  },
  env: {
    environments: {
      dev: {
        access_token: process.env.ACCESS_TOKEN,
        host: "https://dashboard.dev.transax.com/auth/login",
        admin: {
          email: process.env.DEV_ADMIN_EMAIL,
          password: process.env.DEV_ADMIN_PASSWORD,
        },
      },

      staging: {
        host: "https://dashboard.staging.transax.com/auth/login",
        admin: {
          email: process.env.STAGING_ADMIN_EMAIL,
          password: process.env.STAGING_ADMIN_PASSWORD,
        },
      },
    },
  },
}

);
