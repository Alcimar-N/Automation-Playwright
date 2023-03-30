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
        await page.close()
    });

    test('verifica texto', async() => {
        await umaClasse.Loctext()
    })
    test('', async () => {

    })
    test('', async () => {
        
    })
    test('', async () => {
        
    })
})