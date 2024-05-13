//Tests the crop filter for the generated report 
describe('Seeding Report Crop Filter Functionality', () => {

    beforeEach(() => {
        cy.login('manager1', 'farmdata2');
        cy.visit('/farm/fd2-barn-kit/seedingReport');
        cy.get("[data-cy=seeding-report]").should("exist");
        
    });

    it("Check the crop filter when at all", () => {
        cy.get('[data-cy=start-date-select]>[data-cy=date-select]').type("2019-01-01");
        cy.get('[data-cy=end-date-select]>[data-cy=date-select]').type("2019-02-13");
        cy.get("[data-cy=generate-rpt-btn]").click();
        cy.get("[data-cy=r0-Crop]").should("have.text", "GARLIC")
        cy.get("[data-cy=r1-Crop]").should("have.text", "GARLIC")
        cy.get("[data-cy=r2-Crop]").should("have.text", "RADISH")
        cy.get("[data-cy=r3-Crop]").should("have.text", "ARUGULA")
        cy.get("[data-cy=r4-Crop]").should("have.text", "CARROT")
        cy.get("[data-cy=r5-Crop]").should("have.text", "CARROT")
        cy.get("[data-cy=table-body]").children().should("have.length", "6")

    })
    it("Checks the crop filter for the specific crop", () => {
        cy.get('[data-cy=start-date-select]>[data-cy=date-select]').type("2019-01-01");
        cy.get('[data-cy=end-date-select]>[data-cy=date-select]').type("2024-01-01");
        cy.get("[data-cy=generate-rpt-btn]").click();
        cy.get("[data-cy=crop-dropdown]> [data-cy=dropdown-input]").select("ARUGULA")
        cy.get("[data-cy=r0-Crop]").should("have.text", "ARUGULA")
        cy.get("[data-cy=r1-Crop]").should("have.text", "ARUGULA")
    });
    it("Checks the crop filter for the specified date range", () => {
        cy.get('[data-cy=start-date-select]>[data-cy=date-select]').type("2019-01-01");
        cy.get('[data-cy=end-date-select]>[data-cy=date-select]').type("2024-01-01");                                  
        cy.get("[data-cy=generate-rpt-btn]").click();

        cy.get("[data-cy=filters-panel]").should("exist");
        cy.get("[data-cy=report-table]").should("exist");
        cy.get("[data-cy=loader]").should("exist");

        cy.get("[data-cy=crop-dropdown]").click();
        cy.get("[data-cy=crop-dropdown]> [data-cy=dropdown-input]").select("ARUGULA");
       
        cy.get("[data-cy=r0-Date]").should("have.text", "2019-02-13");
        cy.get("[data-cy=r1-Date]").should("have.text", "2019-02-21");
    })

});

