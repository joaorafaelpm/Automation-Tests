/// <reference types="cypress" />

describe("test contact us form via Automation Test Store", () => {
  it("should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href$='contact']",).click();
    // A mesma forma  de fazer  o que foi feito acima,  porém usando xpath
    // cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.origin('https://automationteststore.com', () => {
        cy.get("#ContactUsFrm_first_name").type("Roberto");
        cy.get("#ContactUsFrm_email").type("roberto.fezzbear@example.com");
        cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
        cy.get("#ContactUsFrm_enquiry").type("Hello, this is a test message for the contact us form.",);
        cy.get("button[title=Submit]").click();
        
        cy.get(".mb40 > :nth-child(3)").should("have.text", "Your enquiry has been successfully sent to the store owner!");
        // expect(".mb40 > :nth-child(3)").to.have.text("Your enquiry has been successfully sent to the store owner!");
      });
    
  });

});
