describe("test report table", () => {
    beforeEach(() => {
        cy.login("manager1","farmdata2")
        cy.visit("/farm/fd2-school/fd2")
    })
    it("click generate report button, and check headers", () => {
        cy.get("[data-cy=generate-button]").click()
        cy.get("[data-cy=report-table]")
        cy.get("[data-cy=h0]").should("has.text", "ID")
        cy.get("[data-cy=h1]").should("has.text", "Date")
        cy.get("[data-cy=h2]").should("has.text", "Area")
        cy.get("[data-cy=h3]").should("has.text", "Crop")
        cy.get("[data-cy=h4]").should("has.text", "Yield")
        cy.get("[data-cy=h5]").should("has.text", "Units")
        cy.get("[data-cy=table-headers]").children().should("have.length","7")
    })
    it("Check table values when changing crop selection", () => {
        cy.get("[data-cy=generate-button]").click()

    })
})