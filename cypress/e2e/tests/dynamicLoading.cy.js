describe('dynamic loading', () => {
    it('element on page is hidden', () => {
        cy.visit('http://127.0.0.1:9292/dynamic_loading')
        cy.get('[href="/dynamic_loading/1"]').click()
        cy.get('#finish').should('have.css', 'display', 'none')
        cy.get('#start button').click();
        cy.get('#finish').should('have.css', ['display'])
        cy.wait(2000)
        cy.get('#loading').should('have.css', 'display', 'none')
        cy.get('#finish h4').should('have.text', 'Hello World!')
    })
    it('example 2', () => {
        cy.visit('http://127.0.0.1:9292/dynamic_loading')
        cy.get('[href="/dynamic_loading/2"]').click()
        cy.get('#start button').click();
        cy.wait(3000)
        cy.get('#finish h4').should('have.text', 'Hello World!')
        cy.get('#finish').should('have.css', ['display'])

    })
})