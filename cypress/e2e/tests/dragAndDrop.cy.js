  describe('Drag and Drop Test', () => {
    it('allows dragging and dropping items', () => {
      cy.visit('/'); // Replace with the URL of your React app
      cy.get(':nth-child(10) > a').realClick()

  
      // Get the draggable elements
      cy.get('[draggable="true"]').should('have.length', 2).as('draggables');
  
      // Swap the positions of the first and second items
      cy.get('#column-a').drag('#column-b', { force: true }); // Add the { force: true } option
  

    });
  });
  