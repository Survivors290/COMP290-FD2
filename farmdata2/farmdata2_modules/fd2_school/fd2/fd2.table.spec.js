describe("Check the contents of the harvest report table", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2")
    })
      
    it("Checks the table's headers", () => {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=h0]").should("have.text", "ID")
        cy.get("[data-cy=h1]").should("have.text", "Date")
        cy.get("[data-cy=h2]").should("have.text", "Area")
        cy.get("[data-cy=h3]").should("have.text", "Crop")
        cy.get("[data-cy=h4]").should("have.text", "Yield")
        cy.get("[data-cy=h5]").should("have.text", "Units")
    })

    it("Checks that the table has the right number of columns", () => {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=table-headers]").children().should("have.length", 8)
    })

    it("Checks that the table is created correctly with the selected crop", () => {
        cy.get("[data-cy=start-date]").should("have.value","2020-05-05")
        cy.get("[data-cy=end-date]").should("have.value","2020-05-15")
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input]").select("ARUGULA")
        cy.get("[data-cy=table-body]").children().should("have.length", 4)
        cy.get("[data-cy=td-r0c3]").should("have.text", "ARUGULA     ")
        cy.get("[data-cy=td-r1c3]").should("have.text", "ARUGULA     ")
        cy.get("[data-cy=td-r2c3]").should("have.text", "ARUGULA     ")
        cy.get("[data-cy=td-r3c3]").should("have.text", "ARUGULA     ")
    })
})