describe('Feedback Test', () => {
  it('Should submit feedback', () => {
    cy.visitFeedbackpage()

    cy.fixture('feedbackData').then(({ name, email, subject, message }) => {
      cy.submitFeedback(name, email, subject, message)
    })
  })
})
