import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../steps/loginPage'

Given('I open the login page', () => {
	LoginPage.goToLoginPage()
})

Given('I logged in the application', () => {
	cy.fixture('credentials').then(user => {
		const username = user.username
		const password = user.password
		LoginPage.enterCredentials(username, password)
	})
	LoginPage.verifyLoginSucessfully()
})

When('I enter my credentials', () => {
	cy.fixture('credentials').then(user => {
		const username = user.username
		const password = user.password
		LoginPage.enterCredentials(username, password)
	})
})

When('I enter invalid credentials', () => {
	LoginPage.enterCredentials('username', 'password')
})

When('I logout from the homepage', () => {
	LoginPage.logoutFromApplication()
})

Then('I should see the login page', () => {
	LoginPage.verifyLoginSucessfully()
})

Then('I should get an error message', () => {
	LoginPage.verifyInvalidCredentials()
})

Then('I should return to login page', () => {
	LoginPage.verifyLogoutSucessfully()
})
