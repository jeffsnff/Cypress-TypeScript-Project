describe('home page test', () => {
  it('H1 contains correct text', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').contains('Testing Next.js Applications with Cypress')
  })
})
