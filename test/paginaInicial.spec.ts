import { test } from '@playwright/test';
import { Classe } from '../pages/metodos';

test.describe('Página inicial', () => {
    let umaClasse: Classe

    test.beforeEach(async ({ page }) => {
        // Roda antes da cada teste
        umaClasse = new Classe(page)
        await page.goto('https://www.saucedemo.com/');

    });
    test.afterEach(async ({ page }) => {
        //roda depois de cada teste
        await page.close()
    });

    test('verifica algum texto', async() => {
        await umaClasse.Loctext()
    })
    test('verifica botão Login', async () => {
        await umaClasse.VerificaBtnLogin()
    })
    test('verifica username', async () => {
        await umaClasse.VerificarUserName
    })
    test('verifica password', async () => {
        await umaClasse.verificaPassword()
    })
})