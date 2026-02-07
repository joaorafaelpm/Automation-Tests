/// <reference types="cypress" />
describe("Handling data via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });

  it("calculate and assert the total age of all users", () => {
    let userDetails = [];
    let numb = 0;

    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        let i;
        for (i = 0; i < userDetails.length; i++) {
            if(Number(userDetails[i])) {
                numb += Number(userDetails[i]);
            }
        }
        cy.log("The total age of all users is: " + numb);
        expect(numb).to.eq(322);
      });
  });

  it.only("calculate and assert the age of a user based on last name", () => {
    // For we looking for the last name we first need to get the second column of the table which contains the last names of the users
    // So we use the nth-child selector to get the second column of the table, then we loop through each element in that column and check if it includes the last name we are looking for, if it does then we get the age of that user which is in the next sibling element and assert that it is equal to the expected age.
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el,index, $list) => {
        const text = $el.text(); 
        if (text.includes("Woods")) {
            // Here we first get the current element which is the last name, then we use .next() to get the next sibling element which contains the age of the user.
            cy.get("#thumbnail-1 tr td:nth-child(2)").eq(index).next().then((age) => {
                const userAge = age.text();
                expect(userAge).to.eq("80");
            });
        }
    })
     
  });
});
