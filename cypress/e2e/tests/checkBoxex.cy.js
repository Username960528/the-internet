describe('checkboxes', () => {
    it('passes', {baseUrl: 'http://127.0.0.1:9292'}, () => {
        cy.visit('/')
        // открываем страницу
        cy.contains('Checkboxes').click()
        // проверяем что чекбокс не стоит
        cy.get('input[type="checkbox"]:eq(0)').should('not.be.checked');
        // проверяем что второй чекбокс стоит
        cy.get('[type="checkbox"]:eq(1)').should('be.checked');
        // убираем чек бокс
        cy.get('input[type="checkbox"]:eq(1)').uncheck();
        // смотрим что не стоит
        cy.get('[type="checkbox"]:eq(1)').should('not.be.checked');
        // ставим обратно
        cy.get('[type="checkbox"]').check()
    })
})
