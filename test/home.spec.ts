import { test } from '@playwright/test';
<<<<<<< Updated upstream
import { homePage } from '../pages/homePage';

test.describe('Testes na home da página', () => {
  
    let homesPage: homePage
=======
//import { HomePage } from '../pages/homePage';
import{ LoginPage } from '../pages/loginPage'

test.describe('Testes na home da página', () => {
  
    //let homesPage: HomePage
    let loginPage: LoginPage
>>>>>>> Stashed changes

    test.beforeEach(async ({ page }) => {
        // Roda antes da cada teste
       
<<<<<<< Updated upstream
        homesPage = new homePage(page)
=======
      //  homesPage = new HomePage(page)
        loginPage = new LoginPage(page)
>>>>>>> Stashed changes
        await page.goto('https://www.saucedemo.com/');
        
    });
    test.afterEach(async ({ page }) => {
        //roda depois de cada teste
        await page.close()
    });
    
<<<<<<< Updated upstream
    test('', async() => {

=======
    test('valida titulo da pagina produto', async() => {
       // await homesPage.verificaTituloProduto()
>>>>>>> Stashed changes
    })

})
