describe("test report table", () => {
    beforeEach(() => {
        cy.login("manager1","farmdata2")
        cy.visit("/farm/fd2-school/fd2")
    })
    it("click generate report button, and check headers", () => {
        cy.get("[data-cy=generate-button]").click()
        cy.get("[data-cy=report-table]")
        cy.get("[data-cy=table-headers]").children().should("has.text", "IDDateAreaCropYieldUnits")
        cy.get("[data-cy=table-headers]").children().should("have.length","7")
    })
})