///<reference types='cypress'/>
class Login{
    visit(){
        cy.visit("https://admin-demo.nopcommerce.com/login")
    }

    FillUserName(username){
        const email = cy.get('input[type=email]')
        email.clear()
        email.type(username)
    return this
    }

    FillPassword(password){
        const pwd=cy.get('input[type=password]')
        pwd.clear()
        pwd.type(password)
        return this
    }
    Singin(){
        const button =cy.get('.buttons > button[type=submit]')
        button.click()
    }
}

export default Login