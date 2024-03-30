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
    it("Check if farm and user name is correct", () => {
        cy.get("[data-cy=farmName]")
        .should("have.text", "Farm: sampleFarm")
        cy.get("[data-cy=userName]")
        .should("contain.text", "sampleUser")
        cy.get("[data-cy=language]")
        .should("have.text", "sampleLanguage")
    })
})