describe('Product Tests', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce');
  });

  it('should display all products', () => {
    cy.get('.inventory_item').should('have.length', 6);
  });

  it('should display product details', () => {
    cy.contains('Sauce Labs Backpack').click();
    cy.get('.inventory_details_name').should('contain', 'Backpack');
  });
});