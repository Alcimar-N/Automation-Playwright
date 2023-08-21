import { Page, expect } from "@playwright/test";
import { ElementosPage } from "./elementos";
//import { homePage } from "./homePage";
//import { Classe } from "./metodos";

export class loginPage {
    readonly page:Page

    readonly elementos : ElementosPage
    //readonly clas : Classe

    constructor(page:Page){
      this.page = page
      this.elementos = new ElementosPage(page)
    }

    async VerificaBtnLogin() {
       await expect(this.elementos.botao).toHaveValue('Login')
    }

    async teste(){

    }
}