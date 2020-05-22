describe('Index page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should find products', () => {
    cy.task('getProductCount').then((productCount) => {
      cy.get('[data-testid=product]').should('have.length', productCount);
    });
  });
});