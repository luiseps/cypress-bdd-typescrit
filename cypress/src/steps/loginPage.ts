
import * as Login from '../pages/login'

export class LoginPage {

    static goToLoginPage(){
        cy.visit("/login")
        cy.url().should('include', 'login') 
    
    }

    static enterCredentials(username, password){
        cy.login(username, password);
    }

    static verifyLoginSucessfully(){
        cy.get(Login.MESSAGE_POPUP)
            .should('be.visible')
            .and('contain', 'You logged into a secure area!')
    }

    static logoutFromApplication(){
        cy.get(Login.LOGOUT_BUTTON).click()
    }

    static verifyLogoutSucessfully(){
        cy.url().should('include', 'login')
        cy.get('#flash')
            .should('be.visible')
            .and('contain', 'You logged out of the secure area!')
    }

    static verifyInvalidCredentials(){
        cy.get('#flash')
            .should('be.visible')
            .and('contain', 'Your username is invalid!')
    }
}