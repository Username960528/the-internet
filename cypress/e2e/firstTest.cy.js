describe('A/B spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:9292/?optimizely_disable=true')
    cy.contains('A/B Testing')
  })
})