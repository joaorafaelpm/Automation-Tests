/// <reference types="cypress" />

describe("Interact with autocomplete dropdown lists", () => {
  it("Select specific product via autocomplete list", () => {
    cy.visit("/");
    cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click({ force: true });
     
    cy.get('#myInput').as('myInput').type("A");
    cy.get("#myInputautocomplete-list > *")
      .each(($el, index, $list) => {
        const prod = $el.text();
        const productToSelect = "Avacado";

        if (prod === productToSelect) {
          cy.wrap($el).click();

          cy.get("#submit-button").click();
          cy.url().should("include", "Avacado");
        }
      })
      .then(() => {
        cy.get("@myInput").type("G");
        cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
          const prod = $el.text();
          const productToSelect = "Grapes";

          if (prod === productToSelect) {
            // The command "trigger" trigger an event in a DOM element, such as a click, or a mouseover, etc.
            // In this case i'll not use this method just to show that we can use the "wrap" method to wrap a DOM element and then use the "click" method to click on it.
            // $el.trigger("click");
            cy.wrap($el).click();

            cy.get("#submit-button").click();
            cy.url().should("include", "Grapes");
          }
        });
      });
  });
});
