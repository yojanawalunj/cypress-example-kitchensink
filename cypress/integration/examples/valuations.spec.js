
context('Aliasing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200')
        cy.on('window:confirm', () => true)
        cy.get('.m-form__group').find('input[type=text]').first()
            .type('jharris')
        cy.get('.m-form__group').find('input[type=password]').first()
            .type('Bios$2018')
        
        cy.get('#m_login_signin_submit').click()
        
        cy.get('#m_aside_left_offcanvas_toggle').click()
    })   
    it('Add valuations to Private Equity', () => {
        cy.contains('Private Investments').click()
        cy.get('input[type=search]')
            .type('BIP Capital PAN Convertible Note, LLC')
            .then((val) => {
                if (val){
                cy.get('.sorting_1').contains('BIP Capital PAN Convertible Note, LLC').click()
                    }
                })
        //manage valuations by click on manage valuations button        
        cy.get('.btn-primary').contains('Valuations').click()        
        cy.visit('http://localhost:4200/private-equity/valuations/valuations-by-investor/154')
        cy.get('.m-btn--pill').contains('Manage').click()
        cy.visit('http://localhost:4200/private-equity/valuations/154')
        //add valuations by opening add valuation model and entered all data to add it
        cy.get('.m-btn--pill').contains('Add Valuation').click()
       
        cy.get('my-date-picker[ng-reflect-name=dateOfValuation]').within(($form) => {
            cy.get('.icon-mydpcalendar').click()
            cy.get('.currmonth').within(($form) => {
                cy.contains('8').click({force: true})
                })
            })
        cy.get('input[ng-reflect-name=valuation]').type('10')
        cy.get('input[ng-reflect-name=comments]').type('Cypress testing')
        cy.get('.btn-primary').contains('Submit').click()//click on submit button to save the data
            

        }) 
    }) 
