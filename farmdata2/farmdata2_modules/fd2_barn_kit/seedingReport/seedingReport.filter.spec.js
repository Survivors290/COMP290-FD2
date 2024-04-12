describe("Testing Seeding Type Filter", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-field-kit/seedingInput")
    })
    
    it("Check when 'All' is selected table only shows direct seedings and tray seedings", () => { 
        cy.get("[data-cy=labor-header]").should("have.text", "Labor")
    })

    it("Check when 'Direct' is selected table only shows direct seedings", () => {
        
    })

    it("Check when 'Tray' is selected table only shows tray seedings", () => { 
        
    })

    it("Checks that only seeding types are available in date range are shown in dropdown", () => { 
        
    })
} )