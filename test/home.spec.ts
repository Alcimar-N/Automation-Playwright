import { test } from '@playwright/test';
import { homePage } from '../pages/MethodsPage/homePage'; 
import { LoginPage } from '../pages/MethodsPage/loginPage'

test.describe('Testes na home da página', () => {
    let homesPage: homePage
    let loginPage: LoginPage

    test.beforeEach(async ({ page }) => {

        homesPage = new homePage(page)
        loginPage = new LoginPage(page)
        await page.goto('https://www.saucedemo.com/');
        await loginPage.Login()

    });
        
    test.afterEach(async ({ page }) => {     
        await page.close()
    });

    test('valida titulo da página produto', async () => {
        await homesPage.tituloPaginaProdutos()
    })

    test.only('valida lista de produtos na pagina', async() => {
        await homesPage.ListaProdutosPagina()
    })

})
