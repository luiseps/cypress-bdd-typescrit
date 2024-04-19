@login
Feature: Login to Application

    As a valid user
    I want to login to Application

    Scenario: Login with valid credentials
      Given I open the login page
      When I enter my credentials
      Then I should see the login page
      
    Scenario: Login with invalid credentials
      Given I open the login page
      When I enter invalid credentials
      Then I should get an error message

    Scenario: Logout from the application
      Given I logged in the application
      When I logout from the homepage
      Then I should return to login page