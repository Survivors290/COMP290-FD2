describe("Test the harvest report report generation", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
      
    it("Click 'Generate Report' button", () => {
        cy.get("[data-cy=generate-report-button]").click()
    })
    
    it("Check if harvest report header exists", () => {
        cy.get("[data-cy=harvest-report-header]")
            .should("not.exist")
    })

    it("Check if harvest report header exists", () => {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=harvest-report-header]")
            .should("be.visible")
    })

    it("Check name of farm", () => {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=farm-name]")
            .should("contain.text", "Sample Farm")
    })

    it("Check username", () => {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=user-name]")
            .should("contain.text", "manager1")
    })

    it("Check language", () => {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=language]")
            .should("contain.text", "English")
    })
})
