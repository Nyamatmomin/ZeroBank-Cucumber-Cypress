Feature: Login Feature
    
    This feature allows valid users to login and invalid users unable to login.

Scenario: Registered user is able to successfully login with correct credentials
    Given User opens Sign In Page
    When User enters "username" and "password" and clicks on login
    Then Home page is loaded
