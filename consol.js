const { appendFile } = require("fs")

describe('Login page', () => {
    it('should successfully log in', () => {
      cy.visit('/login') // navigate to login page
  
      cy.get('#username') // find username input field
        .type('myusername') // enter username
  
      cy.get('#password') // find password input field
        .type('mypassword') // enter password
  
      cy.get('form').submit() // submit the login form
  
      cy.url().should('include', '/dashboard') // verify successful login by checking the URL of the next page
    })
  
    it('should display an error message for incorrect login details', () => {
      cy.visit('/login')
  
      cy.get('#username')
        .type('incorrectusername')
  
      cy.get('#password')
        .type('incorrectpassword')
  
      cy.get('form').submit()
  
      cy.get('.error-message').should('be.visible') // verify that an error message is displayed on the page
    })
  })

kkjjk
kkjjk
jkkjfjkkljkj


fsdkfj



dkjfskjkljf

adjkhkjh
fasdf


fadfdf