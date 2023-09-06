import { test } from '@playwright/test';
//import { HomePage } from '../pages/homePage';
import{ LoginPage } from '../pages/loginPage'

test.describe('Testes na home da página', () => {
  
    //let homesPage: HomePage
    let loginPage: LoginPage

    test.beforeEach(async ({ page }) => {
        // Roda antes da cada teste
       
      //  homesPage = new HomePage(page)
        loginPage = new LoginPage(page)
        await page.goto('https://www.saucedemo.com/');
        await loginPage.Login()

        
    });
    test.afterEach(async ({ page }) => {
        //roda depois de cada teste
        await page.close()
    });
    
    test('valida titulo da pagina produto', async() => {
       // await homesPage.verificaTituloProduto()
    })

})
