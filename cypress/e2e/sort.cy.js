describe('Product Sorting Tests', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce');
  });

  it('should sort products by Name (A to Z)', () => {
    cy.get('[data-test="product_sort_container"]').select('az');
    cy.get('.inventory_item_name').first().should('contain', 'Sauce Labs Backpack');
  });

  it('should sort products by Price (low to high)', () => {
    cy.get('[data-test="product_sort_container"]').select('lohi');
    cy.get('.inventory_item_price').first().should('contain', '$7.99');
  });
});