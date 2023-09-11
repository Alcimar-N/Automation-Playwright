/* import { test, expect } from '@playwright/test';
import { carrinhoClasse } from '../pages/carrinhoPage';

test.describe('Funcionalidade carrinho', () => {
    
    let carrinhoClas: carrinhoClasse

    test.beforeEach(async ({ page }) => {
        // Roda antes da cada teste
        carrinhoClas = new carrinhoClasse(page)
        
        await page.goto('https://www.saucedemo.com/');
        
    });
    test.afterEach(async ({ page }) => {
        //roda depois de cada teste
        await page.close()
    });

    test('adicionar item no carrinho', async () => {
        await carrinhoClas.AddProduto()
    })

    test('acessar carrinho', async ({}) => {
        await carrinhoClas.AcessaCarrinho()
    })

    test('remover item do carrinho', async ({}) => {
        await carrinhoClas.AddProduto()
        await carrinhoClas.RemoveItem()  
    })

    test('finaliza compra', async({}) => {
        await carrinhoClas.FinalizaCompra()
        await carrinhoClas.Checkout()
    })

}) */