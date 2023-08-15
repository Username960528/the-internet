const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    experimentalStudio: true
  },
});
