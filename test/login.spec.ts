import { test, expect } from '@playwright/test';
import { Classe } from '../pages/metodos'; // importei a classe com nome "Classe" criada na pasta "pageObjects"
import { homePage } from '../pages/homePage';
// aqui escrevo os testes chamando os metodos criados na classe da pagina metodos

test.describe('Login', () => {
    let umaClasse: Classe
    let homesPage: homePage

    test.beforeEach(async ({ page }) => {
        // Roda antes da cada teste
        umaClasse = new Classe(page)
        homesPage =new homePage(page)

        await page.goto('https://www.saucedemo.com/')

    });
    test.afterEach(async ({ page }) => {
        await page.close()
    });

    test('Login válido', async ({ }) => { // < aqui não passo o "page" porque ela já está sendo chamado no beforEach
        // "umaClasse" recebe a classe com os métodos dentro, em seguida chamo os metodos criados na classe
        await umaClasse.loginValido('standard_user','secret_sauce')
    })
    test('senha vazia', async () => {
        await umaClasse.SenhaVazia()
    })
    test('e-mail vazio', async () => {
        await umaClasse.Nomevazio()
    })
    test('verifica titulo', async () => {
        await umaClasse.LocTexto()
    })
    test('clica botão', async () => {
        await umaClasse.Locbotao()
    })
})
