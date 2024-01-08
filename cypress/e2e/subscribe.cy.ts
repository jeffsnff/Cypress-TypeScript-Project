describe('Newsletter Subscribe Form', () => {
    beforeEach(()=> {
        cy.visit('http://localhost:3000')
    })

    it('Allow user to subscribe to email list', () => {
        // Grabbing the input field
        cy.getByData('email-input')
            .should('be.visible')
            // Inputting an email to test success
            .type('random@somemail.com')
        // Grabbing the submit button
        cy.getByData('submit-button')
            .click()
        // Confirming success message appears upon successful submit
        cy.getByData('success-message')
            .should('exist')
            .contains('random@somemail.com')
            .should('be.visible')
    })

    it('Subscribe form fails on invalid email', () => {
        cy.getByData('email-input')
            .should('be.visible')
            .type('Paola')
        cy.getByData('submit-button')
            .click()
        cy.getByData('success-message')
            .should('not.exist')
    })
})