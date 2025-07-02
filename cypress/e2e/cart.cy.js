describe('Cart Tests', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce');
    cy.addToCart('Sauce Labs Backpack');
    cy.addToCart('Sauce Labs Bike Light');
  });

  it('should add and remove products from the cart', () => {
    cy.get('.shopping_cart_badge').should('contain', '2');
    cy.visit('/cart.html');
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.cart_item').should('have.length', 1);
  });

  it('should navigate to checkout from cart', () => {
    cy.visit('/cart.html');
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', 'checkout-step-one.html');
  });
});