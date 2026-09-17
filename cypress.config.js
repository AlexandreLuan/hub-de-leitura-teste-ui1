const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pzcc5t",


  e2e: {
    baseUrl: "http://localhost:3000",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true
  },
});
