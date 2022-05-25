declare namespace Cypress {
  interface Chainable {
    /**
     * @param username - takes username or id
     * @param password - takes user password
     */
    login(username: string, password: string)

    /**
     * @param name - takes name of the message author
     * @param email - takes email
     * @param subject - takes the subjects of the message
     * @param message - the message of the author
     */
    submitFeedback(
      name: string,
      email: string,
      subject: string,
      message: string
    ): Chainable<Element>
  }
}

Cypress.Commands.add('submitFeedback', (name, email, subject, message) => {
  cy.get('#name').type(name)
  cy.get('#email').type(email)
  cy.get('#subject').type(subject)
  cy.get('#comment').type(message)
  cy.contains('Send Message').click()
})

Cypress.Commands.add('login', (username, password) => {
  cy.get('#user_login').type(username)
  cy.get('#user_password').type(password)
  cy.contains('Sign in').click()
})
