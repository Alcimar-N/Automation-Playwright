import { Page, Locator} from "@playwright/test";
//import { Classe } from "../pages/metodos";

export class ElementosPage {
    readonly page: Page;
    readonly texto: Locator;
    readonly botao: Locator;
    readonly text: Locator;
    readonly username: Locator;
    readonly password: Locator;
    constructor(page: Page) {
        this.page = page;
        this.texto = page.locator('//*[@id="root"]/div/div[1]');
        this.botao = page.locator('#login-button')
        this.text = page.locator('#login_credentials > h4')
        this.username = page.locator('#user-name')
        this.password = page.locator('[placeholder="Password"]')
    }

}