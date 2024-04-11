describe("Testing default inputs for Labor chart", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-field-kit/seedingInput")
    })
    
    it("Checks header is Labor", () => { //megan
        
    })

    it("checks fields are empty", () => { //ryan
        cy.get("[data-cy=minute-input]").should("has.text", "")
        cy.get("[data-cy=hour-input]").should("has.text", "")
    })

    it("Checks dropdown values are default", () => { //chloe
        
    })

    it("Checks default time unit", () => { //megan
        
    })
} )