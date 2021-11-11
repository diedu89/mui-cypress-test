// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  it("renders the app", function () {
    const date = "11102021";
    cy.get("input.MuiInputBase-input").clear().type(date);
  });
});
