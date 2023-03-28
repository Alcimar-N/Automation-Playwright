// example.spec.ts
// teste de branch
import { test, expect } from '@playwright/test';
import { Classe } from '../pages/pageObject'; // importei a classe com nome "Classe" criada na pasta "pageObjects"

// aqui escrevo os testes chamando os metodos criados na classe da pagina pageObjects

test.describe('Login', () => {


    test.beforeEach(async ({ page }) => {
        // Roda antes da cada teste
        await page.goto('https://www.saucedemo.com/');
        // await page.locator('[id=user-name]').fill('standard_user')
        // await page.locator('[id=password]').fill('secret_sauce')
        // await page.locator('//*[@type="submit"]').click()
    });


    test('Login válido', async ({ page }) => {
        // "varialvel" recebe a classe com os métodos dentro, em seguida chamo os metodos criados na classe
        const variavel = new Classe(page);
        await variavel.loginValido()

    })

    test('senha vazia', async ({ page }) => {
        const varialvel = new Classe(page)
        await varialvel.SenhaVazia()

    })
    test('e-mail vazio', async ({ page }) => {
        const varialvel = new Classe(page)
        await varialvel.Nomevazio()

    })

})

