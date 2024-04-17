describe("Test the harvest report user output values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
        cy.get("[data-cy=header-check]").should("not.exist")
        cy.get("[data-cy=generate-button]").click()
        cy.get("[data-cy=header-check]").should("be.visible");

    })
    it("Check the generate report button", () => {

    })
})