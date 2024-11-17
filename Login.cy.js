class Login{
  ValidLogin(){
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.xpath('//button[@type="submit"]').click()
  }

  // invalid login
  InvalidLogin(){
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin111")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123111")
      cy.xpath('//button[@type="submit"]').click()       
  }

  ValidName(){
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
  }

  InvalidName(){
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    }
}

export default Login
