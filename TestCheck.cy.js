class TextCheck{
  TextCheckAdmin(){
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.xpath('//button[@type="submit"]').click()
      cy.xpath('(//a[@class="oxd-main-menu-item"])[1]').should('have.text','Admin')
  }

  TextCheckPOM(){
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.xpath('//button[@type="submit"]').click()
      cy.xpath('(//a[@class="oxd-main-menu-item"])[2]').should('have.text','PIM')
  }

  TextCheckLeave(){
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.xpath('//button[@type="submit"]').click()
      cy.xpath('(//a[@class="oxd-main-menu-item"])[3]').should('have.text','Leave')
  }

  TextCheckTime(){
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.xpath('//button[@type="submit"]').click()
      cy.xpath('(//a[@class="oxd-main-menu-item"])[4]').should('have.text','Time')
  }
}

export default TextCheck