/// <reference types = 'cypress' />

describe("Web table test suite", function(){
    it("verify the table test", function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        //Check value anywhere in table
        cy.get('table[name=courses]').contains('td', 'Learn SQL in Practical + Database Testing from Scratch').should('be.visible')
        //Check the value in specified row and specified column
        cy.get('table[name=courses] > tbody > tr:nth-child(6) > td:nth-child(2)').contains('Learn JMETER from Scratch - (Performance + Load) Testing Tool').should('be.visible')
        cy.get('table[name=courses] > tbody > tr td:nth-child(2)').each(($el, index, $list)=>{
            const course=$el.text()
            if (course.includes("Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C")){
                cy.get('table[name=courses] > tbody > tr td:nth-child(1)').eq(index).then(function(teacher){
                    const teacherName=teacher.text()
                    expect(teacherName).to.equal('Rahul Shetty')
                })
            }
        })
        
    })
})