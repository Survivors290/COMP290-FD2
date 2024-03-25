describe("hi", () => {
    beforeEach(() => {
        cy.login("manager1","farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })

    it("Click the generate report button, check visibility", () => {
        cy.get("[data-cy=report-header").should("not.exist")
        cy.get("[data-cy=generate-button]").click()
        cy.get("[data-cy=report-header]").should("be.visible")
    })

    it("Check report elements after generate report", () => {
        cy.get("[data-cy=generate-button]").click()
        cy.get("[data-cy=report-farm]").should("has.text", "Farm: Sample Farm")
        cy.get("[data-cy=report-user]").should("contain.text", "manager1")
        cy.get("[data-cy=report-language]").should("have.text", "English")

    })

})
