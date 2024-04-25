describe('"Seeding Report Default Content and Functionality', () => {

    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-barn-kit/seedingReport')
        
        cy.get("[data-cy=page-header]").should("have.text","Seeding Report")
        cy.get("[data-cy=set-dates-label]").should("exist")
        cy.get("[data-cy=generate-rpt-btn]").should("have.text","Generate Report")
        cy.get("[data-cy=generate-rpt-btn]").should("not.be.disabled")
    })

    it("Check the page header", () => {
   
    })
    it("Check the Set Dates label", () => {

    })
    it("Check the Generate Report button", () => {

    })
})
   

    
