describe('Feedback Test', () => {
  it('Should submit feedback', () => {
    cy.visitFeedbackpage()
    cy.submitFeedback(
      'Fernando',
      'test@gmail.com',
      'mi subject',
      'este es mi mensaje'
    )
  })
})
