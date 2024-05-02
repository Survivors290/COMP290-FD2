describe('Seeding Report Crop Filter Functionality', () => {

    beforeEach(() => {
        cy.login('manager1', 'farmdata2');
        cy.visit('/farm/fd2-barn-kit/seedingReport');
        cy.get("[data-cy=seeding-report]").should("exist");
    });

    it("Checks the crop filter for the specific crop", () => {
        
        cy.get("[data-cy=generate-rpt-btn]").click();

       
        cy.get("[data-cy=filters-panel]").should("exist");
        cy.get("[data-cy=report-table]").should("exist");
        cy.get("[data-cy=loader]").should("exist");

        
        cy.get("[data-cy=crop-dropdown]").click();

        
        cy.get("[data-cy=crop-dropdown]").then(($options) => {
            const randomIndex = Cypress._.random(0, $options.length - 1);
            const selectedCrop = Cypress.$($options[randomIndex]).text().trim();
            cy.wrap($options[randomIndex]).click();
        });

        
        cy.get("[data-cy=report-table]").should('exist');
    });
});

