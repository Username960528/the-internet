describe('Drag and Drop Test', () => {
  it('allows dragging and dropping items', () => {
    cy.visit('/'); // Replace with the URL of your React app
    cy.get(':nth-child(11) > a').realClick()
    
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('recorded dropdown', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://127.0.0.1:9292/dropdown');
    cy.get('#dropdown').select('1');
    cy.get('.example').should('be.visible');
    cy.get('#dropdown').should('be.enabled');
    cy.get('#dropdown').select('2');
    cy.get('#dropdown').should('have.id', 'dropdown');
    cy.get('#dropdown').select('1');
    /* ==== End Cypress Studio ==== */
  });
})