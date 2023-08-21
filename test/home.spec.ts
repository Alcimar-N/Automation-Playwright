import { test } from '@playwright/test';
import { homePage } from '../pages/homePage';

test.describe('Testes na home da página', () => {
 
    let homesPage: homePage

    test.beforeEach(async ({ page }) => {
        // Roda antes da cada teste
     
        homesPage = new homePage(page)
        await page.goto('https://www.saucedemo.com/');
    
    });
    test.afterEach(async ({ page }) => {
        //roda depois de cada teste
        await page.close()
    });


    test('', async() => {

    })

})
