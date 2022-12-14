/// <reference types = 'cypress' />

describe('Hooks test suit', function(){
    before(function(){
        cy.log('**** before set up ***')
    }
    )
    after(function(){
        cy.log('****after set up *****')
    })
    beforeEach(function(){
        cy.log('****login***')
    })
    afterEach(function(){
        cy.log('****log out****')

    })
        it('searcing', function(){
            cy.log("searching")

        })
        it('advanced search', function(){
            cy.log('advanced search')
        })
        it('loading', function(){
            cy.log('loading page')
        })
})