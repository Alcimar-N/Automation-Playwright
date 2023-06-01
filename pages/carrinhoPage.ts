import { Page } from "@playwright/test";
//import { ElementosPage } from "./elementos";

export class  carrinhoClasse {
    readonly page:Page
    

    constructor(page:Page){
        this.page = page
        
    }


    async AddProduto() {
        await this.page.locator('[id=add-to-cart-sauce-labs-backpack]').click()
        await this.page.screenshot({ path: 'screenshot.png' })
    
      }
    
      async AcessaCarrinho() {
        await this.page.waitForTimeout(2000)
        await this.page.locator(' [id^="shopping"]').screenshot({ path: 'screenshot.png' })
    
      }
    
      async RemoveItem() {
        await this.AcessaCarrinho()
        await this.page.locator('//*[@id="remove-sauce-labs-backpack"]').click()
        await this.page.waitForTimeout(2000)
        await this.page.screenshot({ path: 'screenshot.png' })
      }
}