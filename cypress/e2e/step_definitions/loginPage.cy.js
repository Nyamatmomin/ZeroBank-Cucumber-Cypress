import {
  Given,
  When,
  Then,
  And
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/loginPage.js");

Given("User opens Sign In Page", () => {
  loginPage.launchZeroBankApp()
})

When("User enters {string} and {string}", (username, password) => {
  loginPage.fillUsernameAndPassord(username, password)  
})

When("Clicks on Sign in", () => {
  loginPage.clickSignIn()
})

When("Checks Keep me signed in", () => {
  loginPage.elements.rememberMe().check()
})

When("Launched the application again", () => {
  cy.visit("/")
})

When("User cicks on Forgot password", () => {
  loginPage.ForgotPasslink().click()
})

When("user enters {string} and clicks on submit", (email) => {
  loginPage.elements.email().type(email)
  loginPage.elements.submitBtn().click()
})

When("user clicks on {string}",(link) => {

  loginPage.elements.getFooterLinks().each((footerlink) => {

    footertext = footerlink.text()
    if(footertext == link){
      footerlink.click()
    }
  })
})

Then("Home page is loaded", () => {
  loginPage.profileName().should('contain', 'username')
})

Then("Error message should be displayed", () => {
  loginPage.loginError().should("contain.text", "Login and/or password are wrong.")
  cy.title().should("not.equal", "Zero - Account Summary")
})

Then("Username and password field is cleared", () => {
  loginPage.elements.inUserName().should("not.contain.text")
  loginPage.elements.inPassword().should("not.contain.text")
})

Then("Password sent to the {string} message should dislpayed", (email) => {
  loginPage.emailMessage().contains('Your password will be sent to the following email: '+email)
})

Then("Password sent to the {string} message should not be dislpayed", (email) => {
  loginPage.emailMessage().contains('Invalid email')
})

Then("user should be redirected to correct {string}", (page) => {
  cy.title().should('eq', page)
})
