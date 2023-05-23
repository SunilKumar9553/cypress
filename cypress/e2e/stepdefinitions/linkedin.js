Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
    });
    
const { Given } = require("cypress-cucumber-preprocessor/lib/resolveStepDefinition");
import LinkedInPage from "../pages/LinkedInPage";


Given("open linkedin", () => {
    cy.visit("https://www.linkedin.com/")
})

Then("create a new linkedin account", () => {
     LinkedInPage.clickOnJoinNow()
     LinkedInPage.enterEmail('sunilkumar@gmail.com')
     LinkedInPage.enterPassword('sunil@123')
     LinkedInPage.clickAgree()
})