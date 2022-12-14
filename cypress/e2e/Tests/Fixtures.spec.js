/// <reference types='cypress'/>

describe('Fixtures demo', function(){
    before(function(){
        cy.fixture('example').then(function(login){
            this.login=login
        })
    })
    it('verify get data from fixtures', function(){
        cy.visit("https://admin-demo.nopcommerce.com/login")
        cy.get('input[type=email]').clear().type(this.login.email)
        cy.get('input[type=password]').clear().type(this.login.password)
        cy.get('.login-button').click()
    })
})