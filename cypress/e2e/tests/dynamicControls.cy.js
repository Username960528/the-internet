describe('dynamic controls test', () => {
    it('pases', () => {
        cy.visit('http://127.0.0.1:9292/dynamic_controls')
    })

    it('pases', function() {
        cy.visit('http://127.0.0.1:9292/dynamic_controls');
        cy.get('#checkbox > input').should('not.be.checked');
        cy.get('#checkbox').should('be.visible');
        cy.get('#checkbox > input').check();
        cy.get('#checkbox > input').should('be.checked');
        cy.get('#checkbox-example > button').click();
        cy.get('input').should('be.disabled');
        cy.get('#input-example > button').click();
        cy.get('input').should('be.enabled');
        cy.get('[data-cy="bla"]').type('qq');
        cy.get('#input-example > button').should('have.text', 'Disable');
        cy.get('#input-example').click();
        cy.get('#input-example > button').click();
        cy.get('input').should('be.disabled');
        cy.get('#checkbox-example > button').click();
        cy.get('body').click();
        cy.get('body').click();
        cy.get('#checkbox').should('not.be.checked');
        cy.get('#checkbox').check();
        cy.get('#message').click();
        cy.get('#message').click();
        cy.get('body').click();
        cy.get('#checkbox-example').click();
        cy.get('#message').click();
        cy.get('#message').should('have.text', 'It\'s back!');
    });
})