describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-testid=textbox-input]").type("5");
    cy.get("[data-testid=submit-button]").click();
    cy.get("[data-testid=result]").should("exist");
    cy.get("[data-testid=result-item]").should("exist");

    cy.get("[data-testid=result-item]").should("have.length", 5);
  });
});
