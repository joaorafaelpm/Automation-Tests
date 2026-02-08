///<reference types="cypress" />

describe("Selector Examples on WebDriverUni", () => {
  it("Examples of  selectors via WebDriverUni", () => {
    cy.visit("/Contact-Us/contactus.html");

    // Pelo nome da tag
    cy.get("input");

    // Pelos atributos de dentro da tag
    cy.get("input[name='first_name']");

    // Pelo ID
    cy.get("#contact_me");

    // Pela classe
    cy.get(".feedback-input")

    // Por várias classes
    cy.get("[class='navbar navbar-inverse navbar-fixed-top']");

    // Por atributos diferentes
    cy.get("input[name='email'][placeholder='Email Address']")

    // Pelo xpath (necessita do plugin cypress-xpath)
    cy.xpath("//input[@name='first_name']");
})

});