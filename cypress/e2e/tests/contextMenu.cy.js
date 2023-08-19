describe('checkboxes', () => {
    it('passes', {baseUrl: 'http://127.0.0.1:9292'}, () => {
        cy.visit('/')
        cy.contains('Context Menu').click()
        cy.get('#hot-spot').rightclick()
        // Wait for the alert to appear and validate its text
         cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('You sected a context menu');
         })
    })
})