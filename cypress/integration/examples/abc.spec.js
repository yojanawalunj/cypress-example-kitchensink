context('Aliasing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200')
        cy.on('window:confirm', () => true)
        cy.get('.m-form__group').find('input[type=text]').first()
            .type('jharis')
        cy.get('.m-form__group').find('input[type=password]').first()
            .type('Bip$2018')
        cy.wait(8000)
        cy.get('#m_login_signin_submit').click()
        cy.wait(8000)
       
    })
    it('fees review and profile', () => {
        //open the fee profile page 
        cy.wait(3000)

    })
})
