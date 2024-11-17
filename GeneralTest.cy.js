class GeneralTest{
  GeneralTest(){
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.xpath('//button[@type="submit"]').click()
      cy.xpath('(//a[@class="oxd-main-menu-item"])[1]').click()
      cy.xpath('(//span[@class="oxd-checkbox-input oxd-checkbox-input--active --label-right oxd-checkbox-input"])[1]').click()
  }

  clickOnFirstUsername(){
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.xpath('//button[@type="submit"]').click()
      cy.xpath('(//a[@class="oxd-main-menu-item"])[1]').click()
      cy.xpath('(//span[@class="oxd-checkbox-input oxd-checkbox-input--active --label-right oxd-checkbox-input"])[2]').click()
  }

  clickOnSecondUsername(){
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
      cy.xpath('//button[@type="submit"]').click()
        cy.xpath('(//a[@class="oxd-main-menu-item"])[1]').click()
        cy.xpath('(//span[@class="oxd-checkbox-input oxd-checkbox-input--active --label-right oxd-checkbox-input"])[3]').click()
    }

    clickOnThirdUsername(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.xpath('//button[@type="submit"]').click()
        cy.xpath('(//a[@class="oxd-main-menu-item"])[1]').click()
        cy.xpath('(//span[@class="oxd-checkbox-input oxd-checkbox-input--active --label-right oxd-checkbox-input"])[4]').click()
    }

    typeOnEmployeeNameInPIM(){
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
            cy.xpath('//button[@type="submit"]').click()
            cy.xpath('(//a[@class="oxd-main-menu-item"])[2]').click()
            cy.xpath('(//input[@placeholder="Type for hints..."])[1]').click()

    }
}

export default GeneralTest
