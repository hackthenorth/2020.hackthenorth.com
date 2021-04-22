describe("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("shows itself", () => {
    cy.get(".App").should("not.be.empty");
    cy.percySnapshot("App test", { widths: [768] });
  });
});
