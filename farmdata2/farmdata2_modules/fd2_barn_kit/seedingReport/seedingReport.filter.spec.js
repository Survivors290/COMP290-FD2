describe("Testing Seeding Type Filter", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("farm/fd2-barn-kit/seedingReport")
        cy.waitForPage()
    })
    
    it("Check when 'All' is selected table only shows direct seedings and tray seedings", () => { //chloe
        cy.get('[data-cy=start-date-select]').type('2020-05-05')
        cy.get('[data-cy=end-date-select]').type('2020-05-15')
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get("[data-cy=td-r2c3").should("have.text","Direct     ")
        cy.get("[data-cy=td-r11c3").should("have.text","Tray     ")
    })

    it("Check when 'Direct' is selected table only shows direct seedings", () => { //ryan

    })

    it("Check when 'Tray' is selected table only shows tray seedings", () => { //ryan
        
    })

    it("Checks that only the seeding types available in date range are shown in dropdown", () => { //Megan
        cy.get("[data-cy=start-date-select]").type("2020-05-05")
        cy.get("[data-cy=end-date-select]").type("2020-05-15")
        cy.get('[data-cy=generate-rpt-btn]').click()
    })
} )