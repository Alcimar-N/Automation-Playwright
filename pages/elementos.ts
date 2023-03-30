import { Page, Locator} from "@playwright/test";
//import { Classe } from "./pageObject";

export class ElementosPage {
    readonly page: Page;
    readonly texto: Locator;
    readonly botao: Locator;
    readonly text: Locator;

    constructor(page: Page) {
        this.page = page;
        this.texto = page.locator('//*[@id="root"]/div/div[1]');
        this.botao = page.locator('#login-button')
        this.text = page.locator('#login_credentials > h4')
    }

}