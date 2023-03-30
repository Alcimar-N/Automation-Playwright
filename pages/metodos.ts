// aqui escrevo os métodos dentro da classe, que chamarei na pasta de teste "abc.spec.ts"
import { expect, Page } from '@playwright/test';
import { ElementosPage } from './elementos';

export class Classe extends ElementosPage {
  readonly page: Page;
  readonly elementos: ElementosPage;

  constructor(page: Page) {
    super(page)
    this.page = page
    this.elementos = new ElementosPage(page)

  }

  async Locbotao() {
    await this.elementos.botao.click()
    await this.page.waitForTimeout(3000)
  }

  async LocTexto() {
    await this.elementos.text.getByTitle('Swag Labs')
    await this.page.waitForTimeout(2000)
  }

  async loginValido(usuario: string, senha: string) {
    await this.page.locator('[id=user-name]').fill(usuario)
    await this.page.locator('[id=password]').fill(senha)
    await this.page.locator('//*[@type="submit"]').click()


  }
  async IrParaPagina() {
    await this.page.waitForTimeout(2000)
    await this.page.screenshot()

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

  async Nomevazio() {
    await this.page.locator('[id=user-name]').fill('standard_user')
    await this.page.locator('[id=password]').fill('')
    await this.page.locator('//*[@type="submit"]').click()
    await expect(this.page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toHaveText('Epic sadface: Password is required')
  }

  async SenhaVazia() {
    await this.page.locator('[id=user-name]').fill('standard_user')
    await this.page.locator('[id=password]').fill('')
    await this.page.locator('//*[@type="submit"]').click()
    await expect(this.page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toHaveText('Epic sadface: Password is required')
  }

  async VerificaTitle() {
    await expect(this.page.locator('//*[@id="header_container"]/div[1]/div[2]/div')).toHaveText('Swag Labs')
    await this.page.locator('//*[@id="header_container"]/div[1]/div[2]/div').screenshot({ path: 'screenshot.png' });
  }

  async ClicaMenu() {
    await this.page.locator('#react-burger-menu-btn').click()
    await this.page.waitForTimeout(2000)
    await this.page.screenshot({ path: 'screenshot.png' })
  }

  async ClicaRede() {
    await this.page.locator('//*[@class="footer"]//li[2]/a').click()
    await this.page.waitForURL
    await this.page.locator('//*[@class="footer"]//li[2]/a').screenshot({ path: 'screenshot.png' })
  }

  async Loctext() {
    await this.elementos.text.textContent('Accepted usernames are:')
    await this.text.screenshot({ path: 'screenshot.png' });
  }

}