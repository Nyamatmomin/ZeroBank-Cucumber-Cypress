import {
    Given,
    When,
    And,
    Then
  } from "@badeball/cypress-cucumber-preprocessor";
  const loginPage = require("../../pages/loginPage");

  Given("User opens Sign In Page", () => {
    cy.visit("/login.html")
  })

  When("User enters {string} and {string} and clicks on login", (username, password) => {
    cy.get("#user_login").type(username)
    cy.get("#user_password").type(password)
    cy.get("input[name='submit']").click()
  })

  Then("Home page is loaded", () => {
    cy.title().should("equal", "Zero - Account Summary")
  })