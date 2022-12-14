

import Login from '../Tests/PageObject/LoginPage'

describe('POM suite', function(){
    before(function(){
        cy.fixture('example').then(function(credentails){
            this.credentails = credentails
        })
    })
    it('verify the login', function(){
        const login = new Login()
        login.visit()
        login.FillUserName(this.credentails.email)
        login.FillPassword(this.credentails.password)
        login.Singin()
        cy.title().should('eq', 'Dashboard / nopCommerce administration')

    })
})