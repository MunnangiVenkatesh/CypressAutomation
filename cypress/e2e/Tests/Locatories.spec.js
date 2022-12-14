///<reference types="Cypress" />

describe("Locating elements", function(){
    it('verify the type of locatores', function(){
        cy.visit("https://demo.nopcommerce.com/") //Launch the URL
        cy.get("[placeholder='Search store']").type("Apple MacBook Pro 13-inch") //Search for Apple MacBook
        cy.get(".search-box-button").click() //click on search button
        cy.get(".product-box-add-to-cart-button").click() //click on add to cart
        cy.get("#product_enteredQuantity_4[type='text']").clear().type(2)
        cy.get("#add-to-cart-button-4[type='button']").click()
        cy.wait(5000)
        cy.get("#topcartlink > a > span.cart-label").click()
        cy.wait(3000)
        cy.get("#shopping-cart-form > div.table-wrapper > table > tbody > tr > td.unit-price > span").contains("$1,800.00")

    })
})