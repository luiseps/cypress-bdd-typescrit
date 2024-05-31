import * as Login from '../src/pages/login'

Cypress.Commands.add('login', (username, password) => {
	//	cy.session('login', () => {
	cy.visit('/login')
	cy.get(Login.USERNAME_INPUT).type(username)
	cy.get(Login.PASSWORD_INPUT).type(password)
	cy.get(Login.LOGIN_BUTTON).click()
	//	},
	// 	{
	// 		cacheAcrossSpecs: true,
	// 	}
	// )
})
