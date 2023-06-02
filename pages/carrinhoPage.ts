import { Page } from "@playwright/test";
//import { ElementosPage } from "./elementos";

export class carrinhoClasse {
  readonly page: Page

  constructor(page: Page) {
    this.page = page

  }

  async AddProduto() {
    //await this.page.locator('[id=add-to-cart-sauce-labs-backpack]',).click()
    // elementos dentro das variaveis element1, 2
    const element1 = await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
    const element2 = await this.page.waitForSelector('#add-to-cart-sauce-labs-bolt-t-shirt')
   
    await Promise.all([ // promisse.all() aguarda que várias açoes sejam concluida para seguir
      element1.click(),
      element2.click()
    ])
    await this.AcessaCarrinho()
    await this.page.waitForTimeout(5000)
  }

  async AcessaCarrinho() {
    await this.page.waitForTimeout(2000)
    await this.page.locator('[id^="shopping"]').click()
    await this.page.waitForTimeout(8000)

  }

  async RemoveItem() {
    await this.AcessaCarrinho()
    await this.page.locator('//*[@id="remove-sauce-labs-backpack"]').click()
    await this.page.waitForTimeout(2000)
  }

  async FinalizaCompra() {
    await this.AcessaCarrinho()
    await this.AddProduto()
  
  }

}