import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'cypress-coding-giants',

  e2e: {
    retries: {
      runMode: 2
    },
    baseUrl: 'https://devtest.giganciprogramowania.edu.pl',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 10000,
    experimentalRunAllSpecs: true,
    numTestsKeptInMemory: 1,
    pageLoadTimeout: 30000,
    requestTimeout: 10000,
    chromeWebSecurity: false,
    includeShadowDom: true,
    watchForFileChanges: false,
  },
});
