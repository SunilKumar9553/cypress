const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  includeShadowDom: true,
  defaultCommandTimeout: 10000,
  responseTimeout: 40000,
  redirectionLimit: 100,
  reporter: "mochawesome",
  watchForFileChanges: false,
  

  reporterOptions: {
    reportFilename: "test-report",
    overwrite: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/features/*.feature",
    testIsolation: false,
  },
});
