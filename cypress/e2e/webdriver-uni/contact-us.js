/// <reference types="cypress" />

describe("test contact us form via webdriveruni", () => {
  beforeEach(()=> {
    cy.visit(Cypress.env("webdriveruni_url") + "/Contact-Us/contactus.html");
  })
  before(()=> {
    cy.fixture('example').then((data) => {
      // If this aproach does not work, we can use the following
      // this.data = data;
      globalThis.data = data;
    })
  })
  it("should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.contactUsGoodScenario(Cypress.env("first_name"),data.last_name,data.email,data.comment,"h1","Thank You for your Message!",);
  });

  it("should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.contactUsGoodScenario(data.first_name,data.last_name," ",data.comment,"body","Error: Invalid email address",);
  });
});
