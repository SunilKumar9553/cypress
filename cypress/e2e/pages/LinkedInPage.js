class LinkedInPage{

    email() { return "#email-or-phone"}
    password() { return "#password"}
    agreeAndJoin() { return "#join-form-submit"}

    clickOnJoinNow(){
        cy.contains('Join').click()
    }

    enterEmail(email){
       cy.enterText(this.email(), email)
    }

    enterPassword(password){

        cy.enterText(this.password(), password)
    }

    clickAgree(){
        cy.clickButton(this.agreeAndJoin())
    }

}

export default LinkedInPage = new LinkedInPage()