describe("my test suit", function(){
    it("Verify the navigate to url", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.title().should('eq', "Practice Page")
    })
    it("Verify the radio button to url", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
    })
})