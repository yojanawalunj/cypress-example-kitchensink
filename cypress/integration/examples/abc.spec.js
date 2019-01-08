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
    it('login', () => {
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
        cy.wait(1000) //Waiting for household page to get load
        cy.get('button[type=submit]').contains('Create').click({force: true})
        cy.wait(1000) //Waiting for add activity dialog box
        cy.get('#addActivities').scrollIntoView().within(($form) => {
        cy.get('select[ng-reflect-name=household_activity_type_id] > option')
            .eq(8)
            .then(element => cy.get('select[ng-reflect-name=household_activity_type_id]').select(element.val()))
        cy.get('select[ng-reflect-name=event_id] > option')
            .eq(1)
            .then(element => cy.get('select[ng-reflect-name=event_id]').select(element.val()))
        cy.get('select[ng-reflect-name=response_id] > option')
            .eq(2)
            .then(element => cy.get('select[ng-reflect-name=response_id]').select(element.val()))    
        cy.get('select[ng-reflect-name=activity_classification_type_i] > option')
            .eq(1)
            .then(element => cy.get('select[ng-reflect-name=activity_classification_type_i]').select(element.val()))
        cy.get('select[ng-reflect-name=assignedto] > option')
            .eq(1)
            .then(element => cy.get('select[ng-reflect-name=assignedto]').select(element.val())) 
        // cy.get('select[ng-reflect-name=status]').select('Open')
        cy.get('select[ng-reflect-name=status]')
            .find('option[value="2: 1"]') // this will return both elements
            .then($els => $els.get(0).setAttribute('selected', "selected"))
                 
        cy.get('textarea[ng-reflect-name=notes]').last().type('Test_notes')
        cy.wait(1000) //wait until text is entered
        cy.get('my-date-picker[ng-reflect-name=duedate]').within(($form) => {            
            cy.get('.icon-mydpcalendar').click()
            cy.get('.currmonth').within(($form) => {            
                cy.contains('5').click()                
            })
        })
        cy.wait(300) //wait till date get entered
        cy.get('.dropzone').dropFile('fixture:Bug_sheet_14_08.xlsx')
      
        cy.get('.btn-secondary').click()

    })
})
