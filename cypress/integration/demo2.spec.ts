describe('Demo Test', () => {
  it('Should visit a website', () => {
    cy.visitLoginPage()
    cy.waitForSeconds(2)

    cy.fixture('loginData').then(({ username, password }) => {
      cy.login(username, password)
    })
  })
})
