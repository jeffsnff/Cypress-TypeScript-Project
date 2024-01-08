describe('home page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })


  it('H1 contains correct text', () => {
    cy
      cy.getByData('hero-heading')
      .should('be.visible')
      .contains('Testing Next.js Applications with Cypress')
  })

  it('Description bullets are present', () => {
    cy.get('dt').eq(0).contains('4 Courses')
    cy.get('dt').eq(1).contains('25+ Lessons')
    cy.get('dt').eq(2).contains('Free and Open Source')
  })
})
