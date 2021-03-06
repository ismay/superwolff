const links = [
  { href: "/work/one", name: "One" },
  { href: "/work/two", name: "Two" },
  { href: "/work/three", name: "Three" },
];

describe("home", () => {
  it("renders as expected", () => {
    cy.visit("/");
    cy.injectAxe();

    // Ensure expected links are all present
    links.forEach(({ href, name }) => {
      cy.findByRole("link", { name }).should("have.attr", "href", href);
    });

    cy.checkA11y();
    cy.percySnapshot("home page renders as expected");
  });
});
