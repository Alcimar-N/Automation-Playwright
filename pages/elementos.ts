import { Page, Locator } from "@playwright/test";
//import { Classe } from "./pageObject";

export class ElementosPage {
    readonly page: Page;
    // readonly getStartedLink: Locator;
    readonly texto: Locator;
    readonly botao: Locator;

    constructor(page: Page) {
        // this.getStartedLink = page.locator('a', { hasText: 'Get started' });
        this.page = page;
        this.texto = page.locator('//*[@id="root"]/div/div[1]');
        this.botao = page.locator('#login-button')
    }

}