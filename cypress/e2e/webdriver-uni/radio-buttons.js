/// <reference types="cypress" />

describe("Verify radio buttons via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true });
  });

  it("Check specific radio buttons", () => {
    cy.get("input[type='radio']").first().check();
    cy.get("input[type='radio']").eq(1).check();
  });

  it("Check specific radio buttons and validate", () => {
    cy.get("[value='lettuce']").should("not.be.checked");
    cy.get("[value='pumpkin']").should("be.checked");

    cy.get("[value='lettuce']").check().should("be.checked");
    cy.get("[value='pumpkin']").should("not.be.checked");
    
    cy.get("[value='cabbage']").should("be.disabled");
  });
});
