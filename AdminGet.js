class AdminGet{
  AdminGet(){
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.xpath('//button[@type="submit"]').click()
      cy.xpath('(//a[@class="oxd-main-menu-item"])[1]').click()

      // click on search button and type
      cy.xpath('(//input[@class="oxd-input oxd-input--active"])[1]').click().type('admin')

      // check admin text is present or not
      cy.xpath('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').should('have.text','Admin')

      // upgrade button is clickable or not
      cy.xpath('//button[@class="oxd-glass-button orangehrm-upgrade-button"]').click()


      // click on dashboard 
      cy.xpath('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[8]').click()
  }
  PomGet(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
    cy.xpath('//button[@type="submit"]').click()
    cy.xpath('(//a[@class="oxd-main-menu-item"])[2]').click()
}

LeaveGet(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
    cy.xpath('//button[@type="submit"]').click()
    cy.xpath('(//a[@class="oxd-main-menu-item"])[3]').click()
}


TimeGet(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
    cy.xpath('//button[@type="submit"]').click()
    cy.xpath('(//a[@class="oxd-main-menu-item"])[4]').click()
}


}

