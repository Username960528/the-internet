describe('Add/Remove Elements', () => {
    it('passes', {baseUrl: 'http://127.0.0.1:9292'}, () => {
        cy.visit('/')
        cy.contains('Add/Remove Elements').click()
        cy.contains('Add Element').click()
        cy.contains('Delete').click()
        cy.contains('Add Element').click().click().click()

        /* ==== Generated with Cypress Studio ==== */
        cy.get('#elements > :nth-child(3)').click();
        cy.get('#elements > :nth-child(2)').click();
        cy.get('.added-manually').click();
        cy.get('button').click();
        cy.get('.added-manually').should('be.enabled');
        cy.get('.added-manually').click();
        cy.contains('Add Element').click()
        cy.contains('Add Element').click()
        cy.contains('Add Element').click()
        cy.contains('Add Element').click()
        cy.contains('Add Element').click()
        // Assuming the buttons have a common class
        cy.get('.added-manually').each(($button) => {
            // Click on each button to trigger the delete action
            cy.wrap($button).click();
        })
    })
})
