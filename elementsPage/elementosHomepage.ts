import { Page, Locator} from "@playwright/test";

export class ElementsHomePage {
    readonly page: Page;
    readonly tituloProdutos: Locator;
    readonly listaProdutos: Locator;
    readonly redesSocialTwiter: Locator;
    readonly redesSocialFacebook: Locator;
    readonly redesSocialLinkendin: Locator;
    readonly menuBurger: Locator;
    readonly listaMenuBurger: Locator;
    readonly filtroProdutos: Locator;
   

    constructor(page: Page) {
        this.page = page;
        this.tituloProdutos = page.locator('.header_secondary_container > span')
        this.listaProdutos = page.locator('[class="inventory_item"]')
        this.redesSocialTwiter = page.locator('ul[class="social"] li:nth-child(1)')
        this.redesSocialFacebook = page.locator('ul[class="social"] li:nth-child(2)')
        this.redesSocialLinkendin = page.locator('ul[class="social"] li:nth-child(3)')
        this.menuBurger = page.locator('#react-burger-menu-btn')
        this.listaMenuBurger = page.locator('[class="bm-item-list"] > a')
        this.filtroProdutos = page.locator('.product_sort_container')
        
    }

}

