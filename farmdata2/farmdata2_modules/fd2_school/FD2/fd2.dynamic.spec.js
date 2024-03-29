describe('Test the harvest report dynamic features', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-school/fd2')
    })
    it('Check generate button', ()=> {
        //cy.get("[data-cy=report-header]").should("not.exist")
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=report-header]").should("be.visible")

    })
    it('Check general farm information', ()=> {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=farm-name]").should("have.text", "Farm: Sample Farm")
        cy.get("[data-cy=user-name]").should("contain.text", "manager1")
        cy.get("[data-cy=language").should("have.text", "English")

    })
})
