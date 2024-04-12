const dayjs = require('dayjs')

describe("Test Transplanting Report Defaults", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-barn-kit/transplantingReport")
    })

    it('Check page contains the header "Transplanting Report"', () => {
        cy.get("[data-cy=test-page-header]").should("exist")
    })

    it('Check page contains a section labeled "Set Dates"', () => {
        cy.get("[data-cy=test-set-date]").should("exist")
    })

    
    it('Check button has the label "Generate Report" and is enabled', () => {
        cy.get("[data-cy=generate-rpt-btn]").should("be.visible")
        cy.get("[data-cy=generate-rpt-btn]").should("have.text", "Generate Report")
    })

    it('Check default start date is the first day of the current year', () => {
        cy.get("[data-cy=date-range-selection]").should("exist").type(dayjs().startOf('year').format("YYYY-MM-DD"))
    });    

    it('Check default end date is the current date', () => {
        cy.get("[data-cy=date-range-selection]").should("exist").type(dayjs().format("YYYY-MM-DD"))
    })

    it('Check the remainder of the report is not visible or does not exist', () => {
        cy.get("[data-cy=test-not-visible]").should("not.exist")
    })
})
