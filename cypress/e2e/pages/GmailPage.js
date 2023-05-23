

class GmailPage{
    
    firstName() { return "#firstName" }
    lastName() { return "#lastName" }
    userName() { return '#username'}
    password() { return "input[name='Passwd']" }
    confirmPsswd() { return "input[name='ConfirmPasswd']"}
    next() { return "#accountDetailsNext" }

    clickCreateAccount(){
        cy.contains('Create account').click()
    }

    selectType(type){
        cy.contains(type).click()
    }

    enterFirstName(firstName){
      cy.enterText(this.firstName(),firstName)
    }

    enterLastName(lastName){
        cy.enterText(this.lastName(), lastName)
    }

    enterUserName(userName){
        cy.enterText(this.userName(), userName + Math.floor(Math.random() * 10000));
    }

    enterAndConfirmPassWord(password){
        let random = Math.floor(Math.random() * 1000)
        cy.enterText(this.password(), password + random)
        cy.enterText(this.confirmPsswd(), password + random)
        
    }
    
    clickNext(){
        cy.clickButton(this.next())
    }
 

}

export default GmailPage = new GmailPage