import { test, expect } from '@playwright/test';
//import { Classe } from '../pages/metodos'; // importei a classe com nome "Classe" criada na pasta "pageObjects"
import { homePage } from '../pages/MethodsPage';
import { LoginPage } from '../pages/MethodsPage';
// aqui escrevo os testes chamando os metodos criados na classe da pagina metodos

test.describe('Login', () => {
    //let umaClasse: Classe
    let homesPage: homePage
    let loginPage: LoginPage
    test.beforeEach(async ({ page }) => {
        // Roda antes da cada teste
       // umaClasse = new Classe(page)
        homesPage =new homePage(page)
        loginPage = new LoginPage(page)
        await page.goto('https://www.saucedemo.com/')

    });
    test.afterEach(async ({ page }) => {
        await page.close()
    });
        
    test('home teste botão login', async() => {
        await login.VerificaBtnLogin()
    })
})
