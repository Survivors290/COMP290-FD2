describe("Testing default inputs for Labor chart", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-field-kit/seedingInput")
    })
    
    it("Checks header is Labor", () => { //megan
        cy.get("[data-cy=labor-header]").should("have.text", "Labor")
    })

    it("checks fields are empty", () => { //ryan
        
    })

    it("Checks dropdown values are default", () => { //chloe
        
    })

    it("Checks default time unit", () => { //megan
        
    })
} )