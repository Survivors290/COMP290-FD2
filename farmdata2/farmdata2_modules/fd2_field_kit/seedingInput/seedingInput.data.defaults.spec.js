describe('Tests the default contents of the Data section of the Seeding Input Form', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        
        // Cypress clears the local storage between each test.  
        // So we need to save it at the end of each test (see afterEach)
        // and then restore beore each test (here). 
        cy.restoreLocalStorage() 
        cy.visit('/farm/fd2-field-kit/seedingInput')
    })

    afterEach(() => {
        // Save the local storage at the end of each test so 
        // that it can be restored at the start of the next 
        cy.saveLocalStorage()
    })
    
    //Gabe
    it('', () => {

    })

    //Spencer
    it('', () => {

    })

    //Maximo
    it('', () => {

    })
})