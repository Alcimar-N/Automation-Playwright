import { Page, expect } from "@playwright/test";
import { ElementosPage } from "./elementos";


export class LoginPage {
    readonly page:Page
    readonly elementos : ElementosPage
    

    constructor(page:Page){
      this.page = page
      this.elementos = new ElementosPage(page)
    }

    async Login() {
       await this.elementos.userName.fill('standard_user')
       await this.elementos.passWord.fill('secret_sauce')
       await this.elementos.loginBotao.click()
       await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
    }

    
}