context('Aliasing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200')
        cy.on('window:confirm', () => true)
        cy.get('.m-form__group').find('input[type=text]').first()
            .type('jharis')
        cy.get('.m-form__group').find('input[type=password]').first()
            .type('Bip$2018')
        cy.get('#m_login_signin_submit').click()
        cy.get('#m_aside_left_offcanvas_toggle').click()
    })
    it('fees review and profile', () => {
        //open the fee profile page 
        cy.contains('Practice Mgmt').click()
        cy.contains('Fees').click()
        cy.contains('Fee Profiles').click()

    })
})
