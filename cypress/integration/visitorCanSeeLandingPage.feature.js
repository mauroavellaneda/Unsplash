describe("Landing page interface", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders landing page", () => {
    cy.get('[data-cy="landing"]', { timeout: 10000 }).should("be.visible");
  });

  it("finds 10 images on load", () => {
    cy.get('[data-cy="landing"]').children().should("have.length", 10);
  });

  it("should scroll to bottom and load more images", () => {
    cy.scrollTo("bottom", { duration: 5000 });
    cy.get('[data-cy="landing"]').children().should("have.length", 20);
  });

  it("modal opens on click, finds elements within and closes", () => {
    cy.get('[data-cy="image"]').should("be.visible");
    cy.get('[data-cy="image"]').click({
      multiple: true,
      force: true,
    });
    cy.get('[data-cy="modal"]').should("be.visible");
    cy.get('[data-cy="modal-name"]').should("be.visible");
    cy.get('[data-cy="avatar"]').should("be.visible");
    cy.get('[data-cy="modal-image"]').should("be.visible");
    cy.get('[data-cy="modal-close-button"]').contains("Close").click();
    cy.get('[data-cy="modal"]').should("not.exist");
  });
});
