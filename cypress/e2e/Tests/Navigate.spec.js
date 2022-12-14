/// <reference types='cypress'/>

describe("Navigation test suite", function(){
    it("Verify the navigation", function(){
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('eq', 'nopCommerce demo store') //home page title verification

        cy.get('.ico-register').click() //click on register link
        cy.title().should('eq', 'nopCommerce demo store. Register') //register page title verification

        cy.go('back')  //Navigate to back
        cy.title().should('eq', 'nopCommerce demo store')

        cy.go('forward') //navigate to forward
        cy.title().should('eq', 'nopCommerce demo store. Register')

        cy.go(-1)  //Navigate to back using -1

        cy.go(1) //Navigate to forward using 1

        cy.reload() //reload the page

    })
})