import "cypress-real-events/support";  
// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
//import './commands'
import "cypress-real-events/support";


// Alternatively you can use CommonJS syntax:
// require('./commands')
// index.js
import "cypress-real-events/support";
import '@cypress/code-coverage/support'
require('./commands')
require('cypress-xpath');
const moment = require('moment');
const addContext = require('mochawesome/addContext');

// Alternatively you can use CommonJS syntax:
// require('./commands')


beforeEach(function () {
  cy.log('Test run started on : ' + new moment().format('DD-MM-YYYY HH:mm:ss'));
})



//Runs after a test completes
Cypress.on('test:after:run', (test, runnable) => {

  cy.log('Test run ended on : ' + new moment().format('DD-MM-YYYY HH:mm:ss'));

  const spec_title = runnable.parent.title;

  console.log("spec_title :", spec_title);
  console.log("test.state  :", test.state);
  console.log("Cypress.spec.name  :", Cypress.spec.name);
  console.log("test.title  :", test.title);
  console.log(" window.testState :", window.testState);

  let scenarioName = window.testState.currentScenario.name;
  let stepResult = window.testState.stepResults;

  window.testState.scenarioSteps[scenarioName].forEach(function(currStep,index){ 
    console.log("window.testState.scenarioSteps[scenarioName]",stepResult[index].status); 
    addContext({ test }, {
      title: currStep.keyword + " " +  currStep.text,
      value: stepResult[index].status + " " + stepResult[index].duration
    })
  });

  if (test.state === 'failed') {
    addContext({ test }, {
      title: 'Failing Screenshot: ' + '>> screenshots/' + Cypress.spec.name + '/' + spec_title + ' -- ' + test.title + ' (failed)' + '.png <<',
      value: 'screenshots/' + Cypress.spec.name + '/' + spec_title + ' -- ' + test.title + ' (failed)' + '.png'
    })
  }
});


Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes(`Cannot read properties of undefined (reading 'includes')`) 
  || err.message.includes('This authentication method is invalid or cannot be used in this scope')
  || err.message.includes(`Uncaught SyntaxError: Unexpected token '<'`)
  || err.message.includes(`Cannot read properties of null (reading 'message')`)
  || err.message.includes(`Cannot read properties of undefined (reading 'getComputedStyle')`)
  || err.message.includes(`Cannot read properties of undefined (reading 'length`)
  || err.message.includes(`Cannot set properties of null (setting 'currentScaleValue')`)
  || err.message.includes(`Cannot read properties of null (reading 'clientHeight')`)
  || err.message.includes(`Error: ResizeObserver loop limit exceeded`)
  ) {
      return false
  }
})
