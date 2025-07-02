describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should allow a valid user to log in', () => {
    cy.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
  });

  it('should not allow login with invalid credentials', () => {
    cy.login('invalid_user', 'invalid_pass');
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });

  it('should show error for locked out user', () => {
    cy.login('locked_out_user', 'secret_sauce');
    cy.get('[data-test="error"]').should('be.visible');
  });
});