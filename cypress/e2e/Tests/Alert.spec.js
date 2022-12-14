/// <reference types="cypress" />
describe("Alert handle", function(){
    it('Alert', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#name').type('Venkatesh')
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('Hello Venkatesh, Are you sure you want to confirm?')
        })
        cy.contains('Hello Venkatesh, Are you sure you want to confirm?').click()
    })
})