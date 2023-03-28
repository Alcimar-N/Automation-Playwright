import { test, expect } from '@playwright/test';
import { Classe } from '../pages/metodos';

test.describe('Testes na home da página', () => {

    test.beforeEach(async ({ page }) => {
        // Roda antes da cada teste
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[id=user-name]').fill('standard_user')
        await page.locator('[id=password]').fill('secret_sauce')
        await page.locator('//*[@type="submit"]').click()
    });
    test.afterAll(async ({ page }) => {
        await page.close()
    });
    // "varialvel" recebe a classe com os métodos dentro, em seguida chamo os metodos criados na classe

    test('clicar no menu lateral', async ({ page }) => {
        const variavel = new Classe(page)
        await variavel.ClicaMenu()
    })

    test('verificar titulo da pagina', async ({ page }) => {
        const variavel = new Classe(page)
        await variavel.VerificaTitle()
    })

    test('clicar na rede social', async ({ page }) => {
        const variavel = new Classe(page)
        await variavel.ClicaRede()
    })

})