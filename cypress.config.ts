import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin , afterRunHandler} from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

const fs = require('fs').promises;
const setupNodeEvents = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config, {
    omitAfterRunHandler: true,
  });

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    }),
  );
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
        launchOptions.args.push("--incognito");                
    } else if (browser.name === 'electron') {                
        launchOptions.preferences.incognito = true               
    }
    return launchOptions
})  

  on('after:run', async (results) => {
    if (results) {
      await afterRunHandler(config);
      await fs.writeFile(
        'cypress/reports/results.json',
        JSON.stringify(
          {
            browserName: results.browserName,
            browserVersion: results.browserVersion,
            osName: results.osName,
            osVersion: results.osVersion,
            nodeVersion: results.config.resolvedNodeVersion,
            cypressVersion: results.cypressVersion,
            startedTestsAt: results.startedTestsAt,
            endedTestsAt: results.endedTestsAt,
          },
          null,
          '\t',
        ),
      );
    }
  });
  return config;
};

export default defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com/',
    specPattern: "**/*.feature",
    setupNodeEvents,
    env: {
      omitFiltered: true,
      filterSpecs: true
    }
  },
});
