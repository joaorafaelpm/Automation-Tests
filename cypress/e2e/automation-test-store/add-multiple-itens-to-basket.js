/// <reference types="cypress" />

describe("Add multiple itens to basket", () => {
  before(() => {
    cy.fixture("products").then((data) => {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });
  it("Add specific itens to basket", () => {
    globalThis.data.productName.forEach((name) =>{
        cy.addProductToBasket(name);
    })
    cy.get(".dropdown-toggle > .fa").click();
  });
});
