// This file tests the default contents of the Seeding Report page in the Barn
const dayjs = require("dayjs")
describe('"Seeding Report Default Content and Functionality', () => {

    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.restoreLocalStorage();
        cy.visit('/farm/fd2-barn-kit/seedingReport')
    })

    it("Check the page header", () => {
        cy.get("[data-cy=page-header]").should("have.text","Seeding Report")
    })
   
    it("Check the Generate Report button", () => {
        cy.get("[data-cy=generate-rpt-btn]").should("have.text","Generate Report")
        cy.get("[data-cy=generate-rpt-btn]").should("not.be.disabled")
    })

    it("Check the Set Dates label", () => {
        cy.get("[data-cy=set-dates-label]").should("exist")
    })
    

    it("Check the start date", () => {
        cy.get('[data-cy=start-date-select]>[data-cy=date-select]').should("have.value", "2024-01-01")

    })
        it("Check the end date", () => {
            let today = dayjs().format("YYYY-MM-DD")
            cy.get('[data-cy=end-date-select]>[data-cy=date-select]').should("have.value", today)

        })
        it("Check the report if its exists and is visible", () => {
            cy.get("[data-cy=report-table]").should("not.exist")

        })
})
   

    
