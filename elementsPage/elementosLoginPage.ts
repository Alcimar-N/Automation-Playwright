import { Page, Locator} from "@playwright/test";

export class ElementsPage {
    readonly page: Page;
    readonly userName: Locator;
    readonly passWord: Locator;
    readonly loginBotao: Locator;
    readonly msgLoginVazio: Locator;
    readonly msgSenhaVazia: Locator;
    readonly textoPaginaLogin: Locator;
   

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator('#user-name');
        this.passWord = page.locator('#password');
        this.loginBotao = page.locator('[data-test="login-button"]');
        this.msgLoginVazio = page.locator('[data-test="error"]');
        this.msgSenhaVazia = page.locator('[class="error-message-container error"] ');
        this.textoPaginaLogin = page.locator('.login_logo');
        
        
    }

}