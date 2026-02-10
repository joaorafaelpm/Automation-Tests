class AutoStore_Homepage_PO {
  accessHomepage() {
    cy.visit("https://www.automationteststore.com/", {timeout : 60000});
  }
  accessCustomUrl(url) {
    cy.visit(("https://www.automationteststore.com" + url), { timeout: 60000 });
  }

  clickOn_HairCare_Link() {
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  }
}
export default AutoStore_Homepage_PO;
