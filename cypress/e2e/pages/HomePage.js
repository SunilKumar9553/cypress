import { wait,shortwait, mediumwait, longwait } from "../../support/constant.js";

class HomePage{

    username() { return ".inputs > :nth-child(2) > input";}
    password() { return ":nth-child(5) > input"}
    submitBtn() { return "#submitButton"}
    labelMsg() { return ".hdrLink"}
    profile() { return "body > table:nth-child(23) > tbody > tr > td.small > table > tbody > tr > td:nth-child(2) > img"}
    signOutBtn() { return "#ondemand_sub > table > tbody > tr:nth-child(2) > td > a"}

    loginToVtiger(url,username, password)
    {
        cy.visit(url)        
        cy.enterText(this.username(), username)
        cy.enterText(this.password(), password)
        cy.clickButton(this.submitBtn())
        cy.containsText(this.labelMsg(), 'Home')
    }

    signOutOfApplication(){
        cy.MouseoverAndclickButton(this.profile())
        cy.wait(1000)
        cy.clickButton(this.signOutBtn())
    }
}

export default HomePage = new HomePage