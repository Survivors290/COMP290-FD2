describe("Test the harvest report generation", () => {
    beforeEach (() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })

    it("Check if generate Button works", () => {
        cy.get("[data-cy=reportHeader]")
        .should("not.exist")
        cy.get("[data-cy=generateButton]").click()
        cy.get("[data-cy=reportHeader]")
        .should("be.visible")
    })
})