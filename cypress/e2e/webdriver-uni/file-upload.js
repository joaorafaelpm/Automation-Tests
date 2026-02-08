/// <reference types="cypress" />

describe("Test file upload via webdriveruni", () => {
  beforeEach(() => {
    cy.navigateTo_Webdriveruni_Homepage();
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
  })
  it("upload a file...", () => {
    cy.get('[name="filename"]').selectFile("cypress/fixtures/laptop.png");
    cy.get("#submit-button").click();
  });

  it("upload a no file...", () => {
    cy.get("#submit-button").click();
  });
});
