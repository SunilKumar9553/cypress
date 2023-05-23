import { wait,shortwait, mediumwait, longwait } from "../../support/constant.js";

class OrganisationPage{

    orgAddBtn() { return 'img[title="Create Organization..."]'}
    orgName() { return 'input[name="accountname"]'}
    assignedToRadioBtn() { return  '[value="T"]'}
    billingAddress() { return 'textarea[name="bill_street"]'}
    shippingAddress() { return 'textarea[name="ship_street"]'}
    saveBtn() { return "input[value*='Save']"}
    expectedOrgName() { return "span[id='dtlview_Organization Name']"}
    editOrgName() { return "input[name='accountname']"}
    expectedAssignee() { return 'td[id="mouseArea_Assigned To'}
    editAssigneeUser() { return "input[name='assigntype']"}
    expectedBillingAddress() { return "td[id='mouseArea_Billing Address']>span"}
    expectedShippingAddress() { return "td[id='mouseArea_Shipping Address']>span"}
    orgLink() { return ".hdrLink"}
    orgCheckBox() { return 'input[name="selected_id"]'}
    deleteBtn() { return "input[value='Delete']"}
    editBtn() { return "input[name='Edit']"}
    editAssignee() { return 'input[value="U"]'}

    addOrganisation(orgName, billingAddress, shippingAddress) 
    {
        let random = Math.floor(Math.random() * 1000)
        cy.clickButton(this.orgAddBtn())
        cy.enterText(this.orgName(), orgName )
        cy.elementToVisible(this.assignedToRadioBtn())
        cy.get(this.assignedToRadioBtn()).check().should('be.checked')
        cy.enterText(this.billingAddress(), billingAddress)
        cy.enterText(this.shippingAddress(), shippingAddress)
        cy.get(this.saveBtn()).last().click()
        cy.wait(3000)
    }

    verifyTheOrganisationDetails(orgName, assignee, billingAddress,shippingAddress) 
    {
       cy.wait(longwait)
       cy.containsText(this.expectedOrgName(),orgName)
       cy.containsText(this.expectedAssignee(), assignee)
       cy.containsText(this.expectedBillingAddress(), billingAddress)
       cy.containsText(this.expectedShippingAddress(), shippingAddress)

    }

    verifyTheEditedOrganisationDetails(modifiedOrgName) 
    {
        cy.containsText(this.expectedOrgName(),modifiedOrgName)
    
    }

    editTheOrganisationDetails(modifiedOrgName) 
    {
        cy.get(this.editBtn()).first().click()
        cy.wait(2000);
        cy.get(this.editOrgName()).clear().type(modifiedOrgName)
        cy.wait(shortwait);
        cy.get(this.editAssigneeUser()).first().should('be.visible')
        cy.get(this.editAssigneeUser()).first().check().should('be.checked')
        cy.get(this.saveBtn()).last().click()
        .wait(longwait)

    }

    deleteOrganisationInOrganisationPage() 
    {
        cy.clickButton(this.orgLink())
        cy.elementToVisible(this.orgCheckBox())
        cy.get(this.orgCheckBox()).check().should('be.checked')
        cy.get(this.deleteBtn()).first().click()
        cy.on('window:confirm',(t) => 
           {
            expect(t).to.contains('Deleting this organization(s) will remove its related Opportunities & Quotes. Are you sure you want to delete the selected 1 records?')
        })
    }



}

export default OrganisationPage = new OrganisationPage()
