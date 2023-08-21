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
    const element1 = await this.page.locator('#add-to-cart-sauce-labs-backpack')
    const element2 = await this.page.waitForSelector('[data-test="add-to-cart-sauce-labs-bike-light"]')
    const element3 = await this.page.waitForSelector('#add-to-cart-sauce-labs-bolt-t-shirt')

    await Promise.all([ // promisse.all() aguarda que várias açoes sejam concluida para seguir
      element1.click(),
      element2.click(),
      element3.click()

    ])
    await this.AcessaCarrinho()

  }

  async AcessaCarrinho() {
    await this.page.waitForTimeout(2000)
    await this.page.locator('[id^="shopping"]').click()


  }

  async RemoveItem() {
    await this.AcessaCarrinho()
    await this.page.locator('//*[@id="remove-sauce-labs-backpack"]').click()
    await this.page.waitForTimeout(2000)
  }

  async FinalizaCompra() {
    await this.AddProduto()
    await this.AcessaCarrinho()

  }

  async Checkout() {
    await this.page.locator('#checkout').click()
    await this.page.locator('[placeholder="First Name"]').fill('Teste')
    await this.page.locator('[placeholder="Last Name"]').fill('Testando')
    await this.page.locator('#postal-code').fill('03370020')
    await this.page.locator('#continue').click()
    await this.page.locator('#finish').click()
    await this.page.waitForTimeout(3000)
  }

}