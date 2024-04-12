const dayjs = require('dayjs')

describe("Test Seeding Report Dates", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-barn-kit/seedingReport")
        cy.waitForPage()
        cy.get("[data-cy=start-date-select]").type("2020-04-06")
        cy.get("[data-cy=end-date-select]").type("2024-02-20")
    })

    it('Check first date appearing in the table is in the range for the report"', () => {
        cy.get("[data-cy=generate-rpt-btn]").click()
    })
    // it('Check page contains a section labeled "Set Dates"', () => {
    //     cy.get("[data-cy=test-set-date]").should("exist")
    // })


    // it('Check button has the label "Generate Report" and is enabled', () => {
    //     cy.get("[data-cy=generate-rpt-btn]").should("be.visible")
    //     cy.get("[data-cy=generate-rpt-btn]").should("have.text", "Generate Report")
    // })

    // it('Check default start date is the first day of the current year', () => {
    //     cy.get("[data-cy=date-range-selection]").should("exist").type(dayjs().startOf('year').format("YYYY-MM-DD"))
    // });    

    // it('Check default end date is the current date', () => {
    //     cy.get("[data-cy=date-range-selection]").should("exist").type(dayjs().format("YYYY-MM-DD"))
    // })

    // it('Check the remainder of the report is not visible or does not exist', () => {
    //     cy.get("[data-cy=test-not-visible]").should("not.exist")
    // })
})