import { test, expect } from '@playwright/test';
import { Classe } from '../pages/metodos';

test.describe('Verificar carrinho', () => {
    
    test.beforeEach(async ({ page }) => {
        // Roda antes da cada teste
        //let rebeceClasse = new Classe(page)
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[id=user-name]').fill('standard_user')
        await page.locator('[id=password]').fill('secret_sauce')
        await page.locator('//*[@type="submit"]').click()
    });
    test.afterAll(async ({ page }) => {
        await page.close()
    });

    test('adicionar item no carrinho', async ({page}) => {
        const variavel = new Classe(page)
        await variavel.AddProduto()
    })

    test('acessar carrinho', async ({page}) => {
        const variavel = new Classe(page)
        await variavel.AcessaCarrinho()
        

    })


    test('remover item do carrinho', async ({page}) => {
        const varial = new Classe(page)
        await varial.AddProduto()
        await varial.RemoveItem()
        
    })

})