/// <reference types="cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");

    // Approach 1: Using variables to store the links (not recommended beacuse can break easily by the default cypress async nature)
    // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
    // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
    // makeupLink.click();
    // skincareLink.click();
    
    // Approach 2: Directly chaining cypress commands (not quietly recommended for more complex tests)
    // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup");
    // makeupLink.click();
    // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare");
    // skincareLink.click();

    // Approach 3: Using Cypress commands directly (recommended)
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
  });

  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();

    // Aproach 1: Using a variable to log header text (not recommended because of cypress async nature)
    // const header = cy.get("h1 .maintext");
    // cy.log(header.text())

    // Aproach 2: Using .then() to work with the yielded jQuery element (recommended)
    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log("Found header text: " + headerText);
      expect(headerText).is.eq('Makeup')
    });
  });

  it.only("Validate properties from contact us page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    // Cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form").find("#field_11").should("contain", "First name");

    // jQuery approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((formText) => {
      const firstNameText = formText.find("#field_11").text();
      expect(firstNameText).to.contain("First name");

      // Embedded command
      cy.get("#field_11").then((fnText) => {
        cy.log(fnText.text());
        cy.log(fnText);
      });
    });
   
  });
  
  
});
