    describe('challengingDOM', () => {
        it('passes', () => {
            cy.visit('http://127.0.0.1:9292')
            cy.contains('clicks buttons and checks canvas content').click()
            // Clicking on the first button
            cy.get('#buttonId1').click();

            // Clicking on the second button
            cy.get('.button.alert').click();

            // Clicking on the third button
            cy.get('.button.success').click();

        })
    })