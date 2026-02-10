class HomePage_PO {
  visitHomePage() {
    cy.visit(Cypress.env("webdriveruni_url") , {timeout : 60000});
  }
  visitCustomUrl(url) {
    cy.visit((Cypress.env("webdriveruni_url") + url), { timeout: 60000 });
  }

  clickOn_ContactUs_Button() {
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true }, {timeout : 8000});
  }
}

export default HomePage_PO;