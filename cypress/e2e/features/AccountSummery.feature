Feature: Accounts Summery of the user

    This feature tests whether the webpage provides all the Information on the users Accounts
    like the type of the accunts user has, Information getting dislayed for each account and user getting
    redirected to correct Page after clicking on the links.

Background: 
    Given User logs in into ZeroBank using "username" and "password"
    When User clicks on Accounts Summery link

    Scenario: User should see all the account types that user has on the Accounts Summery Page
        Then User should see 
        | Accounts |
        | Cash Accounts | 
        | Investment Accounts |
        | Credit Accounts |
        | Loan Accounts |

    Scenario: Each Account should show the associated balance
        Then User should see Correct Balance for each Account
    