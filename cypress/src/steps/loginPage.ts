
import * as Login from '../pages/login'

class LoginPage {

    goToLoginPage(){
        cy.visit("/login")
        cy.url().should('include', 'login') 
    
    }

    enterCredentials(username, password){
        cy.login(username, password);
    }

    verifyLoginSucessfully(){
        cy.get(Login.MESSAGE_POPUP)
            .should('be.visible')
            .and('contain', 'You logged into a secure area!')
    }

    logoutFromApplication(){
        cy.get(Login.LOGOUT_BUTTON).click()
    }

    verifyLogoutSucessfully(){
        cy.url().should('include', 'login')
        cy.get('#flash')
            .should('be.visible')
            .and('contain', 'You logged out of the secure area!')
    }

    verifyInvalidCredentials(){
        cy.get('#flash')
            .should('be.visible')
            .and('contain', 'Your username is invalid!')
    }
}

export default new LoginPage();