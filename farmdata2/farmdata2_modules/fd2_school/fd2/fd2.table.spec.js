describe("test report table", () => {
    beforeEach(() => {
        cy.login("manager1","farmdata2")
        cy.visit("/farm/fd2-school/fd2")
    })
    it("click generate report button, and check headers", () => {
        cy.get("[data-cy=generate-button]").click()
        cy.get("[data-cy=report-table]")
        cy.get("[data-cy=table-headers]").children(0).should("has.text", "IDDateAreaCropYieldUnits")
    })
})