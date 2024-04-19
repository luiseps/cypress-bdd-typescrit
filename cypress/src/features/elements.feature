@add
Feature: Element validations

    Scenario: Add elements
      Given I open the home page
      When I add an element
      Then I should see that the element is visible
      
    Scenario: Add elements
      Given I open the home page
      When I add an element
      And I delete the element
      Then I should see that the element was deleted