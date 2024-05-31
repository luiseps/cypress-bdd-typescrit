import * as Elements from '../pages/elements'

class ElementPage {
	goToElementsPage() {
		cy.visit('/add_remove_elements/')
	}

	addElement() {
		cy.contains(Elements.ADD_ELEMENT_BUTTON).click()
	}

	deleteElement() {
		cy.contains(Elements.DELETE_ELEMENT_BUTTON).click()
	}

	verifyIfElementIsVisible() {
		cy.contains(Elements.DELETE_ELEMENT_BUTTON).should('be.visible')
	}

	verifyIfElementWasDeleted() {
		cy.get(Elements.DELETE_ELEMENTS).should('not.exist')
	}
}

export default new ElementPage()
