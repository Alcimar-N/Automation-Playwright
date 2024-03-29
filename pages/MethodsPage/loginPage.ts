import { Page, expect } from "@playwright/test";
import { ElementsLoginPage } from "../../elementsPage/elementosLoginPage"; 


export class LoginPage {
    readonly page:Page
    readonly elementosPageLogin : ElementsLoginPage
    

    constructor(page:Page){
      this.page = page
      this.elementosPageLogin = new ElementsLoginPage(page)
    }

    async Login() {
       await this.elementosPageLogin.userName.fill('standard_user')
       await this.elementosPageLogin.passWord.fill('secret_sauce')
       await this.elementosPageLogin.loginBotao.click()
       await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
    }

    async usuarioVazio(){
      await this.elementosPageLogin.loginBotao.click()
      await expect(this.elementosPageLogin.msgLoginVazio).toHaveText('Epic sadface: Username is required')
    }

    async senhaVazia(){
      await this.elementosPageLogin.userName.fill('standard_user')
      await this.elementosPageLogin.loginBotao.click()
      await expect(this.elementosPageLogin.msgSenhaVazia).toHaveText('Epic sadface: Password is required')
    }
    
    async credenciaisInvalidas(){
      await this.elementosPageLogin.userName.fill('ABC')
      await this.elementosPageLogin.passWord.fill('ABC')
      await this.elementosPageLogin.loginBotao.click()
      await expect(this.elementosPageLogin.msgSenhaVazia).toHaveText('Epic sadface: Username and password do not match any user in this service')
    }

    async textoPaginaDeLogin(){
      await expect(this.elementosPageLogin.textoPaginaLogin).toHaveText('Swag Labs')
    }
}