describe('Index page', () => {
  describe('when is closed', () => {
    beforeEach(() => {
      cy.setCookie('x-is-open', 'false');
      cy.visit('/');
    });
  
    it('should have a disabled cart button', () => {
      cy.get('[aria-label=Carrinho]').should('not.be.enabled');
    });
  
    it('should find products', () => {
      cy.task('getProductCount').then((productCount) => {
        cy.get('[data-testid=product]').should('have.length', productCount);
      });
    });
  });

  describe('when is open', () => {
    beforeEach(() => {
      cy.setCookie('x-is-open', 'true');
      cy.visit('/');
    });

    it('should have an enabled cart button', () => {
      cy.get('[aria-label=Carrinho]').should('be.enabled');
    });

    it('should find products', () => {
      cy.task('getProductCount').then((productCount) => {
        cy.get('[data-testid=product]').should('have.length', productCount);
      });
    });

    it.only('should display empty cart', () => {
      cy.get('[role=dialog]').should('not.exist');
      cy.get('[aria-label=Carrinho]').click();

      cy.wait(200);

      cy.findByLabelText('Limpar').should('be.disabled');
      // cy.get('button').contains('Continuar no Zap').should('be.disabled');

      // cy.get('[role=dialog]').should('exist');
      // cy.get('[aria-label="Fechar carrinho"]').click();
    });
  });
});