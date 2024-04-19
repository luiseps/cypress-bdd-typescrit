const USERNAME_INPUT = '#username'
const PASSWORD_INPUT = '#password'
const LOGIN_BUTTON = 'button[type="submit"]'
const LOGOUT_BUTTON = 'a[class="button secondary radius"]'
const MESSAGE_POPUP = '#flash'
const DELETE_BUTTON = 'button[class="added-manually"]'

export class LoginPage {

    static goToLoginPage(){
        cy.visit("/login")
        cy.url().should('include', 'login') 
    }

    static enterCredentials(username, password){
        cy.visit("/login")
        cy.get(USERNAME_INPUT).type(username)
        cy.get(PASSWORD_INPUT).type(password)
        cy.get(LOGIN_BUTTON).click()
    }

    static verifyLoginSucessfully(){
        cy.get(MESSAGE_POPUP)
            .should('be.visible')
            .and('contain', 'You logged into a secure area!')
    }

    static logoutFromApplication(){
        cy.get(LOGOUT_BUTTON).click()
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