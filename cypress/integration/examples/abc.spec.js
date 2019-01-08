context('Aliasing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200')
        cy.on('window:confirm', () => true)
        cy.get('.m-form__group').find('input[type=text]').first()
            .type('jharris')
        cy.get('.m-form__group').find('input[type=password]').first()
            .type('Bip$2018')
        cy.wait(8000)
        cy.get('#m_login_signin_submit').click()
        cy.wait(8000)
        cy.get('#m_aside_left_offcanvas_toggle').click()
       
    })
    it('fees review and profile', () => {
        //open the fee profile page 
        cy.wait(3000)
        cy.contains('Clients').click()
        cy.get('input[type=search]')//search for the household and open that client page 
            .type('Parikh, Nishith')
            .then((val) => {
                if (val) {
                    cy.get('.sorting_1').contains('Parikh, Nishith').click()
                }
            })

    })
})
