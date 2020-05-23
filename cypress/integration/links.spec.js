import { INSTAGRAM_URL, WHATSAPP_URL } from '../../src/constants';

describe('Links', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('instagram link', () => {
    it('should have a href and target blank', () => {
      const instagramLink = cy.get('[data-testid=instagram]');

      instagramLink.should('have.attr', 'target', '_blank');
      instagramLink.should('have.attr', 'href', INSTAGRAM_URL);
    });
  });

  describe('whatsapp link', () => {
    it('should have a href and target blank', () => {
      const instagramLink = cy.get('[data-testid=whatsapp]');

      instagramLink.should('have.attr', 'target', '_blank');
      instagramLink.should('have.attr', 'href', WHATSAPP_URL);
    });
  });
});