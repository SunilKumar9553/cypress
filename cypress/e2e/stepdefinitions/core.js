const { Given } = require("cypress-cucumber-preprocessor/lib/resolveStepDefinition");
import GmailPage from "../pages/GmailPage";

Given("open gmail", () => {
    cy.visit("https://www.gmail.com")
})

Then("create a new account", () => {
     GmailPage.clickCreateAccount()
     GmailPage.selectType('personal')
     GmailPage.enterFirstName('sunil')
     GmailPage.enterLastName('kumar')
     GmailPage.enterUserName('sunilkumar')
     GmailPage.enterAndConfirmPassWord('sunil@123')
     GmailPage.clickNext()
})

