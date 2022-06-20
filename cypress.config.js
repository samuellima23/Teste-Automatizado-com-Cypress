const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      viewportWidth: 1024
      viewportHeight: 768
      defaultCommandTimeout: 10000
      baseUrl: 'https://www.netflix.com/br/'
    },
  },
});
