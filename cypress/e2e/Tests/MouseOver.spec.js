/// <reference types='cypress'/>

import 'cypress-iframe'

describe('Action keyword test suit', function(){
    it('verify the mouse over', function(){
        cy.visit("https://demo.opencart.com/")
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible')

    })
    it('verify the right click', function(){
        cy.visit("https://demo.guru99.com/test/simple_context_menu.html")
        cy.get('span.btn-neutral').trigger('contextmenu')
        cy.get('#authentication> ul > li.context-menu-item.context-menu-icon.context-menu-icon-copy > span').should('be.visible')

    })
    it.only('verify the double click', function(){
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded('iframe#iframeResult') //Load or swtich the frame
        cy.iframe('iframe#iframeResult').find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe('iframe#iframeResult').find('#field2').should('have.value', 'Hello World!')

    })
    it('scrolling page', function(){

    })
})