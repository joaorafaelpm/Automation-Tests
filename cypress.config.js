const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    // excludeSpecPattern: "cypress/e2e/other/*.js",
    video: true,
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    baseUrl: "http://www.webdriveruniversity.com/",
    env: {
      first_name: "Sarah",
      webdriveruni_url: "http://www.webdriveruniversity.com",
    },
  },
});
