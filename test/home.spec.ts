import { test } from '@playwright/test';
import { Classe } from '../pages/metodos';

test.describe('Testes na home da página', () => {
    let umaClasse: Classe
    test.beforeEach(async ({ page }) => {
        // Roda antes da cada teste
        umaClasse = new Classe(page)
        await page.goto('https://www.saucedemo.com/');
        await umaClasse.loginValido('standard_user','secret_sauce')
    });
    test.afterEach(async ({ page }) => {
        await page.close()
    });

    // "umaClasse" recebe a classe com os métodos dentro, em seguida chamo os metodos criados na classe
    test('clicar no menu lateral', async () => {
        await umaClasse.ClicaMenu()
    })
    test('verificar titulo da pagina', async () => {
        await umaClasse.VerificaTitle()
    })
    test('clicar na rede social', async () => {
        await umaClasse.ClicaRede()
    })
    
})