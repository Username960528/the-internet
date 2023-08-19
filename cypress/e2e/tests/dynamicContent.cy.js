// cypress/integration/dynamic_content_spec.js
describe('Dynamic Content Page', () => {
    it('loads and displays dynamic content', () => {
      cy.visit('https://the-internet.herokuapp.com/dynamic_content'); // Adjust the URL as needed
  
      // Check if the page contains the expected elements
      cy.get('.example h3').should('contain', 'Dynamic Content');
      cy.get('.example p').should('contain', 'This example demonstrates the ever-evolving nature of content');
      
      // Check if the static content is displayed when the URL query parameter is present
      cy.visit('https://the-internet.herokuapp.com/dynamic_content?with_content=static');
      cy.get('.example h3').should('contain', 'Dynamic Content');
      cy.get('.example p').should('contain', 'This example demonstrates the ever-evolving nature of content');
      
      // Check if images are displayed
      cy.get('.large-2 img').should('have.length', 3); // Check if there are 2 images
      
      // You can add more specific tests based on your page's behavior
    });
  });
  