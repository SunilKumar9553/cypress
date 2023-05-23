import { wait,shortwait, mediumwait, longwait } from "../../support/constant.js";

class NavigationMenuPage{
    organizationTab() { return "body > table.hdrTabBg > tbody > tr > td.small > table > tbody > tr > td:nth-child(6) > a"}
    moreTab() { return "//a[contains(text(),'More')]//img"}
    troubleTicketTab() { return ":nth-child(18) > a"}

    navigateToOrganisationTab(){
        cy.clickButton(this.organizationTab())
    }

    navigateToMoreTab(){
        cy.clickButton(this.moreTab())
    }

    navigateToTroubleTickets(){
        cy.clickButton(this.troubleTicketTab())
    }

    navigateToParentWindow(url) 
    {
        cy.visit(url);
    }

}

export default NavigationMenuPage = new NavigationMenuPage()