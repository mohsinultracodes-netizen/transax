const { defineConfig } = require("cypress");
require("dotenv").config({
  path: require("path").resolve(process.cwd(), ".env"),
});
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
        adminemail: process.env.DEV_ADMIN_EMAIL,
        adminpassword: process.env.DEV_ADMIN_PASSWORD,
        accesstoken: process.env.ACCESS_TOKEN,
        host: "https://dashboard.dev.transax.com/auth/login",

      },

      staging: {
        host: "https://dashboard.staging.transax.com/auth/login",

        adminemail: process.env.STAGING_ADMIN_EMAIL,
        adminpassword: process.env.STAGING_ADMIN_PASSWORD,

      },
    },
  },
});
