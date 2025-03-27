/// <reference types="cypress" />
import 'cypress-axe';

describe('Accessibility checks', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('Has no detectable a11y violations on load', () => {
    cy.checkA11y(null, null, (violations) => {
      if (violations.length) {
        cy.task('log', violations);
      }
      expect(violations).to.have.length(0);
    });
  });
});
