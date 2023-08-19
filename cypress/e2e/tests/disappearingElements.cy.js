describe('Disappearing Elements Test', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:9292/disappearing_elements');
  });

  it('Should test disappearing and reappearing elements', () => {
    // Check if the "Home" link exists initially
    cy.get('li a').contains('Home').should('exist');

    // Check if the "Contact Us" link exists initially
    cy.get('li a').contains('Contact Us').should('exist');

    // Function to check for the existence of the "Gallery" link
    const checkGalleryLink = () => {
      return new Cypress.Promise((resolve) => {
        cy.get('li a').contains('Gallery').then(($link) => {
          resolve($link.length > 0); // Resolve with true if the link exists
        });
      });
    };

    // Use a custom JavaScript function with retries
    let retries = 0;
    const maxRetries = 10; // Maximum number of retries
    const retryInterval = 2000; // Retry interval in milliseconds

    const retryUntilGalleryLinkExists = () => {
      retries++;
      if (retries > maxRetries) {
        throw new Error('Gallery link did not appear.');
      }

      checkGalleryLink().then((linkExists) => {
        if (linkExists) {
          cy.log('Gallery link found.');
        } else {
          cy.log('Gallery link not found, retrying...');
          setTimeout(retryUntilGalleryLinkExists, retryInterval);
        }
      });
    };

    // Start the retry loop
    retryUntilGalleryLinkExists();
    cy.reload()
    
  });
});
