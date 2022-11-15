Feature: All the services should be displayed on the Online Banking Page

    This feature tests whether al the service offering are being displayed for the user and
    when user clicks on one of the service is being redirected to correct page.

Background: 
    Given User logs in to Zero Bank App
    When User clicks on Online Banking

    Scenario: User should be able to see all the service offering from ZeroBank on Online Banking Page
        Then User should see service on Online Banking Page
        |  Account Summary |
        | Account Activity |
        | Transfer Funds |
        | Pay Bills |
        | My Money Map |
        | Online Statements |

    Scenario Outline: User when clicks on "<service>" should be redirected to "<page>"
        When User cicks on "<service>" 
        Then User shoud get redirected to "<page>"
    
        Examples:
        | service | page |
        |  Account Summary | Zero - Free Access to Online Banking |
        | Account Activity | Zero - Account Activity |
        | Transfer Funds | Zero - Transfer Funds |
        | Pay Bills | Zero - Pay Bills |
        | My Money Map | Zero - My Money Map |
        | Online Statements | Zero - Online Statements

