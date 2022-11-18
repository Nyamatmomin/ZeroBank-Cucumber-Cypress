import {
    Given,
    When,
    Then,
    And,
    DataTable
  } from "@badeball/cypress-cucumber-preprocessor";
   const loginPage = require("../../pages/loginPage");
   const OnlineBanking = require("../../pages/OnlineBanking")

  Given("User logs in to Zero Bank App with {string} and {string}",(username, password) => {
    loginPage.launchZeroBankApp()
    loginPage.fillUsernameAndPassord(username, password)
    loginPage.clickSignIn()
    cy.visit("/index.html")
  })

  When("User clicks on Online Banking", () => {
    OnlineBanking.elements.bankingMenu().click()
  })

  When("User cicks on {string}", (service) => {
    OnlineBanking.getAllServices().contains(service).click()
  })

  Then("User should see service on Online Banking Page",(DataTable) => {

    DataTable.hashes().forEach((element, index) => {
      OnlineBanking.getAllServices().eq(index).find('span').should('contain.text', element.service)
    });
  })

  Then("User shoud get redirected to {string}", (page) => {
    cy.title().should('eq', page)
  })