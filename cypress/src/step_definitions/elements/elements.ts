import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { ElementPage } from '../../steps/elementPage'

Given('I open the home page', () => {
    ElementPage.goToElementsPage()
})

When('I add an element', () => {
    ElementPage.addElement()
})

When('I delete the element', () => {
    ElementPage.deleteElement()
})

Then('I should see that the element is visible', () => {
    ElementPage.verifyIfElementIsVisible()
})

Then('I should see that the element was deleted', () => {
    ElementPage.verifyIfElementWasDeleted()
})