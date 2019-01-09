/**
 * @author yojana.walunj@itexecutors.com Yojana Walunj
 * @copyright 2018,BIP Wealth
 * @version 0.4
 * @since 0.0.1
 */
context('Aliasing', () => {
    beforeEach(() => {
        cy.login()
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
        cy.get('input[type=search]')
            .type('Cypress testing')
            .then((val) => {
                if (val){
                    cy.get('.fa-pencil-alt').first().click()  
                    }
                })
        
        // cy.get('.fa-pencil-alt').first().click()       
        cy.get('my-date-picker[ng-reflect-name=dateOfValuation]').within(($form) => {
            cy.get('.icon-mydpcalendar').click()
            cy.get('.currmonth').within(($form) => {
                cy.contains('5').click({force: true})
                })
            })
        cy.get('input[ng-reflect-name=valuation]').clear().type('20')
        cy.get('input[ng-reflect-name=comments]').clear().type('Cypress edit')
        cy.get('.btn-primary').contains('Submit').click() 
        cy.reload()       

        }) 
    }) 
