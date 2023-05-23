/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

 const fs = require('fs-extra');
 const path = require('path');
 const cucumber = require('cypress-cucumber-preprocessor').default;
 const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
 const xlsx = require("xlsx");

 const downloadDirectory = path.join(__dirname, '..', 'downloads');
    
    const findPDF = (PDFfilename) => {
      const PDFFileName = `${downloadDirectory}/${PDFfilename}`;
      const contents = fs.existsSync(PDFFileName);
      return contents;
    };
    
    const hasPDF = (PDFfilename, ms) => {
      const delay = 10;
      return new Promise((resolve, reject) => {
        if (ms < 0) {
          return reject(
            new Error(`Could not find PDF ${downloadDirectory}/${PDFfilename}`)
          );
        }
        const found = findPDF(PDFfilename);
        if (found) {
          return resolve(true);
        }
        setTimeout(() => {
          hasPDF(PDFfilename, ms - delay).then(resolve, reject);
        }, 10);
      });
    };


     module.exports = (on, config) => {
      require('@cypress/code-coverage/task')(on, config);
      on('before:browser:launch', (browser, options) => {
        if (browser.family === 'chromium') {
          options.preferences.default['download'] = {
            default_directory: downloadDirectory,
          };
          return options;
        }
        if (browser.family === 'firefox') {
          options.preferences['browser.download.dir'] = downloadDirectory;
          options.preferences['browser.download.folderList'] = 2;
          options.preferences['browser.helperApps.neverAsk.saveToDisk'] =
            'text/csv';
          return options;
        }
      });
    
      on('task', {
        isExistPDF(PDFfilename, ms = 4000) {
          config.env.codeCoverageTasksRegistered = true
          console.log(
            `looking for PDF file in ${downloadDirectory}`,
            PDFfilename,
            ms
          );
          return hasPDF(PDFfilename, ms);
        },
      });
    
      return config;
    };


    
 module.exports = (on, config) => {
  
  on('task', {downloadFile})
  on('before:browser:launch', (browser = {}, launchOptions) => {
    // `args` is an array of all the arguments that will
    // be passed to browsers when it launches
    console.log(launchOptions.args) // print all current args

    if (browser.family === 'chrome' ) {
      // auto open devtools
    //  args.push("--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process");
     // args.push("--load-extension=cypress/extensions/Ignore-X-Frame-headers_v1.1");
      }})

  // Excel
//  const xlsx = require('node-xlsx').default; 
const fs1 = require('fs'); // for file
// const xlsx = require("xlsx");

//new one
module.exports = (on, config) => {
  on('task', {
    filesInDownload (folderName) {
      return fs.readdirSync(folderName)
    }
  })
  return config
}
//till here

  on('task', {

    generateJSONFromExcel:generateJSONFromExcel,
    filesInDownload:filesInDownload,
    log(message){
      console.log(message)
      return null
    }
  })

  function generateJSONFromExcel(args){
   
    const wb = xlsx.readFile(args.excelFilePath,{dateNF:String})
    const ws = wb.Sheets[args.sheetName]
    const data = xlsx.utils.sheet_to_json(ws)
    const workbookHeaders = xlsx.readFile(args.excelFilePath, { sheetRows: 12 });
    const coulumnsArray = xlsx.utils.sheet_to_json(workbookHeaders.Sheets[args.sheetName], {header : 1 })[0];
    const one = "sunil"
    return coulumnsArray;

  }

  function filesInDownload(folderName){
    return fs.readdirSync(folderName)
  }

  on('task', {
    setProjectIds: (projectData) => {
      global.projectData = projectData;
      return null;
    },
    getProjectIds: () => {
      return global.projectData || null;
    },
  });

on('task', { parseXlsx({ filePath }) 
{ return new Promise((resolve, reject) =>
  { try 
   {
      const jsonData = xlsx.parse(fs1.readFileSync(filePath)); 
      resolve(jsonData);
      } catch (e) 
      {
         reject(e);
      } });
    }}); 
  
  on('file:preprocessor', cucumber());
   // `on` is used to hook into various events Cypress emits
   // `config` is the resolved Cypress config
     
   function getConfigurationByFile(env) {
       const pathToConfigFile = path.resolve("cypress/config", `${env}.json`);
 
       return fs.readJson(pathToConfigFile);
   }
   //if no environment is provided, then PR env will be default
   const env = config.env.configFile || "qa";  
 
   return getConfigurationByFile(env);

  }


  


