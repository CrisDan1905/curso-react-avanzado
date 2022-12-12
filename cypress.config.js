const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://curso-platzi-react-avanzado-danilo1905.vercel.app/',
    chromeWebSecurity: false,
    viewportWidth: 500,
    viewportHeight: 800
  }
})
