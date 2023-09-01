import { Page, Locator} from "@playwright/test";

export class ElementosPageLogin {
    readonly page: Page;
    readonly userName: Locator;
    readonly passWord: Locator;
    readonly loginBotao: Locator;
   

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator('#user-name');
        this.passWord = page.locator('#password');
        this.loginBotao= page.locator('[data-test="login-button"]');
        
    }

}