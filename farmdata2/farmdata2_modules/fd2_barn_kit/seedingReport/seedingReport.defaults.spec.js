const dayjs = require('dayjs')

describe("Test Seeding Report Dates", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-barn-kit/seedingReport")
        cy.waitForPage()
    })

    it('Check first date appearing in the table is in the range for the report"', () => {
        cy.get("[data-cy=start-date-select]").type("2020-04-06")
        cy.get("[data-cy=end-date-select]").type("2024-02-20")
        cy.get("[data-cy=generate-rpt-btn]").click()
        let currentTimestamp = null
        const startTimestamp = dayjs('2020-04-06').unix()
        const endTimestamp = dayjs('2024-02-20"').unix()

        cy.get('[data-cy=report-table] tr:first-child td:nth-child(2)')
            .invoke('text')
            .then(dateText => {
                currentTimestamp = dayjs(dateText).unix()
                expect(currentTimestamp).to.be.within(startTimestamp, endTimestamp)
            })
    })
    
    
    it('Check last date appearing in the table is in the range for the report', () => {
        cy.get("[data-cy=start-date-select]").type("2020-04-06")
        cy.get("[data-cy=end-date-select]").type("2024-02-20")
        cy.get("[data-cy=generate-rpt-btn]").click()
        let currentTimestamp = null
        const startTimestamp = dayjs('2020-04-06').unix()
        const endTimestamp = dayjs('2024-02-20"').unix()

        cy.get('[data-cy=report-table] tr:last-child td:nth-child(2)')
            .invoke('text')
            .then(dateText => {
                currentTimestamp = dayjs(dateText).unix()
                expect(currentTimestamp).to.be.within(startTimestamp, endTimestamp)
            })
    })

    it('Check rows in the table appear in sorted order.', () => {
        cy.get("[data-cy=start-date-select]").type("2020-04-06")
        cy.get("[data-cy=end-date-select]").type("2024-02-20")
        cy.get("[data-cy=generate-rpt-btn]").click()
        const n = cy.get('[data-cy=report-table]').find('tr').its('length')
        let curr = null
        let prev = null

        for (let r = 0; r < n - 1; r ++) {
            cy.get('[data-cy=r' + r + 'c0')
            .invoke('text')
            .then(dateText => {
                prev = dayjs(dateText).unix()
            })
            
            cy.get('[data-cy=r' + (r + 1)+ 'c0')
            .invoke('text')
            .then(dateText => {
                curr = dayjs(dateText).unix()
            })
        }

        expect(prev <= curr)
    })

    it('Check “No Logs” message is displayed if there are no seeding logs in the date range', () => {
        cy.get('[data-cy=start-date-select]').type('2024-01-01')
        cy.get('[data-cy=end-date-select]').type('2024-04-19')
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy=no-logs-message]').should('be.visible')
    })

    it('Check table is not visible if there are no seeding logs in the date range', () => {
        cy.get('[data-cy=start-date-select]').type('2024-01-01')
        cy.get('[data-cy=end-date-select]').type('2024-04-19')
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy=report-table]').should('not.exist')
    })
})