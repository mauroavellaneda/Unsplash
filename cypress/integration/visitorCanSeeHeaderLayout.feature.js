describe("Website interface", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders header component", () => {
    cy.get('[data-cy="header-container"]').should("be.visible");
  });
  it("shows title on navbar", () => {
    cy.get('[data-cy="header-title"]').should("contain", "Unsplash Challenge");
  });
  it("applies CSS properties", () => {
    cy.get('[data-cy="header-container"]').should(
      "have.css",
      "box-shadow",
      "rgba(0, 0, 0, 0.08) 0px 4px 12px 0px, rgba(1, 0, 0, 0.1) 0px 0px 1px 0px"
    );
    it("should contain href attributes", () => {
      cy.get('[data-cy="header-title"]').should(
        "have.attr",
        "href",
        "https://github.com/mauroavellaneda"
      );
    });
    cy.get('[data-cy="search-bar"]')
      .should("be.visible")
      .should("have.css", "font-family")
      .and("match", /Arial/);
  });
  it("should render a search bar", () => {
    cy.get('[data-cy="search-bar"]').should("be.visible");
    cy.get('[data-cy="search-bar"]').click();
    cy.get('[data-cy="search-bar"]').should("have.focus");
    cy.get('[data-cy="search-wrapper"]').within(() => {
      cy.get('[data-cy="search-bar"]').should(
        "have.attr",
        "placeholder",
        "Search photos"
      );
    });
  });
});
