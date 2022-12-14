/// <reference types="Cypress" />

describe("Hadning radio check and drop downs", function(){
    it("verify the radio button elements", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('input[value=radio1]').should('be.visible').should('not.be.checked').click()
        cy.url().should('include','rahulshettyacademy')
        // check box validation
        cy.get('#checkbox-example > fieldset > label >input[type=checkbox]').check(['option1','option3'])
    })
    it("verify the drop donws", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#dropdown-class-example').select('Option2').should('have.value', 'option2') //select the option2 and validate the value
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === 'India') {
                cy.wrap($el).click()
                cy.get('#autocomplete').should('have.value','India')
            }

        })
        // cy.get('.ui-autocomplete-input').type('Ind')
        // cy.get('.ui-menu-item-wrapper').contains('India').click({force:true})
        // cy.get('.ui-autocomplete-input').type('{downarrow}')
        // cy.get('.ui-autocomplete-input').type('{enter}')

    })
    // it("verify the different drop downs", function(){
    //     cy.visit("https://demo.automationtesting.in/Register.html")
    //     cy.get('#btn2[type=button]').click()
    //     cy.get('#Skills').select('Android').should('have.value', 'Android')
    //     cy.get('#msdd').click()
    //     cy.get('.ui-corner-all').contains(['Bulgarian','Danish']).click()
    //     cy.get('[role=combobox]').click({force: true})
    //     cy.get('.select2-search__field').type('Ind')
    //     cy.get('.select2-search__field').type('{enter}')
    // })
})