const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseURL: 'https://www.google.com'
  },
  e2e: {
    baseURL: 'https://www.google.com',
    viewportHeight: 1080,
    viewportWidth: 1920,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
