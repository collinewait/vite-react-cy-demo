describe('CI Demo', () => {
  beforeEach(function () {
    cy.visit('http://localhost:4001/')
  })
  it('shows a message from the api', () => {
    cy.get('#message').should('have.text', 'Hello world message from api')
  })
})
