/// <reference types="cypress" />

describe("Test file upload via webdriveruni", () => {
  it("upload a file...", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get('[name="filename"]').selectFile("cypress/fixtures/laptop.png");
    cy.get("#submit-button").click();
  });

  it("upload a no file...", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#submit-button").click();
  });
});
