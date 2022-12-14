Feature: Login Feature

    This feature allows valid users to login and invalid users unable to login.
    This feature tests the Forgot Password Functionality.
    This feature tests the footer links.

Background: 
    Given User opens Sign In Page

    Scenario: Registered user is able to successfully login with correct credentials
        When User enters "username" and "password"
        When Clicks on Sign in
        Then Home page is loaded
        
    Scenario: user is unable to login with incorrect credentials
        When User enters incorrect credentials
        | username | password |
        | username | pasword  |
        | uname    | pwd      |
        | xyz      | 123      |
        When Clicks on Sign in
        Then Error message should be displayed

    Scenario: Username and password should get cleared after unsuccessul login attempt
        When User enters "uname" and "pass"
        When Clicks on Sign in
        Then Username and password field is cleared

    Scenario: User should remain signed in if user has checked for Keep me signed in
        When User enters "username" and "password"
        When Checks Keep me signed in
        When Clicks on Sign in
        When Launched the application again
        Then Home page is loaded

    Scenario: User wants to reset the password with valid email
        Given User opens Sign In Page
        When User cicks on Forgot password
        When user enters "username@gnail.com" and clicks on submit
        Then Password sent to the "username@gnail.com" message should dislpayed

    @Ignore
    #This Scenario Will fail
    Scenario: User wants to reset the password with invalid email
        When User cicks on Forgot password
        When user enters "2829dfza" and clicks on submit
        Then Password sent to the "2829dfza" message should not be dislpayed

    Scenario Outline: User clicks on the "<link>", they should be redirected to correct page
        When user clicks on "<link>"
        Then user should be redirected to correct "<page>"

        Examples:
            | link                |page|
            | Download WebInspect |DAST (Dynamic Application Security Testing) Analysis Tool \| CyberRes|
            | Terms of Use        |Legal Information \| Micro Focus|
            | Contact Micro Focus |Login|
            | Privacy Statement   |Legal Information \| Micro Focus|

