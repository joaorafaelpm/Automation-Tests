/// <reference types="cypress" />

describe("Iterate over elements", () => {
  it("Log information of all hair care products", () => {
    cy.visit("https://automationteststore.com/");

    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        cy.log("Product " + index + ": " + $el.text());
    });
   });
  it("Add specific product to basket", () => {
    cy.visit("https://automationteststore.com/");

    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if($el.text().includes("Curls to straight Shampoo")) {
            // We cannot use Cypress commands directly on $el because it's a jQuery element
            // So we need to wrap it first
            // $el.click();

            // Correct Approach
            cy.wrap($el).click();
        }
   });
});
});
