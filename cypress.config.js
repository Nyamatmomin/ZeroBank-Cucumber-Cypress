const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const xlsx = require("xlsx");
const { esbuildPreprocessorAdapter } = require("cypress-esbuild-preprocessor");

//If using this approach, just call the key "setupNodeEvents" in the E2E configurations
// async function setupNodeEvents(on, config) {
//   await addCucumberPreprocessorPlugin(on, config);
//   on(
//     "file:preprocessor",
//     createBundler({
//       plugins: [createEsbuildPlugin(config)],
//     })
//   );
//   return config;
// }

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      allureWriter(on, config);

      on("task", {
        generateJSONFromExcel: generateJSONFromExcel,
        getSheetNames: getSheetNames,
      });

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "http://zero.webappsecurity.com/",
    chromeWebSecurity: false,
    watchForFileChanges: false,
    "video": false
  },
  
  "env": {
    // "TAGS": "@Focus"
   // "TAGS": "not @Ignore"
},

// retries : { openMode : 2,
//             runMode : 1},

  projectId :  "96nq4b"
  
});


function generateJSONFromExcel(agrs) {
  const wb = xlsx.readFile(agrs.excelFilePath, {dateNF: "mm/dd/yyyy"});
  const ws = wb.Sheets[agrs.sheet];
  return xlsx.utils.sheet_to_json(ws, {raw: true});
}

function getSheetNames(agrs) {
  const wb = xlsx.readFile(agrs.excelFilePath, {dateNF: "mm/dd/yyyy"});
  const sheets =  wb.SheetNames
  return sheets
}