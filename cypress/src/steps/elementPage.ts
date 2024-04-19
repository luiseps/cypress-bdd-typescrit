const ADD_ELEMENT_BUTTON = 'Add Element'
const DELETE_ELEMENT_BUTTON = 'Delete'
const DELETE_ELEMENTS = 'button[class="added-manually"]'

export class ElementPage {

    static goToElementsPage(){
        cy.visit("/add_remove_elements/") 
    }

    static addElement(){
        cy.contains(ADD_ELEMENT_BUTTON).click()
    }

    static deleteElement(){
        cy.contains(DELETE_ELEMENT_BUTTON).click()
    }

    static verifyIfElementIsVisible(){
        cy.contains(DELETE_ELEMENT_BUTTON).should('be.visible')
    }

    static verifyIfElementWasDeleted(){
        cy.get(DELETE_ELEMENTS).should('not.exist')
    }
}