

const { Given } = require("cypress-cucumber-preprocessor/lib/resolveStepDefinition");
import HomePage from "../pages/HomePage";
import NavigationMenuPage from "../pages/NavigationMenuPage";
import data from '../../fixtures/createEditDeleteOrganisation.json'
import OrganisationPage from "../pages/OrganisationPage";


const username = Cypress.env('username')
const password = Cypress.env('password')



Given ("Login to vtiger", () => {
    HomePage.loginToVtiger(data.url, username, password)
})

And ("Navigate to organization tab", () => {
    NavigationMenuPage.navigateToOrganisationTab()
})

Then ("Create an organization", () => {
    let random = Math.floor(Math.random() * 100000)
    OrganisationPage.addOrganisation(data.orgName+random, data.billingAddress, data.shippingAddress)
})

And ("Verify the organization details", () => {
    OrganisationPage.verifyTheOrganisationDetails(data.orgName, data.assigneeGroup, data.billingAddress,data.shippingAddress)
})

And ("Edit the organization details", () => {
    let random = Math.floor(Math.random() * 100000)
    OrganisationPage.editTheOrganisationDetails(data.modifiedOrgName + random)
})

And ("Verify the edited organization details", () => {
    OrganisationPage.verifyTheEditedOrganisationDetails(data.modifiedOrgName)
})

Then ("Delete the organization", () => {
    OrganisationPage.deleteOrganisationInOrganisationPage()
})

And ("sign out of the application", () => {
    HomePage.signOutOfApplication();
})