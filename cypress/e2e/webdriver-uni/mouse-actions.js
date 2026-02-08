/// <reference types="cypress" />

describe("Test mouse actions", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  })
  it("It should be able to drag and drop a draggable item", () => {
    // Inside the "trigger" method we can pass the event that we want to trigger in this case "mousedown" and then we can pass an object with the options that we want to use for this event, in this case we want to use the "which" option with the value of 1 to indicate that we want to use the left mouse button.
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    
    // And now we just move the mouse to the position that we want to drop the element, in this case we want to move it to the position of the element with the id "droppable" and then we just trigger the "mousemove" event and then we trigger the "mouseup" event to drop the element.
    cy.get("#droppable").trigger("mousemove").trigger("mouseup" , { force: true });
  });

  it("It should be able to perform a double mouse click", () => {
    cy.get("#double-click").dblclick();
  });

  it.only("It should be able to hold down the left mouse click button on a given element", () => {
    cy.get("#click-box").trigger('mousedown', { which: 1 }).then(($element) => {
      expect($element).to.have.css("background-color", "rgb(0, 255, 0)");
    });
  });

});
