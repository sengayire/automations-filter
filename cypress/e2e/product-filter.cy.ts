
describe('Product filter component', () => {
  beforeEach(() => {
 cy.visit('http://localhost:3000/');

  })
  it('should filter items when extract button clicked', () => {
    cy.get('[data-cy="extract-button"]').click();
    cy.get('[data-cy="extract-button"]').should('have.length.greaterThan', 0);
    cy.get('[data-cy="extract-button"]').should('contain.text', "Extract Data");
    cy.get('[data-cy="extract-button"]').should('have.css', 'color', 'rgb(73, 46, 135)');
  });
  it('should filter items when monitor button clicked', () => {
    cy.get('[data-cy="monitor-button"]').click();
    cy.get('[data-cy="monitor-button"]').should('have.length.greaterThan', 0);
    cy.get('[data-cy="monitor-button"]').should('contain.text', "Monitor");
    cy.get('[data-cy="monitor-button"]').should('have.css', 'color', 'rgb(73, 46, 135)');
  });
   it('should filter items by site', () => {
    cy.get('[data-cy="filter-site"]').click();
    cy.get('[data-cy="filter-site"]').should('have.length.greaterThan', 0);
    cy.get('[data-cy="filter-site"]').should('contain.text', "Filter by Site");
    
    cy.get('[data-cy="search-input"]').type('LinkedIn');
    cy.get('[data-cy="site-item"]').click();

  });
   it('should filter items by category', () => {
    cy.get('[data-cy="filter-category"]').click();
    cy.get('[data-cy="filter-category"]').should('have.length.greaterThan', 0);
    cy.get('[data-cy="filter-category"]').should('contain.text', "Filter by Category");
    
    cy.get('[data-cy="category-item"]').first().click();

  });
   it('should filter when multiple options selected', () => {
    cy.get('[data-cy="extract-button"]').click();
    cy.get('[data-cy="monitor-button"]').click();
    cy.get('[data-cy="filter-site"]').click();
    
    cy.get('[data-cy="search-input"]').type('LinkedIn');
    cy.get('[data-cy="site-item"]').click();

  });
});
