describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypres.io')

    cy.contains('type').click()

    //get the url, check that it includes /commands/actions
    cy.url().should('include','/commands/actions')

    //get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    //verify that the value has been updated
    cy.get('.action-email').should('have.value','fake@email.com')
  })
})

