describe('Broken Image', () => {
    it('passes', () => {
        cy.visit("http://127.0.0.1:9292")
        cy.get('[href="/broken_images"]').click()
        // 1. Select all image (`img`) elements on the page.
        cy.get('img').each(($img) => {
         // 2. Scroll the image into view and check if it's visible.
          cy.wrap($img).scrollIntoView().should('be.visible');
  
         // 3. Ensure the natural width and height is greater than 0.
         expect($img[0].naturalWidth).to.be.greaterThan(0);
         expect($img[0].naturalHeight).to.be.greaterThan(0);
  });
    })
}
)