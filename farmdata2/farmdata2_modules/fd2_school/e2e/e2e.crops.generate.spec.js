describe("Test the harvest report generation", () => {
    beforeEach( () => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })

    it("Check the report header before and after clicking the generate report button", () => {
        cy.get("[data-cy=report-header]").should("not.exist")
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=report-header]").should("be.visible")
    })

    it("Check the additional information after clicking generate report", () => {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=farm-field]").should("have.text", "Farm:Sample Farm")
        cy.get("[data-cy=user-field]").should("contain.text", "manager1")
        cy.get("[data-cy=language-field]").should("have.text", "English")
    })
})