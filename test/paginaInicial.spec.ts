import { test } from '@playwright/test';

test.describe('Página inicial', () => {
   

    test.beforeEach(async ({ page }) => {
        // Roda antes da cada teste
        
        await page.goto('https://www.saucedemo.com/');

    });
    test.afterEach(async ({ page }) => {
        //roda depois de cada teste
        await page.close()
    });

    test('', async() => {
        
    })
    
})