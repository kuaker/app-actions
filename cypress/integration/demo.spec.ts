describe('Demo Test', () => {
  it('Should visit a website', () => {
    //cy.visit('https://example.cypress.io/todo')
    cy.visitLoginPage()
    cy.login('username', 'password')
  })
})
