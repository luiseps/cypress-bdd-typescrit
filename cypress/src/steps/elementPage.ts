import *  as Elements from '../pages/elements' 

export class ElementPage {

    static goToElementsPage(){
        cy.visit("/add_remove_elements/") 
    }

    static addElement(){
        cy.contains(Elements.ADD_ELEMENT_BUTTON).click()
    }

    static deleteElement(){
        cy.contains(Elements.DELETE_ELEMENT_BUTTON).click()
    }

    static verifyIfElementIsVisible(){
        cy.contains(Elements.DELETE_ELEMENT_BUTTON).should('be.visible')
    }

    static verifyIfElementWasDeleted(){
        cy.get(Elements.DELETE_ELEMENTS).should('not.exist')
    }
}